import React from "react"
import { chakra, useColorMode } from "@chakra-ui/react"
import { Select } from 'chakra-react-select'
import APP_ICONS from "../../../constants/icons"
import { colorKeys, getColor } from "../../../constants/colors"

const CustomSelect = ({ value, onChange, options = [], multiple, placeholder, containerStyles, onInputChange, ...rest }) => {

    const { colorMode } = useColorMode()

    const findValue = options?.filter(function (option) {
        return option.value === value;
    })
    return (
        <Select
            allowClear={true}
            isClearable={true}
            isMulti={multiple}
            classNamePrefix={"custom-react-select"}
            onChange={(e) => {
                onChange(e?.value)
            }}
            value={findValue}
            onInputChange={onInputChange}
            placeholder={placeholder}
            options={options}
            {...rest}
            menuPosition='fixed'
            leftAddon={
                <chakra.span
                    fontSize="1.2em"
                    color={getColor(colorKeys.primary, colorMode)}
                    mr="0.5em"
                >
                    {APP_ICONS.SEARCH}
                </chakra.span>
            }
            chakraStyles={{
                container: (provided) => ({
                    ...provided,
                    width: "250px",
                    size: "sm",
                    bg: getColor(colorKeys.tableBackground, colorMode),
                    ...containerStyles
                }),
                valueContainer: (provided) => ({
                    ...provided,
                    px: "0.5em",
                    h: "30px"
                }),
                menu: (provided) => ({
                    ...provided,
                    zIndex: 9999,
                    minWidth: "200px",
                    size: "sm",
                }),
                control: (provided) => ({
                    ...provided,
                    size: "sm",
                    h: "32px"
                }),
                clearIndicator: (provided) => ({
                    ...provided,
                    w: "12px",
                    h: "12px",
                    overflow: "hidden",
                }),
            }}
            size={"xs"}
        />
    )
}

export default CustomSelect