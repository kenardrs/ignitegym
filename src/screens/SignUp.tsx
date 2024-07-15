import { Center, Heading, Text, VStack, ScrollView, Box } from 'native-base'

import LogoSvg from '@assets/logo.svg'
import BackgroudImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { ImageBackground } from 'react-native'

export const SignUp = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} bg="gray.700" pb={16}>
                <ImageBackground
                    source={BackgroudImg}
                    resizeMode='contain'
                    style={{
                        width: '100%',
                        position: 'absolute'
                    }}
                >
                    <Box px={10}>
                        <Center my={24}>
                            <LogoSvg />
                            <Text color="gray.100" fontSize="sm">
                                Treine sua mente e o seu corpo
                            </Text>
                        </Center>

                        <Center>
                            <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                                Crie sua conta
                            </Heading>
                            <Input
                                placeholder="Nome"
                            />
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            <Input
                                placeholder="Senha"
                                secureTextEntry
                            />
                            <Button title="Criar e acessar" />
                        </Center>

                        <Button
                            title="Voltar para o login"
                            variant="outline"
                            mt={24}
                        />
                    </Box>
                </ImageBackground>
            </VStack>

        </ScrollView>
    )
}