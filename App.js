import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Introduce from './Screen/Introduce';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Setting from './Screen/Setting';
import Notifications from './Screen/Notifications';
import Chats from './Screen/Chats';
import ChatDetails from './Screen/ChatDetails';
import GeneralScreen from './Screen/SettingScreen/GeneralScreen';
import NotificationsScreen from './Screen/SettingScreen/NotificationsScreen';
import PrivacyScreen from './Screen/SettingScreen/PrivacyScreen';
import HelpScreen from './Screen/SettingScreen/HelpScreen';
import DataStorageScreen from './Screen/SettingScreen/DataStorageScreen';

const Stack = createStackNavigator();

function App() {
return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Introduce">
       <Stack.Screen name="Introduce" component={Introduce} />
       <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name='Signup' component={Signup}/>
       <Stack.Screen name='Setting' component={Setting}/>
       <Stack.Screen name='Notifications' component={Notifications}/>
       <Stack.Screen name='Chats' component={Chats}/>
       <Stack.Screen name='ChatDetails' component={ChatDetails}/>
       <Stack.Screen name='GeneralScreen' component={GeneralScreen}/>
       <Stack.Screen name='NotificationsScreen' component={NotificationsScreen}/>
       <Stack.Screen name='DataStorageScreen' component={DataStorageScreen}/>
       <Stack.Screen name='PrivacyScreen' component={PrivacyScreen}/>
       <Stack.Screen name='HelpScreen' component={HelpScreen}/>

     </Stack.Navigator>
   </NavigationContainer>
);
};

export default App;
