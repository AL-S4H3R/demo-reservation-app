import React from 'react';
import {View,Text,FlatList} from 'react-native';

import firestore from '@react-native-firebase/firestore';

function ReadReservation(){

    const [loading,setLoading] = React.useState(true);
    const [reservation,setReservation] = React.useState([]);
    const ref = firestore().collection('reservations');

    React.useEffect(()=>{
    	const subscriber = ref.onSnapshot((querySnapshot)=>{
    		console.log(`Size: ${querySnapshot.size}`);
    		const reservationList = [];
    		querySnapshot.forEach((docSnapshot)=>{
    			console.log(`Id: ${docSnapshot.id}`);
    			reservationList.push({
    				email: docSnapshot.data().email,
    				username: docSnapshot.data().username,
    				mobile: docSnapshot.data().mobile,
    				dob: docSnapshot.data().dob,
    				id: docSnapshot.id
    			});
    			console.log(reservationList);
    			setReservation(reservationList);
    		})
    	})			
    },[]);

    function ShowReservations({array}){
    	array.filter((item)=>{
    		return(
    			<View>
    				<Text>{item}</Text>
    			</View>
    		)
    	});
    }

	return(
		<ShowReservations array={reservation}/>
	)
}


export default ReadReservation;