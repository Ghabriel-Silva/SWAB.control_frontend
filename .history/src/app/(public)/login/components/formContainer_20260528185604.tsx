
import { Box, Flex, Heading, Button, Input, Text, Field, Stack, HStack, Link } from "@chakra-ui/react";
import Image from "next/image";

export const FormContainer = () => {
    return (
        <Box w="full" maxW="md">
            <HStack justifyContent={"center"} width={"100%"}>
                <Image
                    src={iconSwab}
                    alt="logo swab control"
                    width={"100"}
                />
            </HStack>
            <Heading size="2xl" mb={6} textAlign="center">
                Login
            </Heading>
            <form noValidate onSubmit={handleSubmit(onSubmite)}>
                <Stack mb={2} >
                    <Box mb={4}>
                        <Field.Root invalid={!!errors.email} required >
                            <Field.Label>
                                Email <Field.RequiredIndicator />
                            </Field.Label>
                            <Input placeholder="me@gmail.com" {...register('email', {
                                required: "O e-mail é obrigatório.",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@(gmail|hotmail)\.com$/,
                                    message: "Use um e-mail válido do Gmail ou Hotmail"
                                }
                            })} />
                            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                            <Field.HelperText>Nunca compartilhe seu email.</Field.HelperText>
                        </Field.Root>
                    </Box>
                    <Box mb={4}>
                        <Field.Root invalid={!!errors.password} required>
                            <Field.Label>
                                Senha <Field.RequiredIndicator />
                            </Field.Label>
                            <PasswordInput placeholder="@senha123" {...register("password", {
                                required: "A senha é obrigatória.",
                                minLength: {
                                    value: 6,
                                    message: "A senha deve ter no mínimo 6 caracteres."
                                },
                                maxLength: {
                                    value: 30,
                                    message: "A senha deve ter no máximo 30 caracteres."
                                }
                            })} />
                            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
                        </Field.Root>
                    </Box>
                    <Button
                        type="submit"
                        width="100%"
                        mt={4}
                        loading={loading}
                        loadingText="Validando  dados...">
                        Entrar
                    </Button>
                </Stack>
            </form>
            <Text textStyle="xs" textAlign="center">
                Dificuldades para acessar? Entre em{" "}
                <Link
                    variant="underline"
                    href={url}
                    colorPalette="teal"
                    target="_blank"
                >
                    Contato
                </Link>
            </Text>
        </Box>
    )
}