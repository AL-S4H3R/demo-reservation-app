import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const UpdateId = ({navigation}) => {
	return(
		<View style={styles.container}>
			<Input placeholder="Enter Reservation Id:" />
			<Button title="Enter" buttonStyle={styles.button} onPress={()=> navigation.navigate('Enter Updated Details')}/>
		</View>
	)
}

const NewDetails = () => {
	return(
			<View style={styles.container}>
				<Input
  					placeholder='Email'
  					leftIcon={
    					<Icon
      						name='envelope'
      						size={24}
      						color='black'
    					/>
  					}
  				/>
				<Input
  					placeholder='Username'
  					leftIcon={
    					<Icon
      						name='user-circle'
      						size={25}
      						color='black'
    					/>
  					}
  				/>
        		<Input
            		placeholder='Mobile number'
            		leftIcon={
              			<Icon
                  			name='mobile-phone'
                  			size={50}
                  			color='black'
              			/>
            		}
        		/>
        		<Input
            		placeholder='Date of Birth'
            		leftIcon={
              			<Icon
                  			name='calendar'
                  			size={30}
                  			color='black'
              			/>
            		}
        		/>
  				<Button
  					icon={
    					<Icon
      						name="send"
      						size={15}
      						color="white"
    					/>
  					}
 	 				title=" Update"
 	 				buttonStyle = {styles.button}
				/>
			</View>

	)
}

class UpdateReservation extends Component {
	render(){
		return(
				<Stack.Navigator>
					<Stack.Screen name="Update Reservation" component={UpdateId} />
					<Stack.Screen name="Enter Updated Details" component={NewDetails} />
				</Stack.Navigator>				
		)
	}
}

export default UpdateReservation;

const styles = StyleSheet.create({
	button: {
		backgroundColor:'#000',
		marginRight: 75,
		marginLeft: 75,
		marginTop: 20,
		padding: 10
	},
	container: {
		marginTop: 200
	}
});