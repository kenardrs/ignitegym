import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { VStack, FlatList, HStack, Text, Heading } from 'native-base'

import { AppNavigatorRoutesProps } from '@routes/app.routes'

import { HomeHeader } from '@components/HomeHeader'
import { Group } from '@components/Group'
import { ExcerciseCard } from '@components/ExerciseCard'

export const Home = () => {
    const [groups, setGroups] = useState(['costas', 'bíceps', 'tríceps', 'ombro'])
    const [groupSelected, setGroupSelected] = useState('costas')
    const [exercises, setExercises] = useState([
        {name:'Puxada Frontal', execution: '3 Séries x 12 repetições'},
        {name:'Remada curvada', execution: '3 Séries x 12 repetições'}, 
        {name:'Reamada unilateral', execution: '3 Séries x 12 repetições'}, 
        {name:'Levantamento terra', execution: '3 Séries x 12 repetições'}])

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const handleOpenExerciseDetails = () => {
        navigation.navigate('exercise')
    }

    return (
        <VStack flex={1}>
            <HomeHeader title="Kenard Silva" subTitle='Olá,'/>
            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group 
                        name={item}
                        isActive={groupSelected.toUpperCase() === item.toUpperCase()} 
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent='space-between' mb={5}>
                    <Heading color='gray.200' fontSize='md'>
                        Exercicio
                    </Heading>

                    <Text color='gray.200' fontSize='sm'>
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <ExcerciseCard 
                            onPress={handleOpenExerciseDetails}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20}}
                />
            </VStack>
        </VStack>
    )
}