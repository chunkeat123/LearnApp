import React, {Component, useState} from 'react';
import MathJax from 'react-native-mathjax-svg';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import MathView, {MathText} from 'react-native-math-view';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

const e1 = () => {

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
        const correctAnswer1 = '3/5';
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
                Limits Function Exercise
            </Text>    
            <MathView 
                math={'\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{3x^2 - x - 2}{5x^2 + 4x + 1}'}
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
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{3x^2 - x - 2}{5x^2 + 4x + 1} = \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{\\frac{3x^2 - x - 2}{x^2}} {\\frac{5x^2+4x+1}{x^2}}'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{3 - \\frac{1}{x} - \\frac{2}{x^2}}{5 + \\frac{4}{x} + \\frac{1}{x^2}}'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=\\frac{\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} ({3 - \\frac{1}{x} - \\frac{2}{x^2}})}{\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}}(5 + \\frac{4}{x} + \\frac{1}{x^2})}'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=\\frac{\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}}3 - \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{1}{x} - 2 \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{1}{x^2}}{\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} 5 + 4 \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{1}{x} + \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to \\infty}} \\frac{1}{x^2}}'}
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=\\frac {3-0-0}{5+0+0}'}
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=\\frac{3}{5}'}
                    />
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>
            
                <MathView 
                    math={'\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}} (2x^2-3x+4)'}
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
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}}(2x^2) - \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}}(3x) + \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}}4'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=2\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}}x^2 - 3\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}}x + \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to 5}}4'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=2(5^2)-3(5)+4'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=39'}
                    />
                    
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>

            <MathView 
                math={'\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}} \\frac{x^3+2x^2-1}{5-3x}'}
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
                        math={'\\frac {\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}}(x^3+2x^2-1)}{\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}}(5-3x)}'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'=\\frac {\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}}x^3 + 2 \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}} x^2 - \\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}}1}{\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}} 5 - 3\\lim\\limits_{\\phantom{t}{\\scriptstyle x \\to -2}} x}'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= \\frac{(-2)^3+2(-2)^2-1}{5-3(-2)}'} 
                    />
                    <MathView 
                        style={{ alignSelf: 'flex-start'}}
                        math={'= -\\frac{1}{11}'}
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

export default e1;