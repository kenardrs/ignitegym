import { useState } from 'react'
import { VStack, FlatList } from 'native-base'

import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'

export const Home = () => {
    const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombro'])
    const [groupSelected, setGroupSelected] = useState('costas')

    return (
        <VStack flex={1}>
            <HomeHeader title="Kenard Silva" subTitle='Olá,'/>
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group name={item}
                        isActive={groupSelected === item} 
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
            />
        </VStack>
    )
}