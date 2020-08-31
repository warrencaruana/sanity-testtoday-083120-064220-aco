import React from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
import "./menu.css"

export default () => (
  <div className="navigation">
    <Nav className="flex-column">
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/blog">Blog</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/about">About</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact">Contact</Link>
      </Nav.Item>
    </Nav>
  </div>
)
