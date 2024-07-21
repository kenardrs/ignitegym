import { useState } from 'react'
import { HStack, Text, VStack } from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'

export const Home = () => {
    const [groupSelected, setGroupSelected] = useState('costa')

    return (
        <VStack flex={1}>
            <HomeHeader title="Kenard Silva" subTitle='Olá,'/>
            <HStack>
                <Group name="costa" 
                    isActive={groupSelected === 'costa'} 
                    onPress={() => setGroupSelected('costa')}
                    />
                <Group 
                    name="ombro" 
                    isActive={groupSelected === 'ombro'} 
                    onPress={() => setGroupSelected('ombro')}
                />
            </HStack>
        </VStack>
    )
}