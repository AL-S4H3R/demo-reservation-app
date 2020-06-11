import React from 'react';
import {ScrollView,FlatList,ActivityIndicator} from 'react-native';
import {ListItem} from 'react-native-elements';

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
		<ScrollView>
			{
				reservation.map((l,i)=>(
					<ListItem 
						key={i}
						title={l.key}
						subtitle={l.email}
						bottomDivider
					/>
				))
			}
		</ScrollView>
	);
}


export default ReadReservation;