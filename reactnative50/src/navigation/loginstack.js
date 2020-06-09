import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  Login  from '../screen/login';

const Stack = createStackNavigator();

const Loginstack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default Loginstack;