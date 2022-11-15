import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import colors from '../constant/colors'


const botonDel = ({functionOnPress, item}) => {

  return (
    <Pressable style={styles.buttonsStyles} onPress={() => {functionOnPress(item)}}>
        <Text>borar</Text>
    </Pressable>
  )
}

export default botonDel

const styles = StyleSheet.create({
    buttonsStyles: {
        margin:4,
        borderWidth: 2,
        padding: 10,
        borderRadius: 6,
        backgroundColor: colors.refuse
      }
})