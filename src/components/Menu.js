import React, { useState } from "react";
import Logo from "../assets/images/infinity-black.png";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import Login from "./Login";
import { Singup } from "./Singup";

export const Menu = () => {
    const [login, setLogin] = useState(false);
    const handleOpen = () => {
        setLogin(!login);
    };

    const [singup, setSingup] = useState(false);
    const handleOpenSingup = () => {
        setSingup(!singup);
    };
    return (
        <>
            <Navbar shouldHideOnScroll>
                <NavbarBrand justify="center">
                    <img src={Logo} className="logo"></img>
                </NavbarBrand>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} color="secondary" href="#" variant="flat" onClick={handleOpenSingup}>
                            Sign Up
                        </Button>
                    </NavbarItem>
                    <NavbarItem >
                        <Button as={Link} color="primary" href="#" variant="flat" onClick={handleOpen}>
                            Login
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
            
            <Login isOpen={login} handler={handleOpen}/>
            <Singup isOpen={singup} handler={handleOpenSingup}/>
        </>
    );
}

export default Menu;