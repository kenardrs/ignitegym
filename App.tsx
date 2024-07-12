import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SignUp } from './src/screens/SignUp';
import { View, Text } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <View>
      <StatusBar
          style='light'
          backgroundColor="transparent"
          translucent
          />
        {fontsLoaded?
        <Text>Fonte Carregada</Text>:
        <Text>Fonte Indisponivel</Text>}
        <SignUp/>
    </View>
  );
}

