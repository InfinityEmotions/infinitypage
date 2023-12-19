import React, { useState } from "react";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link, Button } from "@nextui-org/react";

export const Singup = (props) => {
    const [user, setUser] = useState([]);
    return (

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
                        <form>
                            <ModalHeader className="flex flex-col gap-1">Sign up</ModalHeader>
                            <ModalBody>

                                <Input
                                    autoFocus
                                    label="Name"
                                    variant="bordered"
                                    name="name"
                                    value={user.name}
                                    isRequired
                                />
                                <Input
                                    label="Surname"
                                    variant="bordered"
                                    name="surname"
                                    value={user.surname}
                                    isRequired
                                />
                                <Input
                                    label="Email"
                                    variant="bordered"
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    isRequired
                                />
                                <hr></hr>
                                <Input
                                    label="Username"
                                    variant="bordered"
                                    name="username"
                                    value={user.username}
                                    isRequired
                                />
                                <Input
                                    label="Password"
                                    type="password"
                                    variant="bordered"
                                    isRequired
                                />
                                <Input
                                    label="Re-enter password"
                                    type="password"
                                    variant="bordered"
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
    );
}

export default Singup;