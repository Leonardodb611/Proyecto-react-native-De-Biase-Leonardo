import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Pressable, FlatList } from 'react-native';
import BotonDel from './components/botonDel';
import BotonDone from './components/botonDone';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';




export default function App() {

  const [textItem, setTextItem] = useState()
  const [itemList, setItemList] = useState([])
  const [completeList, setCompleteList] = useState([])
  const [vista, setVista] = useState(false)

  
  const [loaded] = useFonts({
    IBMPlexMono: require('./assets/fonts/IBMPlexMono-Italic.ttf'),
  })

  if(!loaded) {
    return null
  }

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

              < BotonDel functionOnPress={deleteItem} item={item} />

              < BotonDone functionOnPress={completeItem} item={item} />

      </View>
    </View>

  )

  const renderCompletos = ({item}) => (
    
    <View style={styles.margenes}>
      <Text style={styles.margenes}>{item}</Text>
    </View>

  )

  const completeItem = (itemx) => {

    setCompleteList(currentItems => [
      ...currentItems,
      itemx.value
    ])

    deleteItem(itemx)

} 

  let content = <View>
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
                  <Button title='Ver Tareas completas' onPress={() => setVista(true)} />
                </View>

  if(vista){
    content = 
    <View>
      <View style={styles.componentes}>
          
          <Text style={styles.margenes}>ELEMENTOS COMPLETOS</Text>

            <FlatList
              data={completeList}
              renderItem={renderCompletos}
            />

          
      </View>
      <Button title='Ocultar tareas completas' onPress={() => setVista(false)} />
    </View>
    
  }




  return (
    <View style={styles.container}>
      
      {content}
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
    textAlign:'center',
    fontFamily: 'IBMPlexMono'
  },

  componentes: {

    margin: 10,
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    height: 250,
    fontFamily: 'IBMPlexMono'
  },


  varios:{
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'IBMPlexMono'
    
  },

  margenes: {
    margin: 2,
    textAlign:'center',
    fontFamily: 'IBMPlexMono'
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});
