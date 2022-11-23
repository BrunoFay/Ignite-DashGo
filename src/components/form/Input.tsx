import { FormLabel, Input } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps {
  name: string
  placeholder: string
  label: string
  type?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, placeholder, label, type, ...inputProps },
  ref,
) => {
  return (
    <FormLabel>
      {label}
      <Input
        {...inputProps}
        variant="filled"
        focusBorderColor="orange.500"
        type={type || 'text'}
        bg="gray.900"
        name={name}
        _hover={{ bg: 'gray.900' }}
        ref={ref}
        placeholder={placeholder}
      />
    </FormLabel>
  )
}

export const InputDefault = forwardRef(InputBase)
