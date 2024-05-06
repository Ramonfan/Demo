import React, {type PropsWithChildren} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/home/HomeScreen';
import ClassProgramScreen from './src/class/ClassProgramScreen';
import FunctionProgramScreen from './src/function/FunctionProgramScreen';

export type RootStackParamList = {
  Home: undefined;
  ClassProgram: undefined;
  FunctionProgram: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='ClassProgram' component={ClassProgramScreen}/>
        <Stack.Screen name='FunctionProgram' component={FunctionProgramScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;