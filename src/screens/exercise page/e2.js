import React, {Component, useState} from 'react';
import MathJax from 'react-native-mathjax-svg';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import MathView, {MathText} from 'react-native-math-view';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

const e2 = () => {

    const [input1, setInput1] = useState('');
    const [isValid1, setIsValid1] = useState(false);
    const [showSolution1, setShowSolution1] = useState(false);

    const [input2, setInput2] = useState('');
    const [isValid2, setIsValid2] = useState(false);
    const [showSolution2, setShowSolution2] = useState(false);

    const [input3, setInput3] = useState('');
    const [isValid3, setIsValid3] = useState(false);
    const [showSolution3, setShowSolution3] = useState(false);


    const toggleSolution1 = () => {
      setShowSolution1(!showSolution1);
    };

    const toggleSolution2 = () => {
        setShowSolution2(!showSolution2);
      };

      const toggleSolution3 = () => {
        setShowSolution3(!showSolution2);
      };

    const checkInput1 = (text) => {
        // Replace this with your own validation logic
        const correctAnswer1 = '48';
        if (text === correctAnswer1) {
          setIsValid1(true);
        } else {
          setIsValid1(false);
        }
        setInput1(text);
      }

      const checkInput2 = (text) => {
        // Replace this with your own validation logic
        const correctAnswer2 = '39';
        if (text === correctAnswer2) {
          setIsValid2(true);
        } else {
          setIsValid2(false);
        }
        setInput2(text);
      }

      const checkInput3 = (text) => {
        // Replace this with your own validation logic
        const correctAnswer3 = '-1/11';
        if (text === correctAnswer3) {
          setIsValid3(true);
        } else {
          setIsValid3(false);
        }
        setInput3(text);
      }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Double Integrals Exercise
            </Text>    
            <MathText 
                style={scale = 200}
                value={'1. Find the volume of the solid \\(S\\) that is bounded by the elliptic paraboloid \\(x^2 + 2y^2 + z = 16\\), where \\(R = [0,2] \\times [0,2]\\).'}
            />
            <TextInput
                value={input1}
                onChangeText={checkInput1}
                style={{ borderWidth: 1, borderColor: isValid1 ? 'green' : 'red' }}
            />
            
            <Button title={showSolution1 ? 'Hide Solution' : 'Show Solution'} onPress={toggleSolution1} />
            {showSolution1 && (
                <View>
                    <Text style={styles.mathTxt}>Solution:</Text>
                    <MathText
                        value={'We first observe that \\(S\\) is the solid that lies under the surface \\(z = 16 - x^2 - 2y^2 \\) and above the square \\(R = [0,2] \\times [0,2]\\).'} 
                    />
                    <Text>
                        {/* style={{ alignSelf: 'flex-start'}} */}
                        Therefore the volume 
                    </Text>
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'V = \\int\\int_R (16-x^2-2y^2) dA = \\int_{0}^{2} \\int_{0}^{2} (16-x^2-2y^2) dxdy'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= \\int_{0}^{2} [16-\\frac{1}{3}x^3-2y^2x]_{x=0}^{x=2} dy'}
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= \\int_{0}^{2} (\\frac{88}{3}-4y^2)dy'}
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= [\\frac{88}{3}y-\\frac{4y^3}{3}]_{0}^{2}'}
                    /><MathView 
                    style={{ alignSelf: 'flex-start'}}
                    math={'= 48'}
                />
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>
            
                <MathText 
                    value={'Evaluate the double integral \\(\\int\\int_R(x-3y^2) dA\\), where \\(R = {(x,y)|0 \\leq x \\leq 2,1 \\leq y \\leq 2}\\).'}
                />
                <TextInput
                    value={input2}
                    onChangeText={checkInput2}
                    style={{ borderWidth: 1, borderColor: isValid2 ? 'green' : 'red' }}
                />

            <Button title={showSolution2 ? 'Hide Solution' : 'Show Solution'} onPress={toggleSolution2} />
            {showSolution2 && (
                <View>
                    <Text style={styles.mathTxt}>Solution:</Text>
                    <Text>Fubini's Theorem gives</Text>
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'\\int \\int_R(x-3y^2) dA = \\int_{0}^{2} \\int_{1}^{2}(x-3y^2)dydx'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= \\int_{0}^{2}[xy-y^3]_{y=1}^{y=2} dx'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= \\int_{0}^{2}(x-7) dx'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= \\frac {x^2}{2}-7x]_{0}^{2}'}
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= -12'}
                    />
                    
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>

            <MathText 
                value={'Find the double integral \\(\\int \\int_R x sec^2 y dA\\) where \\(R = {{(x,y)|0 \\leq x \\leq 2,0 \\leq y \\leq \\frac{\\pi}{4}}}\\)'}
            />
            <TextInput
                value={input3}
                onChangeText={checkInput3}
                style={{ borderWidth: 1, borderColor: isValid3 ? 'green' : 'red' }}
            />

            <Button title={showSolution3 ? 'Hide Solution' : 'Show Solution'} onPress={toggleSolution3} />
            {showSolution3 && (
                <View>
                    <Text style={styles.mathTxt}>Solution:</Text>
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'\\int \\int_R x sec^2 y dA'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= (\\int_{0}^{2}x dx)(\\int_{0}^{\\frac {\\pi}{4}} sec^2y dy)'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= 2'} 
                    />
                    
                </View>
            )}
            
            
        </ScrollView>
    );
};

const styles= StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight:'bold',
        color:'black',
    },
    stitle: {
        fontSize: 15,
        color:'black',
    },
    mathTxt: {
        fontSize: 15,
        color: 'black',
    }
});

export default e2;