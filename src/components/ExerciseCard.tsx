import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { HStack, Image, VStack, Text, Icon, Heading } from 'native-base'

import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
    
}

export const ExcerciseCard = ({...rest}: Props) => {
    return (
        <TouchableOpacity {...rest}>
            <HStack
                bg='gray.500' 
                alignItems={'center'}
                p={2}
                pr={4}
                rounded={'md'}
                mb={3}
            >
                <Image
                    source={{ uri: 'https://static.tuasaude.com/media/article/ll/ae/puxada-frontal_63648_l.jpg' }}
                    alt='Imagem do exercicio'
                    w={16}
                    h={16}
                    rounded={'md'}
                    mr={4}
                    resizeMode='center'
                />
                
                <VStack flex={1}>
                    <Heading 
                        fontSize={'lg'}
                        color={'white'}
                    > 
                        Remada Frontal
                    </Heading>
                    <Text 
                        fontSize={'sm'}
                        color={'gray.200'}
                        mt={1}
                        numberOfLines={2}
                    >
                        3 Séries x 12 Repetições
                    </Text>
                </VStack>

                <Icon
                    as={Entypo}
                    name='chevron-thin-right'
                    color={'gray.300'}
                    size={7}
                />

            </HStack>
        </TouchableOpacity>
    )
}