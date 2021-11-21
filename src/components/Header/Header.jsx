import { Navbar } from "../Navbar/Navbar";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./Header.css";
import loguito from "../../assets/images/logo_miniatura.jpg";

export const Header = ({ logo, search, nav }) => {
  return (
    <div className="main-header">
      <div className="hed-1">
        {logo && (
          <Link to="/" className="logo">
            <img className="logo_header" src={loguito} alt="logo" />
          </Link>
        )}
      </div>
      <div className="hed-2">{search && <SearchBar />}</div>
      <div className="hed-3">{nav && <Navbar />}</div>
    </div>
  );
};
