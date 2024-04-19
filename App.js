import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import TodosClientes from './src/pages/TodosClientes/index'
import NovoCliente from './src/pages/NovoCliente/index'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>

      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          headerTintColor: 'blue',
        }}
      />

<Stack.Screen
            name='TodosClientes'
            component={TodosClientes}
            options={{
              title: 'TodosClientes',
            }}
          />

<Stack.Screen
            name='NovoCliente'
            component={NovoCliente}
            options={{
              title: 'NovoCliente',
            }}
          />

    </Stack.Navigator>
    <StatusBar style='inverted' />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
});
