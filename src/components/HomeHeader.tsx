import { Heading, VStack, Text, HStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'

import { UserPhoto } from './UserPhoto';
import { TouchableOpacity } from 'react-native';

type Props = {
    title: String
    subTitle?: String 
}

export const HomeHeader = ({title, subTitle}: Props) => {
    
    return (
        <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
            <UserPhoto
                source={{ uri: 'https://github.com/kenardrs.png' }}
                size={16}
                alt='Imagem do usuário'
                mr={4}
            />

            <VStack flex={1}>
                <Text 
                    fontFamily='body'
                    fontSize='md'
                    color='gray.100'
                >
                    {subTitle}
                </Text>
                <Heading
                    color='gray.100'
                    fontFamily='heading'
                    fontSize='md'
                >
                {title}
                </Heading>
            </VStack>

            <TouchableOpacity>
                <Icon 
                    as={MaterialIcons}
                    name='logout' 
                    color='gray.200' 
                    size={7}
                    />
            </TouchableOpacity>
        </HStack>
    )
}