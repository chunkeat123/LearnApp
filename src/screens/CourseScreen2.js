import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    Pressable
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const CourseScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
           <CustomButton
                text="page"
                title="page"
                onPress={() => navigation.navigate('page')}
            >
            </CustomButton>
            <CustomButton
                text="Limit"
                title="Limit"
                onPress={() => navigation.navigate('Limit')}
            >
            </CustomButton>
            <CustomButton
                text="Double Integrals"
                title="DoubleIntegrals"
                onPress={() => navigation.navigate('DoubleIntegrals')}
            />
            <CustomButton
                text="Linear Function"
                title="page2"
                onPress={() => navigation.navigate('page2')}
            />
        </View>
    );
};

export default CourseScreen;