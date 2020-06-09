import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import Loginstack from './loginstack'
import { keepLogin } from '../redux/action/authaction';
import Tabnavigations from './tabnavigation'

const Homenavigation = () => {
    let username = useSelector(state => state.auth.username)
    let dispatch = useDispatch();
    // console.log(username)
    useEffect(() => {
        AsyncStorage.getItem('username')
        .then(res => {
            // console.log(res)
            dispatch(keepLogin(res))
        })
        .catch(err => {
            console.log(err)
        })
    }, [dispatch])

    return (
        <NavigationContainer>
            {
                username 
                ?
                <Tabnavigations/>
                :
                <Loginstack/>
            }
        </NavigationContainer>
    )
};

export default Homenavigation ;