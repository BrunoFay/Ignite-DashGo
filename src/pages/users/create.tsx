import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { InputDefault } from '../../components/form/Input'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '../../libs/ReactQuery'

const newUserFormSchema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], "Passwords don't match"),
})

interface NewUser {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export default function Users() {
  const router = useRouter()

  const handleCreateUser: SubmitHandler<NewUser> = (value, e) => {
    e?.preventDefault()
    mutateAsync(value)
  }
  const { mutateAsync, isLoading } = useMutation(handleCreateUser, {
    onSuccess() {
      queryClient.invalidateQueries(['users'])
      router.push('/users')
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: yupResolver(newUserFormSchema),
  })

  return (
    <Box>
      <Header />
      <Flex maxW={1480} w="100%" my="6" mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['4', '8']}
        >
          <Heading size="lg" fontWeight="normal">
            Create new User
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <Stack spacing={8}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <FormControl>
                <InputDefault
                  placeholder=""
                  label="Full name"
                  {...register('name')}
                />
                <Text
                  color="red.500"
                  position="absolute"
                  bottom="-12px"
                  fontSize="xs"
                >
                  {errors.name ? errors.name.message : ''}
                </Text>
              </FormControl>
              <FormControl>
                <InputDefault
                  placeholder="example@example.com"
                  type="email"
                  label="Email"
                  {...register('email')}
                />
                <Text
                  color="red.500"
                  position="absolute"
                  bottom="-12px"
                  fontSize="xs"
                >
                  {errors.email ? errors.email.message : ''}
                </Text>
              </FormControl>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <FormControl>
                <InputDefault
                  placeholder="******"
                  type="password"
                  label="Password"
                  {...register('password')}
                />
                <Text
                  color="red.500"
                  position="absolute"
                  bottom="-12px"
                  fontSize="xs"
                >
                  {errors.password ? errors.password.message : ''}
                </Text>
              </FormControl>
              <FormControl>
                <InputDefault
                  label="Confirm password"
                  placeholder="******"
                  type="password"
                  {...register('passwordConfirmation')}
                />
                <Text
                  color="red.500"
                  position="absolute"
                  bottom="-12px"
                  fontSize="xs"
                >
                  {errors.passwordConfirmation
                    ? errors.passwordConfirmation.message
                    : ''}
                </Text>
              </FormControl>
            </SimpleGrid>
          </Stack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button size={['sm', 'md']} colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                isLoading={isSubmitting || isLoading}
                size={['sm', 'md']}
                colorScheme="green"
                disabled={isLoading}
              >
                Create
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
