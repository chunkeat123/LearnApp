import React, {useState} from "react";
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


//tab Screen
import HomeScreen from "./src/screens/HomeScreen";
import ExerciseScreen from "./src/screens/ExerciseScreen";
import CourseScreen from "./src/screens/CourseScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

//Course Page
import page from "./src/screens/course page/page";
import Limit from "./src/screens/course page/Limit";
import DoubleIntegrals from "./src/screens/course page/DoubleIntegrals";
import page2 from "./src/screens/course page/page2";

//Exercise Page
import e1 from "./src/screens/exercise page/e1";
import e2 from "./src/screens/exercise page/e2";
import e3 from "./src/screens/exercise page/e3";
import e4 from "./src/screens/exercise page/e4";

import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";

import CourseScreen2 from "./src/screens/CourseScreen2";
import { createStackNavigator } from "@react-navigation/stack";
import {Image} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route})=> ({
        headerShown:false,
        tabBarIcon:({focused, size, color}) => {
          let iconName;
          if(route.name === "Home"){
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Exercise"){
            iconName = focused ? "head-question" : "head-question-outline";
          } else if (route.name === "Course"){
            iconName = focused ? "ios-book" : "ios-book-outline";
          } else if (route.name === "Profile"){
            iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
          }
          return <Icon name={iconName} size={size} color={color}/>;
        },
      })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Exercise" component={ExerciseStack} />
        <Tab.Screen name="Course" component={CourseStack} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

  function ExerciseStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Exercise" component={ExerciseScreen} options={{headerLeft:null}}/>
        <Stack.Screen name="e1" component={e1}/>
        <Stack.Screen name="e2" component={e2}/>
        <Stack.Screen name="e3" component={e3}/>
        <Stack.Screen name="e4" component={e4}/>


      </Stack.Navigator>
    );
  }

  function CourseStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Course" component={CourseScreen2} options={{headerLeft:null}}/>
        <Stack.Screen name="page" component={page}/>
        <Stack.Screen name="Limit" component={Limit}/>
        <Stack.Screen name="DoubleIntegrals" component={DoubleIntegrals}/>
        <Stack.Screen name="page2" component={page2} 
        options={{
          headerTitle: 'Linear Function',
          headerTitleStyle: { color: 'white' }, // Change header text color
          headerStyle: { backgroundColor: 'black' }, // Change header background color
          headerTintColor: 'white',
        }}/>
      </Stack.Navigator>
      
    );
  }

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerLeft:null}}/>
      </Stack.Navigator>
    );
  }

  function SignInStack() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    )
  }
export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    // <NavigationContainer>
    //   {isLoggedIn ? (
    //     <Stack.Navigator>
    //       <Stack.Screen name="Home" component={TabNavigator}/>
    //     </Stack.Navigator>
    //   ) : (
    //     <Stack.Navigator>
    //       <Stack.Screen name="SignIn">
    //         {(props) => <SignIn {...props} setIsLoggedIn={setIsLoggedIn} />}
    //       </Stack.Screen>
    //     </Stack.Navigator>
    //   )}
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName="SignIn"
      screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="SignIn" component={SignInStack} /> */}
        <Stack.Screen name="Home" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}