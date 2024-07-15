import { Center, Heading, Text, VStack, ScrollView, Box } from 'native-base'
import { ImageBackground } from 'react-native'

import LogoSvg from '@assets/logo.svg'
import BackgroudImg from '@assets/background.png'

import { Input } from '@components/Input'
import { Button } from '@components/Button'


export const SignIn = () => {
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
                                Acesse sua conta
                            </Heading>
                            <Input 
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none" 
                            />
                            <Input 
                                placeholder="Senha" 
                                secureTextEntry
                            />
                            <Button title="Acessar"/>
                        </Center>
                        <Center mt={24}>
                            <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                                Ainda não tem acesso?
                            </Text>
                        </Center>

                        <Button title="Criar conta" variant="outline" />
                    </Box>
                </ImageBackground>
            </VStack>
        </ScrollView>
    )
}