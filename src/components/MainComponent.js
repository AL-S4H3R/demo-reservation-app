import React,{Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import CreateReservation from './CreateReservation';
import ReadReservation from './ReadReservation';
import UpdateReservation from './UpdateReservation';
import DeleteReservation from './DeleteReservation';

const Stack = createStackNavigator();

class Main extends Component{
   render(){
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Create Reservation" component={CreateReservation}/>				
				<Stack.Screen name="Read Reservations" component={ReadReservation} />
				<Stack.Screen name="Update Reservation" component={UpdateReservation} />
				<Stack.Screen name="Delete Reservation" component={DeleteReservation} />
			</Stack.Navigator>
		</NavigationContainer>
	)
   }
}

export default Main;