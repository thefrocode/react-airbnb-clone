import logo from "../images/logo.png";
export default function Navbar() {
  return (
    <header>
      <nav>
        <img className="nav--icon" src={logo} alt="Logo" />
      </nav>
    </header>
  );
}
