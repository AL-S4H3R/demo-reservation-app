import React from 'react';
import {View,Text,FlatList,ActivityIndicator} from 'react-native';

import firestore from '@react-native-firebase/firestore';

function ReadReservation(){

    const [loading,setLoading] = React.useState(true);
    const [reservation,setReservation] = React.useState([]);
    const ref = firestore().collection('reservations');

    React.useEffect(()=>{
    	var list = [];
    	const subscriber = ref
    						  .onSnapshot((querySnap)=>{
    						  	console.log(`Size : ${querySnap.size}`);
    							querySnap.forEach((doc)=>{
    								list.push({
    									...doc.data(),
    									key: doc.id
    								});
    							});  	
    						  console.log(list);
    						  setReservation(list);
    						  setLoading(false);	
    					 })
    	return () => subscriber();

    },[]);

    if(loading){
    	return <ActivityIndicator />
    }
	return(
		<View>
			<FlatList 
				data={reservation}
				renderItem={({item})=>(
					<View>
						
					</View>
				)}
			/>
		</View>
	);
}


export default ReadReservation;