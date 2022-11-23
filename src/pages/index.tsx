import { Button, Flex, FormLabel, Input } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const handleLogin: SubmitHandler<{ email: string; password: string }> = (
    value,
    e,
  ) => {
    e?.preventDefault()
    console.log(value)
  }
  return (
    <Flex as="main" w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        flexDirection="column"
        bg="gray.800"
        w={360}
        p={8}
        borderRadius={6}
        onSubmit={handleSubmit(handleLogin)}
      >
        <FormLabel>
          E-mail
          <Input
            type="email"
            borderRadius={2}
            variant="flushed"
            bg="gray.900"
            focusBorderColor="orange.500"
            size="lg"
            px={2}
            {...register('email')}
          />
        </FormLabel>
        <FormLabel>
          Password
          <Input
            type="password"
            borderRadius={2}
            variant="flushed"
            bg="gray.900"
            focusBorderColor="orange.500"
            size="lg"
            px={2}
            {...register('password')}
          />
        </FormLabel>
        <Button
          mt={6}
          colorScheme="orange"
          variant="solid"
          type="submit"
          size="lg"
        >
          {' '}
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
