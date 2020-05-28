import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, AsyncStorage, TextInput, TouchableOpacity } from 'react-native';
import {Button} from 'react-native-elements';
import SegmentControl from './Segmented';
const COUNTER_KEY = "COUNTER_KEY";



const Home = () => {
    const [value, onChangeText] = React.useState('');
    
    const saveFn = () => {
        onChangeText(value);
        try{
          AsyncStorage.setItem(COUNTER_KEY, JSON.stringify(value));
        } catch (error) {
      
        }
      };

      React.useEffect(() => {
        const restoreTextState = async () => {
          try{
            const savedStateString = await AsyncStorage.getItem(COUNTER_KEY);
            const state = JSON.parse(savedStateString);
            onChangeText(state);
          }catch(e){
      
          }
        };
        restoreTextState();
      }, []);
      
      const onPress = () =>{
        return(
        <View>
          <TextInput
                      style={{ width:254,height: 25, borderColor: 'gray', borderWidth: 1 }}
                      onChangeText={text => onChangeText(text)}
                      value={value}
                  />
                  <View style={{marginLeft:3}}>
                      <Button onPress={saveFn} title="save" backgroundColor="green" color="green"/>
                  </View>
        </View>
        )
    };

    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center',}}>
            <Text style={styles.title}>首頁</Text>
            </View>
            <View style={styles.index}>
                <View style={styles.index1}>
                    <View style={{flexDirection:'row'}}>
                    <Image
                        source={require('../assets/img/monthl.png')}
                        style={styles.monthl}
                    />
                    <Text style={styles.word1}>3-4月</Text>
                    <Image
                        source={require('../assets/img/monthr.png')}
                        style={styles.monthr}
                    />
                    </View>
                    <Text style={styles.word2}>總金額</Text>
                    <Text style={styles.word3}>20.77</Text>
                    
                </View>
                
                <View style={styles.index2}>
                    <Text style={styles.sort1}>品項</Text>
                    <Text style={styles.sort2}>日期</Text>
                    <Text style={styles.sort3}>價值</Text>
                    
                </View>
                <View style={{width:254,borderColor:'#32271F',opacity:0.25,borderWidth:1,marginTop:-465,alignSelf:'center'}}></View>
                
                    <View style={{width:348,height:31,marginTop:-88,alignSelf:'center',backgroundColor:'#EFEACC',borderRadius:7,borderColor:'#EFEACC',borderEndWidth:1.5,borderStartWidth:1.5}}>
                        <SegmentControl/>
                    </View>
                    
                <View style={{width:1,height:16,backgroundColor:'#8E8E93',position:'absolute',left:263,top:128,opacity:0.5}}></View>
                <View style={{width:1,height:16,backgroundColor:'#8E8E93',position:'absolute',left:149,top:128,opacity:0.5}}></View>
                
                <View style={{flexDirection:'row',marginTop:123,marginLeft:76}}>
               
                <TextInput
                        style={{ width:254,height: 25, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                    />
                    <View style={{marginLeft:7}}>
                        <TouchableOpacity onPress={saveFn}>
                            <Image
                            source={require('../assets/img/edit1.png')}
                            style={{width:30,height:30}}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        </View>

    );
}
export default Home ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A561B',
        height:800,
    },
    title:{
        fontSize:17,
        marginTop:53,
        color:'white',
        fontWeight:"bold"
    },
    index:{
        height:800,
        backgroundColor: '#F9F7E8',
        marginTop:13,
        borderRadius:40,
    },
    index1:{
        alignItems: 'center',
    },
    monthl:{
        width:9,
        height:8,
        marginTop:18.5,
        marginRight:9.5,
    },
    monthr:{
        width:9,
        height:8,
        marginTop:18.5,
        marginLeft :9.5,
    },
    word1:{
        fontSize:16,
        marginTop:12,
    },
    word2:{
        fontSize:16,
        marginTop:14,
    },
    word3:{
        fontSize:30,
        marginTop:2,
        lineHeight:39
    },
    index2:{
        justifyContent:'center',
        height:508,
        backgroundColor:'#FEFDF9',
        borderRadius:40,
        flexDirection:"row",
        marginTop:60,
    },
    sort1:{
        fontSize:14,
        marginTop:24,
        marginRight:87,
    },
    sort2:{
        fontSize:14,
        marginTop:24
    },
    sort3:{
        fontSize:14,
        marginTop:24,
        marginLeft:78,
    }
  });
  