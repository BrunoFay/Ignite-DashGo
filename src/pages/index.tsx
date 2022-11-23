import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const signInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(signInFormSchema),
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
        gap={4}
        onSubmit={handleSubmit(handleLogin)}
      >
        <FormControl>
          <FormLabel>
            E-mail
            <Input
              borderRadius={2}
              variant="flushed"
              type="email"
              bg="gray.900"
              focusBorderColor="orange.500"
              errorBorderColor="crimson"
              size="lg"
              px={2}
              {...register('email')}
            />
          </FormLabel>
          <Text
            color="red.500"
            position="absolute"
            bottom="-12px"
            fontSize="xs"
          >
            {errors.email ? errors.email.message : ''}
          </Text>
        </FormControl>

        <FormControl>
          <FormLabel>
            Password
            <Input
              type="password"
              borderRadius={2}
              variant="flushed"
              bg="gray.900"
              focusBorderColor="orange.500"
              errorBorderColor="crimson"
              size="lg"
              px={2}
              {...register('password')}
            />
          </FormLabel>
          <Text
            color="red.500"
            position="absolute"
            bottom="-12px"
            fontSize="xs"
          >
            {errors.password && errors.password.message}
          </Text>
        </FormControl>
        <Button
          mt={6}
          colorScheme="orange"
          variant="solid"
          type="submit"
          size="lg"
          isLoading={isSubmitting}
        >
          {' '}
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
