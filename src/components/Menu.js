import React, { useEffect, useState } from "react";
import Logo from "../assets/images/infinity-black.png";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, Avatar, DropdownMenu } from "@nextui-org/react";
import Login from "./Login";
import { Singup } from "./Singup";
import Cookies from "universal-cookie";

export const Menu = (props) => {
    const [isLogged, setLogged] = useState(false);
    const [singup, setSingup] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const cookie = new Cookies();
        setLogged(cookie.get("userdata") !== undefined);
        if (isLogged)
            setUsername(cookie.get("userdata").username);
    }, []);

    const handleOpenSingup = () => {
        setSingup(!singup);
    };

    function Start() {
        const cookie = new Cookies();

        if (cookie.get("userdata") !== undefined) {
            setLogged(true);
            props.showLogin();
            setUsername(cookie.get("userdata").username);
        }
    }

    function Logout(e) {
        const cookie = new Cookies();
        cookie.remove("userdata");
        setLogged(false);
        setUsername('');
    }

    return (
        <>
            <Navbar shouldHideOnScroll>
                <NavbarBrand justify="center">
                    <img src={Logo} className="logo" alt="logo"></img>
                </NavbarBrand>
                <NavbarContent justify="end">
                    {
                        !isLogged ? (
                            <React.Fragment>
                                <NavbarItem>
                                    <Button as={Link} color="secondary" href="#" variant="flat" onClick={handleOpenSingup}>
                                        Sign Up
                                    </Button>
                                </NavbarItem>
                                <NavbarItem >
                                    <Button as={Link} color="primary" href="#" variant="flat" onClick={props.showLogin}>
                                        Login
                                    </Button>
                                </NavbarItem>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <NavbarContent as="div" justify="end">
                                    <Dropdown placement="bottom-end">
                                        <DropdownTrigger>
                                            <Avatar
                                                isBordered
                                                as="button"
                                                className="transition-transform"
                                                color="secondary"
                                                name="Jason Hughes"
                                                size="sm"
                                                src="https://openclipart.org/image/2400px/svg_to_png/167281/generic-avatar.png"
                                            />
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                                            <DropdownItem key="profile" className="h-14 gap-2" textValue="Profile">
                                                <p className="font-semibold">Signed in as</p>
                                                <p className="font-semibold">{username}</p>
                                            </DropdownItem>
                                            <DropdownItem key="settings" textValue="My Settings">My Settings</DropdownItem>
                                            <DropdownItem key="logout" color="danger" onPress={Logout} textValue="Log Out">Log Out</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavbarContent>

                            </React.Fragment>
                        )
                    }
                </NavbarContent>
            </Navbar>

            <Login isOpen={props.login} handler={props.showLogin} start={Start} />
            <Singup isOpen={singup} handler={handleOpenSingup} />
        </>
    );
}

export default Menu;