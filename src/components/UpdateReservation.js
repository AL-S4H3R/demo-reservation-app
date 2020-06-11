import React,{useState} from 'react';
import {View,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

function UpdateReservation(){
    
	const [email,setEmail] = useState('');
    const [username,setUser] = useState('');
    const [mobile,setMobile] = useState('');
    const [dob,setDob] = useState('');
    const [id,setId] = useState('');

    const ref = firestore().collection('reservations');

    async function updateDatabase(id){
    	await ref.doc(id).update({
    		email:email,
    		username:username,
    		mobile:mobile,
    		dob:dob
    	});
    	setEmail('');
    	setId('');
    	setMobile('');
    	setUser('');
    	setDob('');
    }

    return(
			<View style={styles.container}>
				<Input 
					placeholder="Reservation Id"
					value={id}
					onChangeText={setId}
				/>
				<Input
  					placeholder='Email'
  					leftIcon={
    					<Icon
      						name='envelope'
      						size={24}
      						color='black'
    					/>
  					}
            value={email}
            onChangeText={setEmail}
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
            value={username}
            onChangeText={setUser}
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
            value={mobile}
            onChangeText={setMobile}
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
            value={dob}
            onChangeText={setDob}
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
        			onPress={()=> updateDatabase(id)}
        />
			</View>
		)

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
		marginTop: 100
	}
});