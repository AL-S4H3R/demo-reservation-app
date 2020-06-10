import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';

class DeleteReservation extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Input placeholder="Enter Reservation Id:" />
				<Button title="Enter" buttonStyle={styles.button}/>
			</View>
		)
	}
}

export default DeleteReservation;

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