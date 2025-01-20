import { Link } from "react-router";

export default function Layout() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Instagram</Link>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <p>Search</p>
          </li>
          <Link to={"/explore"}>Explore</Link>
          <li>
            <Link to={"/chats"}>Chats</Link>
          </li>
          <li>
            <p>Notification</p>
          </li>
          <li>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
