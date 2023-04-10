// import React, {useState} from 'react';
// import {View, Image, StyleSheet, Text, TextInput} from 'react-native';
// import CustomButton from '../components/CustomButton';
// import {useNavigation} from '@react-navigation/native';
// import auth, { firebase } from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import {ScrollView} from 'react-native-gesture-handler';
// import {FlatList} from 'react-native-gesture-handler';
// let SQLite = require('react-native-sqlite-storage');

// const SignUp = () => {
//   const [values, setValue] = useState({
//     username: '',
//     email: '',
//     password: '',
//     password2: '',
//   });

//   const navigation = useNavigation();

//   const handleChange = (text, eventName) => {
//     setValue(prev => {
//       return {
//         ...prev,
//         [eventName]: text,
//       };
//     });
//   };

//   const signup = () => {
//     const {
//       username,
//       email,
//       password,
//       password2,
//     } = values;

//     if (password == password2) {
//       firebase.auth()
//         .createUserWithEmailAndPassword(email, password)
//         .then(() => {
//           firestore().collection('users').doc(auth().currentUser.uid).set({
//             uid: auth().currentUser.uid,
//             username,
//             email,
//           });
//         })
//         .catch(error => {
//           alert(error.message);
//           //..
//         });
//     } else {
//       alert('Your Password is differenrt');
//     }
//   };

//   const onSingInPressed = () => {
//     navigation.navigate('SignIn');
//   };
//   const onTermsOfUsePressed = () => {
//     console.warn('termofuse');
//   };

//   const onPrivacyPolicyPressed = () => {
//     console.warn('privacypolicy');
//   };
//   return (
//     <View>
//       <ScrollView keyboardShouldPersistTaps="always" listViewDisplayed={false}>
//         <View style={styles.root}>
//           <Text style={styles.title}> Create an account </Text>

//           <View style={styles.container}>
//             <TextInput
//               onChangeText={text => handleChange(text, 'username')}
//               placeholder="username"
//               style={styles.input}
//             />
//           </View>

//           <Text style={styles.title2}>Email:</Text>
//           <View style={styles.container}>
//             <TextInput
//               onChangeText={text => handleChange(text, 'email')}
//               placeholder="email"
//               style={styles.input}
//             />
//           </View>

//           <Text style={styles.title2}>Password:</Text>
//           <View style={styles.container}>
//             <TextInput
//               onChangeText={text => handleChange(text, 'password')}
//               placeholder="password"
//               style={styles.input}
//               secureTextEntry={true}
//             />
//           </View>

//           <View style={styles.container}>
//             <TextInput
//               onChangeText={text => handleChange(text, 'password2')}
//               placeholder="Confirm Password"
//               style={styles.input}
//               secureTextEntry={true}
//             />
//           </View>



//           <CustomButton text="Next" onPress={() => signup()} />

//           <Text style={styles.text}>
//             By registering, you confirm that you accept our{' '}
//             <Text style={styles.link} onPress={onTermsOfUsePressed}>
//               Terms of use
//             </Text>{' '}
//             and{' '}
//             <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
//               privacy Policy
//             </Text>
//             Policy
//           </Text>

//           <Text style={styles.text}>
//             Have an Account ?{' '}
//             <Text style={styles.sign} onPress={onSingInPressed}>
//               {' '}
//               SIGN IN
//             </Text>
//           </Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: '70%',
//     maxWidth: 300,
//     maxHeight: 200,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#051C50',
//     margin: 10,
//   },
//   text: {
//     color: 'gray',
//     marginVertical: 10,
//   },
//   link: {
//     color: '#FDB875',
//   },
//   sign: {
//     color: '#0000FF',
//   },
//   title2: {
//     padding: 10,
//   },

//   container: {
//     backgroundColor: 'white',
//     width: '100%',
//     borderColor: '#e8e8e8',
//     borderWidth: 1,
//     borderRadius: 5,

//     paddingHorizontal: 10,
//     marginVertical: 5,
//   },
// });

// export default SignUp;

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'userdb',
    createFromLocation: '~dbNewLearnApp.sqlite',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const SignUp = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    if (password !== confirmedPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (name, email, userId, password, confirmedPassword) VALUES (?, ?, ?, ?, ?)',
        [name, email, userId, password, confirmedPassword],
        (_, { insertId }) => {
          navigation.navigate('SignIn');
        },
        error => {
          console.log('Failed to insert user:', error);
        },
      );
    });
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>User ID:</Text>
      <TextInput value={userId} onChangeText={setUserId} />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text>Confirm Password:</Text>
      <TextInput
        value={confirmedPassword}
        onChangeText={setConfirmedPassword}
        secureTextEntry={true}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Back to Sign In" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default SignUp;
