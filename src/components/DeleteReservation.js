import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

function DeleteReservation(){
		
		const [deleteId,setDeleteId] = React.useState('');
		const [isDeleted,setIsDeleted] = React.useState(true);
		const ref = firestore().collection('reservations');

		async function deleteReservation(id){
			console.log(id);
			await ref.doc(`${id}`).delete();
			setIsDeleted(true);
			setDeleteId('');
		}

		return(
			<View style={styles.container}>
				<Input placeholder="Enter Reservation Id:" value={deleteId} onChangeText={setDeleteId}/>
				<Button title="Enter" buttonStyle={styles.button} onPress={()=> deleteReservation(deleteId)}/>
			</View>
		)
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