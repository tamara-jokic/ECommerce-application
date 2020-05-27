import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import Axios from "axios";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:5000/api/getUsers").then((res) => {
      res.data.forEach((user) => {
        if (user.token) {
          setIsLoggedIn(true);
        }
        if (user.role === "admin" && user.token) {
          setIsAdmin(true);
        }
      });
    });
  };

  const logOut = () => {
    Axios.post("http://localhost:5000/api/logOut", {}).then((res) => {
      setIsAdmin(false);
      setIsLoggedIn(false);
    });
  };

  return (
    <div>
      <Navbar expand="md" color="faded" light>
        <Logo />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink active href="/">
                Početna{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products">Proizvodi</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutus">O nama</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Kontakt</NavLink>
            </NavItem>
            {isAdmin && (
              <NavItem className="ad">
                <NavLink href="/adminpanel">Administracija</NavLink>
              </NavItem>
            )}
            {!isLoggedIn && (
              <NavItem className="log">
                <NavLink href="/login" to="/login">
                  Prijava/Registracija
                </NavLink>
              </NavItem>
            )}
            {isLoggedIn && (
              <NavItem className="out">
                <NavLink href="/" onClick={() => logOut()}>
                  Odjavite se
                </NavLink>
              </NavItem>
            )}

            <NavItem className="cart">
              <NavLink href={isLoggedIn ? "/cart" : "/login"}>
                <ion-icon name="basket"></ion-icon>
                Korpa
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
