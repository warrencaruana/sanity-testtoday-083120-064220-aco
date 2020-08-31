import React from "react"
import { Link } from "gatsby"
import SideBarMenu from "../sidebar/sidebar"
import Sticky from "react-sticky-el"
import styl from "./header.module.css"

const Header = () => (
  <header>
    <Sticky
      className={styl.stickyWrapper}
      stickyClassName={styl.isSticky}
      stickyStyle={{ transform: "unset", zIndex: "2" }}
    >
      <div className={`header ${styl.header}`}>
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col">
              <div class="header-logo">
                <Link to="/">
                  <span class="display-4 text-white">LOGO</span>
                </Link>
              </div>
            </div>
            <div class="col-4">
              <div class="text-right">
                <SideBarMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Sticky>
  </header>
)

export default Header
