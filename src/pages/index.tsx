import { Input } from "@/components/Form/Input";
import { useForm } from "react-hook-form";
import { Button, Flex, Stack  } from "@chakra-ui/react";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler } from "react-hook-form/dist/types";

interface SignInFormProps {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('O campo precisa ser um email válido'),
  password: yup.string().required('Senha Obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormProps>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormProps> = async (data, event) => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    console.log(data);
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        // as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" error={formState.errors.email} {...register("email")} />
          <Input type="password" label="Senha" error={formState.errors.password} {...register("password")} />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex >

  )
}
