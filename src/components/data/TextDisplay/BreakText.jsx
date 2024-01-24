import React from 'react'
import { chakra } from "@chakra-ui/react"

const BreakText = ({ value, fontSize = "14px", fallback = "N/A", ...rest }) => {
    return (
        <chakra.span
            maxWidth="275px"
            minW="275px"
            whiteSpace="break-spaces"
            display="block"
            fontSize={fontSize}
            {...rest}
        >{value || fallback}</chakra.span>
    )
}

export default BreakText