import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, FlatList } from 'react-native';


export default function App() {

  const [textItem, setTextItem] = useState()
  const [itemList, setItemList] = useState([])
  const [x, setList] = useState([])

  const onHandleChengeItem = (t) => {
    setTextItem(t)
  }

  const  addItem = () => {
    setItemList(currentItems => [
      ...currentItems,
      {id: Math.random().toString(), value: textItem}
    ])
    setTextItem()
  }

  const deleteItem = (itemId) => {
      
      
      setItemList(()=> (
        itemList.filter ((item) => item.id !== itemId.id)
      ))
  }

  const  delItems = () => {
    setItemList([])
  }


  const renderItem = ({item}) => (
    
    <View style={styles.varios}>

      <Text style={styles.margenes}>{item.value}</Text>

      <View style={styles.buttons}>

              <Pressable style={styles.buttonsStylesDelete} onPress={() => deleteItem(item)}>
                    <Text>Borrar</Text>
              </Pressable>
              <Pressable style={styles.buttonsStylesComplete} onPress={() => completeItem(item)}>
                    <Text>Echo</Text>
              </Pressable>
      </View>
    </View>

  )

  const renderCompletos = ({item}) => (
    
    <View style={styles.margenes}>
      <Text style={styles.margenes}>{item}</Text>
    </View>

  )

  const completeItem = (itemx) => {

    setList(currentItems => [
      ...currentItems,
      itemx.value
    ])

    deleteItem(itemx)

}




  return (
    <View style={styles.container}>

      <View>
        <TextInput  placeholder='Agregar item' 
                    value={textItem} 
                    style={styles.texto} 
                    onChangeText={onHandleChengeItem}
                    />
        
        <Button title='agregar' onPress={addItem} />
        <Button title='Borar todo' onPress={delItems} />
      </View>

      <View style={styles.componentes}>
      <Text style={styles.margenes}>ELEMENTOS AGREGADOS</Text>
          <FlatList
            data={itemList}
            renderItem={renderItem
            }
          />
        
      </View>

      <View style={styles.componentes}>
        
        <Text style={styles.margenes}>ELEMENTOS COMPLETOS</Text>

          <FlatList
            data={x}
            renderItem={renderCompletos}
          />
        
      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 50, 
    padding: 30
  },

  texto: {
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    height:50, 
    margin: 10, 
    textAlign:'center'
  },

  componentes: {

    margin: 10,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    height: 250
  },


  varios:{
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },

  margenes: {
    margin: 2,
    textAlign:'center'
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  buttonsStylesDelete: {
    margin:4,
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#FF9494'
  },

  buttonsStylesComplete:{
    margin:4,
    borderWidth: 2,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#7BFF49'
  }

  

});
