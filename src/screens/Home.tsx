import { HomeHeader } from '@components/HomeHeader'
import { Text, VStack } from 'native-base'

export const Home = () => {
    return (
        <VStack flex={1}>
            <HomeHeader title="Kenard Silva" subTitle='Olá,'/>
        </VStack>
    )
}