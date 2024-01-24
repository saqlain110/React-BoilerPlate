import { createStandaloneToast } from "@chakra-ui/react";
const { toast } = createStandaloneToast()


export const TOAST_TYPES = {
    SUCCESS: 'success',
    ERROR: 'error',
}

const getToastTitle = (type) => {
    switch (type) {
        case TOAST_TYPES.SUCCESS:
            return 'Congrats!'
        case TOAST_TYPES.ERROR:
            return 'Error!'
        default:
            return 'Notification!'
    }

}

export const makeToast = ({ type, message }) => {
    const title = getToastTitle(type)
    toast({
        description: message,
        id: message,
        isClosable: true,
        position: "top",
        variant: "solid",
        status: type,
        title
    })
}