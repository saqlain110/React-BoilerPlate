import React from 'react'
import { Select } from 'chakra-react-select'
import { Flex, FormControl, FormErrorMessage, FormLabel, chakra, useColorMode } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import APP_ICONS from '../../../constants/icons'
import { accessValue } from '../../../utils/stringUtils'
import { colorKeys, getColor } from '../../../constants/colors'

const FormSearchSelect = ({ label, placeholder, options = [], errors, id, control, required = false, onChangeEffect, rules, multiple, containerStyles, inputProps, searchFn, isLoading, messageContainerProps, labelProps, chakraContainerStyles, labelExtention, injectOptions }) => {
    const { colorMode } = useColorMode()
    if (required) {
        required = `${label} is required`
    }

    return (
        <Controller
            control={control}
            name={id}
            rules={{
                required: required,
                ...rules
            }}
            render={({ field: { onChange, onBlur, value, ref, ...rest } }) => {
                return (
                    <FormControl isInvalid={errors[id] || accessValue(errors, `${id}.message`)} {...containerStyles}>
                        <FormLabel htmlFor={id} mx={0} fontSize={"13px"} {...labelProps}>
                            <Flex justify="space-between">
                                <Flex>
                                    {label}
                                    {required && <chakra.span color={getColor(colorKeys.danger, colorMode)}>*</chakra.span>}
                                </Flex>
                                {labelExtention}
                            </Flex>
                        </FormLabel>

                        <Select
                            isLoading={isLoading}
                            onInputChange={searchFn}
                            allowClear={true}
                            isMulti={multiple}

                            onChange={(e, f) => {
                                if (multiple) {
                                    onChange({
                                        target: {
                                            name: id,
                                            value: e.map((item) => item.value),
                                            label: e.map((item) => item.label)
                                        }
                                    })
                                    onChangeEffect && onChangeEffect(e)
                                }
                                else {
                                    onChange({
                                        target: {
                                            name: id,
                                            value: e.value
                                        }
                                    })
                                    onChangeEffect && onChangeEffect(e)
                                }
                            }}
                            value={multiple
                                ? options?.filter((option) => value?.includes(option.value))
                                : options?.filter(function (option) {
                                    return option.value === value;
                                })}
                            ref={ref}
                            placeholder={placeholder}
                            options={injectOptions ? [...injectOptions, ...options] : options}
                            leftAddon={
                                <chakra.span
                                    fontSize="1.2em"
                                    color={getColor(colorKeys.primary, colorMode)}
                                    mr="0.5em"
                                >
                                    {APP_ICONS.SEARCH}
                                </chakra.span>
                            }
                            defaultInputValue=''
                            defaultValue={multiple ? [] : null}
                            menuPosition='fixed'
                            {...rest}
                            {...inputProps}
                            chakraStyles={{
                                container: (provided) => ({
                                    ...provided,
                                    ...chakraContainerStyles
                                }),

                            }}
                        />
                        <FormErrorMessage {...messageContainerProps}>
                            {accessValue(errors, `${id}.message`)}
                        </FormErrorMessage>
                    </FormControl>
                )
            }}
        />
    )
}

export default FormSearchSelect