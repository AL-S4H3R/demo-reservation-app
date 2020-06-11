import React,{ Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function CreateReservation(){
		
    const [email,setEmail] = React.useState('');
    const [username,setUser] = React.useState('');
    const [mobile,setMobile] = React.useState('');
    const [dob,setDob] = React.useState(''); 
    const [loading,setLoading] = React.useState(true);
    const [reservation,setReservation] = React.useState([]);
    const ref = firestore().collection('reservations');

    async function addToDatabase() {
      await ref.add({
        email: email,
        username: username,
        mobile: mobile,
        dob: dob
      });
      setEmail('');
      setUser('');
      setMobile('');
      setDob('');
    }

    React.useEffect(()=>{
      return ref.onSnapshot((querySnapshot)=>{
        const resList = [];
        querySnapshot.forEach((doc)=>{
          const {email,username,mobile,dob} = doc.data();
          resList.push({
            id: doc.id,
            email,
            username,
            mobile,
            dob
          })
        })
      })
    },[]);
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
          onPress={()=> addToDatabase()}
        />
			</View>
		)
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