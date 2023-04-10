import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialIcons'
import courses from "../conts/courses";
import SQLite from 'react-native-sqlite-storage';
import { useEffect } from "react";

const db = SQLite.openDatabase(
    {
      name: 'userdb',
      createFromLocation: '~dbLearnApp.sqlite',
    },
    () => { },
    error => {
      console.log(error);
    }
  );

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({navigation}) => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        // Fetch user's name from the database
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT name FROM users WHERE id = 1',
                [],
                (tx, results) => {
                    if (results.rows.length > 0) {
                        setUserName(results.rows.item(0).name);
                    }
                }
            );
        });
    }, []);

    const CourseCard = ({course}) => {
        return (
            //link to course page
            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate("Course", {data:course})}>
                <ImageBackground source={course.image} style={styles.imageBack}>
                    <Text style={styles.imageBackFont1}>{course.name}</Text>
                    <Text style={styles.imageBackFont2}>{course.totalCourse + 'Courses'}</Text>
                </ImageBackground>
            </TouchableOpacity>
        ); 
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.firstView}>
                <Text style={styles.hey}>Hey {userName},</Text>
                <Text style={styles.find}>
                    Find a topic you want to learn
                </Text>
                <View style={styles.secondView}>
                    <Icon name="search" size={30} />
                    <TextInput
                        style = {{fontSize:18, marginLeft: 5}}
                        placeholder="Search for course"
                    />
                </View>
                <View style = {styles.thirdView}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Categories</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6E8AFA'}}>See All</Text>
                </View>
            </View>
            <View style = {styles.flatListView}>
                    <FlatList 
                        showsVerticalScrollIndicator={false} 
                        numColumns={2}
                        data = {courses}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <CourseCard course={item}/>}
                    />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
    },

    firstView:{
        marginTop: 0,
    },

    hey:{
        fontSize: 28,
        fontWeight:'bold',
    },

    find:{
        fontSize: 22,
        color: '#61688B',
        marginTop: 15,
    },

    secondView:{
        height: 60,
        marginTop: 35,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: '#F5F5F7',
        borderRadius: 30,
        alignContent: 'center',
        flexDirection: 'row',
    },

    thirdView:{
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flatListView:{
        flex:1,
    },

    imageBack:{
        marginVertical:10,
        marginHorizontal:5,
        borderRadius:50,
        width: windowWidth / 2 - 30,
        height: windowHeight / 3,
        overflow:'hidden',
        paddingTop:25,
        paddingLeft:20,
        borderRadius:15,
    },

    imageBackFont1:{
        fontSize:20,
        fontWeight:'bold',
        paddingBottom: 5,
    },

    imageBackFont2:{
        color:'#8F95B2',
        fontWeight:'600'
    }

});

export default HomeScreen;