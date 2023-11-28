import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduce from './Screen/Introduce';
import Login from './Screen/Login';
import Signup from './Screen/Signup';


const Stack = createStackNavigator();

function App() {
return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Signup">
       <Stack.Screen name="Introduce" component={Introduce} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name='Signup' component={Signup}/>
     </Stack.Navigator>
   </NavigationContainer>
);
};

export default App;
