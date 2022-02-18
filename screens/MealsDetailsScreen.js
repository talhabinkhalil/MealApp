import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MealsDetailsScreen = (props) => {
  return (
    <View style = {styles.container}>
      <Text>Favourite Meals Screen</Text>
      <Button title='GO Back' />
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

export default MealsDetailsScreen