import React from 'react'
import { useNetwork } from '../../../utils/apiUtils'
import { Badge } from '@chakra-ui/react'

const NetworkBar = () => {
    const isOnline = useNetwork()
    return (
        !isOnline ? <Badge colorScheme='red'>Warning! You are offline</Badge> : null
    )
}

export default NetworkBar