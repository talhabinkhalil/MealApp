import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';

const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="category" 
       screenOptions = {{
         headerStyle: {
           backgroundColor: 'black',

          }, 
         headerTitleStyle: {
           color:'white',
           alignSelf: 'center'
          },
          headerTintColor: 'white',
          headerTitleAlign: 'center'
         }}
        >
        <Stack.Screen
         name='category' 
         component = {CategoriesScreen} 
         options = {{title:'Categories List' }} 
        />
        <Stack.Screen
         name = 'Meal' 
         component = {CategoryMealsScreen}
         options = {({route}) => ({title: route.params.id })}  
        />
        <Stack.Screen
         name='MealsDetails' 
         component={MealsDetailsScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor:'green'
  },
  header: {
    backgroundColor: 'black'
  }
});

export default App;
