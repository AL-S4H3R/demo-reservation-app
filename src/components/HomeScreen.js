import React from 'react';
import {Button} from 'react-native-elements';
import {View,StyleSheet} from 'react-native';

class HomeScreen extends React.Component {

	render(){
		return(
			<View style={styles.container}>
				<Button
  					title="Create Reservation"
					buttonStyle={styles.button}
					onPress={()=> this.props.navigation.navigate('Create Reservation')}
				/>
				<Button
  					title="Read Reservations"
					buttonStyle={styles.button}
					onPress={()=> this.props.navigation.navigate('Read Reservations')}
				/>
				<Button
  					title="Update Reservation"
					buttonStyle={styles.button}
					onPress={()=> this.props.navigation.navigate('Update Reservation')}
				/>
				<Button
  					title="Delete Reservation"
					buttonStyle={styles.button}
					onPress={()=> this.props.navigation.navigate('Delete Reservation')}
				/>
			</View>			
		)
	}
}

export default HomeScreen;

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