import React from 'react'
import { FormControl, FormErrorMessage, FormLabel, Textarea, chakra, useColorMode } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { colorKeys, getColor } from '../../../constants/colors'

const FormTextarea = ({ id, label, control, placeholder, errors, required, rules, containerProps, textAreaProps }) => {
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
            render={({ field: { onChange, onBlur, value, ref, ...rest } }) => (
                <FormControl isInvalid={errors[id]} {...containerProps}>
                    <FormLabel htmlFor={id} mb='2' fontSize="13px">
                        {label}
                        {required && <chakra.span color={getColor(colorKeys.danger, colorMode)}>*</chakra.span>}
                    </FormLabel>
                    <Textarea
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                        placeholder={placeholder}
                        size='sm'
                        borderRadius={"md"}
                        {...textAreaProps}
                        {...rest}
                    />
                    <FormErrorMessage>
                        {errors[id] && errors[id].message}
                    </FormErrorMessage>
                </FormControl>
            )}
        />
    )
}

export default FormTextarea