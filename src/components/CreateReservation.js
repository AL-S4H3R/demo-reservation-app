import React,{ Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

class CreateReservation extends Component {

	render(){
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
 	 				title=" Save"
 	 				buttonStyle = {styles.button}
				/>
			</View>
		)
	}
}

export default CreateReservation;

const styles = StyleSheet.create({
	container: {
		marginTop: 200
	},
	button: {
		backgroundColor:'#000',
		marginRight: 75,
		marginLeft: 75,
		marginTop: 20,
	}
})