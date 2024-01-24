import React from 'react'
import { Switch } from '@chakra-ui/react'

const StatusSwitch = ({ onChange, value }) => {
    return (
        <Switch onChange={onChange} defaultChecked={value} />
    )
}

export default StatusSwitch