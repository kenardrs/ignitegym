import { TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

export const Exercise = () => {

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    const handleGoBack = () => {
        navigation.goBack()
    } 

    return (
        <VStack flex={1}>
            <VStack px={8} bg={'blueGray.600'} pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name='arrow-left' color={'green.500'} size={6} />
                </TouchableOpacity>
            </VStack>
        
        </VStack>
    )
}