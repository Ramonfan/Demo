// HomeScreen.tsx

import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../AppNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}



const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="类组件方式"
        onPress={() => navigation.navigate('ClassProgram')}
      />
      <View style={{height: 10}}/>
      <Button
        title="函数组件方式"
        onPress={() => navigation.navigate('FunctionProgram')}
      />
    </View>
  );
};

export default HomeScreen;
