import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

export default function Dialog(props) {

    return (
        <>
            <Modal isOpen={props.isOpen} onOpenChange={props.onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{props.title}</ModalHeader>
                            <ModalBody>
                                <p>{props.message}</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                {
                                    props.withAction ? (
                                        <Button color="primary" onPress={props.OnAction}>
                                            Accept
                                        </Button>
                                    ) : null
                                }

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
