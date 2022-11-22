import { FormLabel, Input } from '@chakra-ui/react'

export default function InputDefault({
  name,
  placeholder,
  label,
  type,
}: {
  name: string
  placeholder: string
  label: string
  type?: string
}) {
  return (
    <FormLabel>
      {label}
      <Input
        variant="filled"
        focusBorderColor="orange.500"
        type={type || 'text'}
        bg="gray.900"
        name={name}
        _hover={{ bg: 'gray.900' }}
        placeholder={placeholder}
      />
    </FormLabel>
  )
}
