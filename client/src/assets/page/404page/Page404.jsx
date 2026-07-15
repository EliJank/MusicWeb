import "./Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <main className="error404">
        <div className="error-center">
          <h1>404</h1>
          <h1>
            Page not found
          </h1>
          <p>
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <Link
            to="/"
            className="error-btn-home"
          >
            Go back home
          </Link>
          <Link to="/support" className="error-btn-support">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </main>
    </>
  );
};
export default Page404;
