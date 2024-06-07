import { Link } from "react-router-dom";

const LunchData = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/articles/1">Article 1</Link>
        </li>
        <li>
          <Link to="/articles/2">Article 2</Link>
        </li>
        <li>
          <Link to="/articles/3">Article 3</Link>
        </li>
        <li>
          <Link to="/articles/4">Article 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
