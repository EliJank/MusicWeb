import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Community.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Community = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState("");
  const [existingPosts, setExistingPosts] = useState([]);
  const { data, loading, apiMakeCall, error } = useFetch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    apiMakeCall("http://localhost:3000/post/");
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data) {
      setExistingPosts(data);
    }
  }, [data]);

  if (error) {
    return;
  }

  const createPost = async () => {
    const response = await apiMakeCall(
      "http://localhost:3000/post/create",
      "POST",
      {
        text: post,
        likes: 0,
      },
    );
    window.location.reload();
  };

  const handleLikes = async (id) => {
    const response = await apiMakeCall(
      `http://localhost:3000/post/${id}/like`,
      "PATCH",
    );
    window.location.reload();
  };
  const handleDelete = async (id) => {
    const response = await apiMakeCall(
      `http://localhost:3000/post/${id}`,
      "DELETE",
    );
    window.location.reload();
  };

  return (
    <div className="community-page">
      <div className="community-menu">
        <h2>Music Hub</h2>
        <button onClick={() => navigate("/create-event")}>Create Event</button>
        <button onClick={() => navigate("/sell-merch")}>Post Your Merch</button>
        <button onClick={() => navigate("/profile")}> Your Profile</button>
        <button onClick={() => navigate("/support")}>Write Us</button>
      </div>
      <main className="feed">
        <div className="create-post">
          <textarea
            placeholder="Share something with music community..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <button onClick={createPost} disabled={!post.trim()}>
            Post
          </button>
        </div>
        {loading && <Loader />}
        {existingPosts.map((item) => (
          <div className="post-card" key={item._id}>
            <div className="space">
              <h3>{item.user || "User"}</h3>

              <div className="post-dlt" onClick={() => handleDelete(item._id)}>
                X
              </div>
            </div>
            <p>{item.text}</p>
            <div className="likes" onClick={() => handleLikes(item._id)}>
              ❤️ {item.likes || 0}
            </div>
          </div>
        ))}
      </main>
      <div className="community-trends">
        <h3>Trending</h3>
        <p>#MetalCommunity</p>
        <p>#Concerts2026</p>
        <p>#NewAlbums</p>
      </div>
    </div>
  );
};

export default Community;
