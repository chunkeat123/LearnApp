import React, {Component} from 'react';
import MathJax from 'react-native-mathjax-svg';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import MathView, {MathText} from 'react-native-math-view';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';
import image1 from '../../image/FunctionsOfSeveralVariables.png';

const page = () => {
    const mathExpression = `$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$`;
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Functions of Several Variables
            </Text>    
            <MathText
                color={'black'}
                value={'A function \\(f\\) of two variables is a rule that assigns to each ordered pair of real numbers \\((x,y)\\) in a set \\(D\\) a unique real number denoted by \\(f(x,y)\\). The set \\(D\\) is the domain of \\(f\\) and its range is the set of values that \\(f\\) takes on, that is, \\({f(x,y)|(x,y)\\in D}\\)'}
            />

            <MathText
                color={'black'}
                value={'If \\(f\\) is a function of two variables with domain \\(D\\), then the graph of \\(f\\) is the set of all points \\((x,y,z)\\) in \\(\\mathbb{R}^3\\) such that \\(z=f(x,y)\\) and \\((x,y)\\) is in \\(D\\).'}
            />

            <MathText
                color={'black'}
                value={'The level curves of a function \\(f\\) of two variables are the curves with equations \\(f(x,y)=k\\), where \\(k\\) is a constant (in the range of \\(f\\))'}
            />

            <Image
                source={image1}
                resizeMode="contain"
                style={{width: 400, height: 300}}
            />      
                
          
        </ScrollView>
    );
};

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
        fontSize:20,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight:'bold',
        color:'black',
    },
    stitle: {
        fontSize: 18,
        color:'red',
    },
    sstitle: {
        fontSize: 15,
        color:'black',
    },
    mathTxt: {
        fontSize: 15,
        color: 'black',
    }
});

export default page;