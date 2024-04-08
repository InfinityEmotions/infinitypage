import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa"
import { Signin } from "../controllers/users";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox, Input, Link, Button } from "@nextui-org/react";

export const Login = (props) => {
    const init = {
        username: "",
        password: ""
    }
    const init_messages = {
        m_user: "",
        m_pass: "",
        i_user:false,
        i_pass:false
    }

    const [user, setUser] = useState(init);
    const [messages, setMessages] = useState(init_messages);
    function OnChange(e) {
        
        setMessages(init_messages);   
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function OnSubmit(e){      
        if(user.username.trim().length === 0){
            setMessages({...messages, m_user:"Please fill this item.", i_user:true});
            return;
        }
        if(user.password.trim().length === 0){
            setMessages({...messages, m_pass:"Please fill this item.", i_pass:true});
            return;
        }

        Logon();
    }
    
    async function Logon() {       
        const res = await Signin(user);

        if(res === 200){            
            props.start();
            setUser(init);
        }
    }

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
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <FaUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Username"
                                    variant="bordered"
                                    name="username"
                                    value={user.username}
                                    onChange={OnChange}      
                                    isInvalid={messages.i_user}
                                    errorMessage={messages.m_user}                              
                                    />
                                <Input
                                    endContent={
                                        <FaLock className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    type="password"
                                    variant="bordered"
                                    name="password"
                                    value={user.password}
                                    onChange={OnChange}  
                                    isInvalid={messages.i_pass}
                                    errorMessage={messages.m_pass}   
                                />


                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onClick={OnSubmit} >
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
            </ModalContent>
        </Modal >
    );
}

export default Login;