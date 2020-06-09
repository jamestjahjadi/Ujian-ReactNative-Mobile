import React, { useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getimage } from '../redux/action/authaction';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home=({navigation})=>{
    var image= useSelector(state => state.auth.imagedata)
    var dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getimage())
    },[dispatch])

    return (
        <View style={{backgroundColor: 'white', flex:1}}>
            <FlatList 
                keyExtractor={(item, index) => index.toString()}
                data={imagedata}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                        style={{backgroundColor: 'white', flex:1}}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};
export default Home