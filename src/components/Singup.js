import React, { useState } from "react";
import Dialog from "./Dialog";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link, Button } from "@nextui-org/react";

export const Singup = (props) => {
    const [user, setUser] = useState([]);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    function OnChange(e){
        setUser({...user, [e.target.name]:e.target.value});
    }

    function OnSubmit(e){
       e.preventDefault();
       console.log(user)
       onOpen();
    }

    return (
        <>
        
            <Modal
                isOpen={props.isOpen}
                onOpenChange={props.handler}
                placement="top-center"
                backdrop="blur"
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form onSubmit={OnSubmit}>
                                <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                                <ModalBody>

                                    <Input
                                        autoFocus
                                        label="Name"
                                        variant="bordered"
                                        name="name"
                                        value={user.name}
                                        onChange={OnChange}
                                        isRequired
                                    />
                                    <Input
                                        label="Surname"
                                        variant="bordered"
                                        name="surname"
                                        value={user.surname}
                                        onChange={OnChange}
                                        isRequired
                                    />
                                    <Input
                                        label="Email"
                                        variant="bordered"
                                        name="email"
                                        type="email"
                                        value={user.email}
                                        onChange={OnChange}
                                        isRequired
                                    />
                                    <hr></hr>
                                    <Input
                                        label="Username"
                                        variant="bordered"
                                        name="username"
                                        value={user.username}
                                        onChange={OnChange}
                                        isRequired
                                    />
                                    <Input
                                        label="Password"
                                        type="password"
                                        name="password"
                                        variant="bordered"
                                        onChange={OnChange}
                                        isRequired
                                    />
                                    <Input
                                        label="Re-enter password"
                                        type="password"
                                        name="replypassword"
                                        variant="bordered"
                                        onChange={OnChange}
                                        isRequired
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="flat" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="success" type="submit">
                                        Sign up
                                    </Button>
                                </ModalFooter>

                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Dialog isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} withAction={true} message={"Continue?"} title={"Continue"}/>
        </>
    );
}

export default Singup;