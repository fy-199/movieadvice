import React from "react";
import { AiFillHome, AiFillDashboard, AiOutlineLogin } from "react-icons/ai";
import { RiSearchFill, RiLoginCircleFill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";

function Discovery() {
  return (
    <div class="container">
      <div class="row">
        <div class="d-flex col flex-column p-3 text-white netflix-black sidebar-style vh-100 ">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <span class="fs-4">Kesfet</span>
          </a>
          <hr />
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a
                href="#"
                class="nav-link text-white active  "
                aria-selected="true"
              >
                <AiFillHome className="bi" />
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#"
                class="nav-link text-white "
                data-toggle="pill"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="true"
              >
                <AiFillDashboard className="bi" />
                Kesfet
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <RiSearchFill className="bi" />
                Ara
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <RiLoginCircleFill className="bi" />
                Giris Yap
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <BiCameraMovie className="bi" />
                Ne izlesem?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Discovery;
