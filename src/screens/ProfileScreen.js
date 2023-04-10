// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from "react-native";
// import SQLite from "react-native-sqlite-storage";

// const db = SQLite.openDatabase(
//     {
//       name: 'userdb',
//       createFromLocation: '~dbLearnApp.sqlite',
//     },
//     () => { },
//     error => {
//       console.log(error);
//     }
//   );

//   const ProfileScreen = ({ navigation, route }) => {
//     const [userData, setUserData] = useState({});
//     const [editing, setEditing] = useState(false);
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
  
//     useEffect(() => {
//         db.transaction((tx) => {
//           tx.executeSql(
//             "SELECT name, email, userId FROM users WHERE id = ?",
//             [1], // replace with the current user's ID
//             (txObj, { rows: { _array } }) => {
//               if (_array.length > 0) {
//                 setUserData(_array[0]);
//                 setName(_array[0].name);
//                 setEmail(_array[0].email);
//               }
//             },
//             (txObj, error) => {
//               console.log("Error: ", error);
//             }
//           );
//         });
//       }, []);
      

//   const handleUpdateProfile = () => {
//     if (!name || !email) {
//       Alert.alert("Please fill in all fields");
//       return;
//     }
//     db.transaction((tx) => {
//       tx.executeSql(
//         "UPDATE users SET name = ?, email = ? WHERE id = ?",
//         [name, email, userData.id],
//         (txObj, resultSet) => {
//           if (resultSet.rowsAffected > 0) {
//             setUserData({ ...userData, name, email });
//             setEditing(false);
//             Alert.alert("Profile updated successfully");
//           }
//         },
//         (txObj, error) => {
//           console.log("Error: ", error);
//         }
//       );
//     });
//   };

//   const handleLogout = () => {
//     navigation.navigate("SignIn");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image
//           source={{ uri: userData.profilePicture }}
//           style={styles.profilePicture}
//         />
//         {editing ? (
//           <>
//             <TextInput
//               value={name}
//               onChangeText={setName}
//               placeholder="Name"
//               style={styles.input}
//             />
//             <TextInput
//               value={email}
//               onChangeText={setEmail}
//               placeholder="Email"
//               style={styles.input}
//             />
//           </>
//         ) : (
//           <>
//             <Text style={styles.name}>{userData.name}</Text>
//             <Text style={styles.email}>{userData.email}</Text>
//           </>
//         )}
//       </View>
//       <View style={styles.body}>
//         {editing ? (
//           <>
//             <TouchableOpacity
//               style={styles.saveButton}
//               onPress={handleUpdateProfile}
//             >
//               <Text style={styles.saveButtonText}>Save</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.cancelButton}
//               onPress={() => setEditing(false)}
//             >
//               <Text style={styles.cancelButtonText}>Cancel</Text>
//             </TouchableOpacity>
//           </>
//         ) : (
//           <TouchableOpacity
//             style={styles.editButton}
//             onPress={() => setEditing(true)}
//           >
//             <Text style={styles.editButtonText}>Edit Profile</Text>
//           </TouchableOpacity>
//         )}
//         <TouchableOpacity
//           style={styles.logoutButton}
//           onPress={handleLogout}
//         >
//           <Text style={styles.logoutButtonText}>Log Out</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//      );
//    };
   
//    const styles = StyleSheet.create({
//      container: {
//        flex: 1,
//        backgroundColor: "#fff",
//      },
//      header: {
//        flex: 1,
//        alignItems: "center",
//        justifyContent: "center",
//      },
//      body: {
//        flex: 2,
//        alignItems: "center",
//        justifyContent: "flex-start",
//      },
//      profilePicture: {
//        width: 100,
//        height: 100,
//        borderRadius: 50,
//        marginBottom: 20,
//      },
//      name: {
//        fontSize: 24,
//        fontWeight: "bold",
//        marginBottom: 10,
//      },
//      email: {
//        fontSize: 18,
//        color: "#666",
//      },
//      input: {
//        width: "80%",
//        height: 40,
//        borderWidth: 1,
//        borderColor: "#ccc",
//        borderRadius: 10,
//        paddingLeft: 10,
//        marginVertical: 10,
//      },
//      editButton: {
//        width: "80%",
//        height: 40,
//        backgroundColor: "#007AFF",
//        borderRadius: 10,
//        alignItems: "center",
//        justifyContent: "center",
//        marginBottom: 10,
//      },
//      editButtonText: {
//        color: "#fff",
//        fontWeight: "bold",
//      },
//      saveButton: {
//        width: "80%",
//        height: 40,
//        backgroundColor: "#007AFF",
//        borderRadius: 10,
//        alignItems: "center",
//        justifyContent: "center",
//        marginBottom: 10,
//      },
//      saveButtonText: {
//        color: "#fff",
//        fontWeight: "bold",
//      },
//      cancelButton: {
//        width: "80%",
//        height: 40,
//        backgroundColor: "#FF3B30",
//        borderRadius: 10,
//        alignItems: "center",
//        justifyContent: "center",
//        marginBottom: 10,
//      },
//      cancelButtonText: {
//        color: "#fff",
//        fontWeight: "bold",
//      },
//      logoutButton: {
//        width: "80%",
//        height: 40,
//        backgroundColor: "#007AFF",
//        borderRadius: 10,
//        alignItems: "center",
//        justifyContent: "center",
//      },
//      logoutButtonText: {
//        color: "#fff",
//        fontWeight: "bold",
//      },
//    });
   
//    export default ProfileScreen;
   
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import SQLite from 'react-native-sqlite-storage';

// Open the database connection
const db = SQLite.openDatabase(
  {
    name: 'userdb',
    createFromLocation: '~dbLearnApp.sqlite',
  },
  () => {},
  error => {
    console.log(error);
  }
);

const ProfileScreen = ({ navigation }) => {
  // Declare state variables for the user's name and email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Use the useEffect hook to retrieve the user's information from the database when the component mounts
  useEffect(() => {
    // Execute a SQL query to retrieve the user's name and email from the database
    db.transaction(tx => {
      tx.executeSql(
        'SELECT name, email FROM users WHERE id = ?',
        [1], // Pass in the user's ID (assuming it's 1 for this example)
        (_, { rows }) => {
          // If the query returns a row, update the state variables with the user's name and email
          if (rows.length > 0) {
            setName(rows.item(0).name);
            setEmail(rows.item(0).email);
          }
        }
      );
    });
  }, []); // The empty dependency array ensures that this effect only runs once when the component mounts

  // Define a function to update the user's information in the database
  const saveProfile = () => {
    // Execute a SQL query to update the user's name and email in the database
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [name, email, 1], // Pass in the updated name and email values, as well as the user's ID
        () => {
          // If the query succeeds, show an alert to indicate that the profile was saved successfully
          alert('Profile saved successfully');
        },
        error => {
          // If the query fails, log an error to the console
          console.log('Failed to save profile:', error);
        }
      );
    });
  };

  // Define a function to log the user out and navigate back to the login screen
  const logout = () => {
    navigation.navigate('SignIn');
  };

  // Render the component
  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Button title="Save" onPress={saveProfile} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;
