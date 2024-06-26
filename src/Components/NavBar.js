import React from "react";
import "../CSS/NavBar.css";
import "../CSS/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-md">
        <div className="container-fluid">
          <a class="navbar-brand text-light" href="#">
            FISH BOX
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span class="fa-solid fa-bars text-light"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="collapsibleNavbar"
          >
            <ul class="navbar-nav ms-auto">
              <li href="#" class="nav-link nav-line ms-2 text-light">
                <a>HOME</a>
              </li>
              <li href="#" class="nav-link nav-line ms-2 text-light">
                <a>SHOP</a>
              </li>
              <li href="#" class="nav-link nav-line ms-2 text-light">
                <a>ABOUT</a>
              </li>
              <li href="#" class="nav-link nav-line ms-2 text-light">
                <a>RECIPES</a>
              </li>
              <li href="#" class="nav-link nav-line ms-2 text-light">
                <a>BLOGS</a>
              </li>
              <li href="#" class="nav-link nav-line ms-2 text-light">
                <a>CONTACT</a>
              </li>
              <li href="#" class="nav-link ms-2">
                <a>
                  <i class="fa-regular fa-user profile-i text-light"></i>
                </a>
              </li>
              <li href="#" class="nav-link ms-2">
                <a>
                  <i class="fa-solid fa-cart-shopping cart-i text-light"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
