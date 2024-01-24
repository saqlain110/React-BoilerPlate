import React, { useEffect } from 'react'
import {
    Button,
    Box,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalContent,
    useDisclosure,
    Flex,
    HStack,
    Tooltip,
    IconButton,
    Icon
} from '@chakra-ui/react'
import FormButton from '../FormButton'
import APP_ICONS from '../../../constants/icons'

const FormModal = ({ title, disclosure, size = "2xl", id = "drawer-form", containerProps, children, isSubmitting, onSubmit, bodyProps, reset, maxW, hideFooter, onCloseFn, headerAddons, saveButtonText = "Save", saveButtonProps, footerContent, isSubmitDisabled }) => {
    const { isOpen, onClose } = disclosure
    const expandDisclosure = useDisclosure()

    useEffect(() => {
        if (!isOpen) {
            onCloseFn && onCloseFn()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

    return (
        <Modal
            size={expandDisclosure.isOpen ? "full" : size}
            isOpen={isOpen}
            onClose={() => {
                onClose()
                reset && reset()
                onCloseFn && onCloseFn()
            }}
            isCentered
            motionPreset='none'
        >
            <ModalOverlay />
            <ModalContent maxH={{ base: "unset", md: "calc(100vh - 50px)" }} overflow={"auto"} {...containerProps} rounded="sm" maxW={expandDisclosure.isOpen ? "full" : maxW}>
                <Box as="form" onSubmit={onSubmit}>

                    <Flex align="center" justify="space-between">
                        <ModalHeader minW="50%">{title}</ModalHeader>
                        <HStack spacing={5} px={4}>
                            {headerAddons}
                            {size !== "full" && (
                                <Tooltip label={expandDisclosure.isOpen ? "Collapse" : "Expand"} aria-label="A tooltip">
                                    <IconButton
                                        onClick={expandDisclosure.onToggle}
                                        variant={"ghost"}
                                        size={"sm"}
                                        aria-label="expand"
                                        icon={<Icon as={expandDisclosure.isOpen ? APP_ICONS.COLLAPSE : APP_ICONS.EXPAND} />}
                                    />
                                </Tooltip>
                            )}
                            <Tooltip label={"Close"} aria-label="A tooltip">
                                <IconButton onClick={onClose} variant={"ghost"} size={"sm"} aria-label="Close" icon={<Icon as={APP_ICONS.CLOSE} />} />
                            </Tooltip>
                        </HStack>
                    </Flex>

                    <ModalBody mb={hideFooter && 2} {...bodyProps}>
                        {children}
                    </ModalBody>

                    {!hideFooter && (
                        <ModalFooter>
                            {footerContent
                                ? footerContent
                                : <>
                                    <Button variant='outline' mr={3} onClick={() => {
                                        onClose()
                                        reset && reset()
                                        onCloseFn && onCloseFn()
                                    }}>
                                        Cancel
                                    </Button>
                                    <FormButton
                                        type='submit'
                                        form={id}
                                        isLoading={isSubmitting}
                                        onClick={onSubmit}
                                        isDisabled={isSubmitDisabled}
                                        {...saveButtonProps}
                                    >
                                        {saveButtonText}
                                    </FormButton>
                                </>
                            }
                        </ModalFooter>
                    )}
                </Box>
            </ModalContent>
        </Modal>

    )
}

export default FormModal