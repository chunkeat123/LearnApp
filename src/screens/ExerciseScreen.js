import React from "react";
import {
    View,
    Text,
    Button
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const ExerciseScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
           <CustomButton
                text="Limit"
                title="E1"
                onPress={() => navigation.navigate('e1')}
            />
            <CustomButton
                text="Double Integrals"
                title="Double Integrals"
                onPress={() => navigation.navigate('e2')}
            />  
            <CustomButton
                text="Double Integrals"
                title="E3"
                onPress={() => navigation.navigate('e3')}
            />
            <CustomButton
                text="E4"
                title="E4"
                onPress={() => navigation.navigate('e4')}
            />
        </View>
    );
};
export default ExerciseScreen;