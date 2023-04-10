import React, {Component, useState} from 'react';
import MathJax from 'react-native-mathjax-svg';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import MathView, {MathText} from 'react-native-math-view';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

const e4 = () => {

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
        const correctAnswer3 = 'sqrt 6/2';
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
                Limits Function Exercise
            </Text>    
            <MathText 
                style={scale = 200}
                value={'If \\(f(x,y)=x^3+x^2y^3-2y^2\\), find \\(f_x(2,1)\\) and \\(f_y(2,1)\\).'}
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
                        value={'To find \\(f_x\\), regard \\(y\\) as a constant and differentiate \\(f(x,y)\\) with respect to \\(x\\).'} 
                    />
                    <MathText
                        value={'To find \\(f_y\\), regard \\(x\\) as a constant and differentiate \\(f(x,y)\\) with respect to \\(y\\).'} 
                    />
                    <MathText
                        value={'Holding \\(y\\) constant and differentiating with respect to \\(x\\), we get'} 
                    />
                    <MathView 
                        math={'f_x(x,y) = 3x^2+2xy^3'}
                    />
                    <MathView 
                        math={'f_x(2,1) = (3 \\times 2^2)+(2 \\times 2 \\times 1^3) = 16'}
                    />
                    <MathText
                        value={'Holding \\(x\\) constant and differentiating with respect to \\(y\\), we get'} 
                    />
                    <MathView 
                        math={'f_y(x,y) = 3x^2y^2-4y'}
                    />
                    <MathView 
                        math={'f_y(2,1) = (3 \\times 2^2 \\times 1^2)-(4 \\times 1) = 8'}
                    />
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>
            
                <MathText
                    value={'Find the second partial derivatives of \\(f(x,y) = x^3+x^2y^3-2y^2\\).'} 
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
                    <Text>Note that</Text>
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'f_x(x,y)=3x^2+2xy^3'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'f_y(x,y)=3x^2y^2-4y'} 
                    />
                    <Text>Therefore</Text>
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'f_{xx}=\\frac{\\partial}{\\partial x} (3x^2+2xy^3) = 6x+2y^3'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'f_{xy}=\\frac{\\partial}{\\partial y} (3x^2+2xy^3) = 6xy^2'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'f_{yx}=\\frac{\\partial}{\\partial x} (3x^2y^2-4y) = 6xy^2'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'f_{yy}=\\frac{\\partial}{\\partial y} (3x^2y^2-4y) = 6x^2y-4'} 
                    />
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>

            <MathText 
                value={'Given that \\(f(x,y) = \\frac{\\sqrt{x+y+1}}{x-1}\\), eveluate \\(f(3,2)\\) and find the domain.'}
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
                        math={'f(3,2)= \\frac{\\sqrt{3+2+1}}{3-1} = \\frac{\\sqrt {6}}{2}'} 
                    />
                    <MathText 
                        value={'The expression for \\(f\\) makes sense if the denominator is not \\(0\\) and the quantity under the square root sign is nonnegative. So the domain of \\(f\\) is'}
                    />
                    <MathView 
                        math={'D = \\{(x,y)|x+y+1 \\geq 0, x \\neq 1\\}'} 
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

export default e4;