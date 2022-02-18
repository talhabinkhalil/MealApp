import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoriesScreen = (props) => {

  const renderGridItems = (itemsData) => {
    return (
      <TouchableOpacity
       style = {styles.categories} 
       onPress={() => props.navigation.navigate('Meal', {id:itemsData.item.id})}
       >
        <View >
          <Text
           style = {
             {color: 'black', 
             borderWidth:1,
             textAlign:'center',
             alignSelf:'center',
             width:80, 
             height:70}}
          >
            {itemsData.item.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <FlatList
    style = {styles.container}
    keyExtractor={item => item.id}
    numColumns = {2}
    data = {CATEGORIES}
    renderItem = {renderGridItems}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor:'yellow',
    borderWidth:1,
    padding:0
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'dodgerblue'
  },
  categories: {
    flex:1,
    // backgroundColor:'black',
    padding:'20%',
    // alignItems:'center',
    // padding:'10%',
    borderWidth: 1,
    // height:'100%',
    // flexDirection:'column',
    // justifyContent:'space-around'
  }
})

export default CategoriesScreen