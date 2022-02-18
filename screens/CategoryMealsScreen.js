import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const {route: { params: { id }}} = props;
  const data = CATEGORIES.find(d => d.id == id);

  useEffect(() => {
    props.navigation.setOptions({title: data.title})
  }, [])
  
  return (
    <View style = {styles.container}>
      <Text style = {{color: 'black', fontWeight: 'bold'}}>
        {data.title}
      </Text>
      <Button title='DETAILS' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CategoryMealsScreen