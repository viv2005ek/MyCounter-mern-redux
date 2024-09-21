import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [activeTab, setActiveTab] = useState("/");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link
            className={`navbar-brand ${activeTab === "/" ? "active" : ""}`}
            to="/"
            onClick={() => handleTabClick("/")}
          >
            HOME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav selected">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === "/Inc" ? "active" : ""}`}
                  to="/Inc"
                  onClick={() => handleTabClick("/Inc")}
                >
                  Increment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeTab === "/Dec" ? "active" : ""}`}
                  to="/Dec"
                  onClick={() => handleTabClick("/Dec")}
                >
                  Decrement
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeTab === "/Reset" ? "active" : ""
                  }`}
                  to="/Reset"
                  onClick={() => handleTabClick("/Reset")}
                >
                  Reset
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled" aria-disabled="true">
                  Disabled
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
