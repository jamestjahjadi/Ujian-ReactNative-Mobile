import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const loginaction = (data) => {
    console.log(data)
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            await AsyncStorage.setItem('username', JSON.stringify(data))
        } catch (error) {
            
        }
    }
}

export const keepLogin = () => {
    return async dispatch => {
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const getimage = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=5',
                {headers:{
                    " X-Api-Key" : "9cefaac1-a613-42c1-9fde-90d39aceb6ee"
                }}
            )
            
            // console.log(res.data)
            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}