import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startup from './Components/Startup';
import Home from './Components/Home';
import Verses from './Components/Verses';
import Feeling from './Components/Feeling';
import Stories from './Components/Stories';
import Dua from './Components/Dua';
import Story from './Components/Story';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Verses" component={Verses} />
        <Stack.Screen name="Feeling" component={Feeling} />
        <Stack.Screen name="Stories" component={Stories} />
        <Stack.Screen name="Dua" component={Dua} />
        <Stack.Screen name="Story" component={Story} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
