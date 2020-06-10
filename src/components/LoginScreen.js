import React,{ Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';

class LoginScreen extends Component {

	signIn = () => {
		this.props.onButtonPress();
	}

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
  					placeholder='Password'
  					leftIcon={
    					<Icon
      						name='lock'
      						size={36}
      						color='black'
    					/>
  					}
  					secureTextEntry={true}
  				/>
  				<Button
  					icon={
    						<Icon
      							name="send"
      							size={15}
      							color="white"
    						/>
  						}
 	 				title=" Sign In"
 	 				buttonStyle = {styles.button}
					onPress = {this.signIn}
				/>
			</View>
		)
	}
}

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		marginTop: 220
	},
	button: {
		backgroundColor:'#000',
		marginRight: 75,
		marginLeft: 75,
		marginTop: 20,
	}
})