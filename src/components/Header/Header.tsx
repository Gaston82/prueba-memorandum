import { Link } from "react-router-dom";

const Header = (): JSX.Element => (
  <header>
    <Link to={"/"}>
      <h1>Movies & Series</h1>
    </Link>
  </header>
);

export default Header;
