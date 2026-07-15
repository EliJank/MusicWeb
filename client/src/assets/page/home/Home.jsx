import data from "../../data/home.json";
import "./Home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homePage">
      <div className="homeImg">
        <p>MUSIC COMMUNITY FOR LOVERS</p>
      </div>
      <p className="home-description">
        Everything your fandom needs in one place. Shop official merch from your
        favorite groups around the world with exclusive discounts, discover
        concerts and events you'll love, get early updates, and unlock
        personalized recommendations tailored to your interests.
      </p>
      <div>
        {data.TitlePage.map((item) => (
          <div
            className="homeCards"
            key={item.id}
            onClick={() => navigate(item.link)}
          >
            <img src={item.img} alt={item.title} />
            <div className="homeCardsText">
              <h2>{item.title}</h2>
              <p>{item.descr}</p>
              <Link to={item.link} className="homeCardsText-button">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
