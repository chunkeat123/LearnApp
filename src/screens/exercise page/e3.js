import React, {Component, useState} from 'react';
import MathJax from 'react-native-mathjax-svg';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import MathView, {MathText} from 'react-native-math-view';
import {View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

const e3 = () => {

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
                value={'1. Find the point on the parabola \\(y^2 = 2x\\) that is closest to the point (1, 4).'}
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
                        value={'The distance between the point (1,4) and the point \\(x,y\\) is'} 
                    />
                    <MathView 
                        math={'d = \\sqrt{(x-1)^2+(y-4)^2}'} 
                    />
                    <MathText
                        value={'But if \\((x,y)\\) lies on the parabola, then \\(x=\\frac{y^2}{2}\\), so the expression for \\(d\\) becomes'} 
                    />
                    <MathView 
                        math={'d = \\sqrt{(\\frac{1}{2}y^2-1)^2 + (y-4)^2}'}
                    />
                    <MathText
                        value={'Instead of minimizing \\(d\\), we minimize \\(d^2\\)'}
                    />
                    <MathView 
                        math={'d^2 = f(y) = (\\frac{1}{2}y^2-1)^2 + (y-4)^2'}
                    />
                    <Text>
                        Differentiating, we obtain
                    </Text>
                    <MathView 
                        math={'f\\overset{,}(y)=2(\\frac{1}{2}y^2-1)y + 2(y-4) = y^3 - 8'}
                    />
                    <MathText
                        style={{ alignSelf: 'flex-start'}}
                        value={'so \\(f\\overset{,}(y)=0\\) when \\(y=2\\). Observe that \\(f\\overset{,}(y) < 0\\) when \\(y < 2\\) and \\(f\\overset{,}(y)>0\\) when \\(y > 2\\), so by the First Derivative Test for Absolute Extreme Values, the absolute minimum occurs when \\(y=2\\).'}
                    />
                    <MathText
                        style={{ alignSelf: 'flex-start'}}
                        value={'The corresponding value of \\(x\\) is \\(x = \\frac{y^2}{2} = 2\\). Thus the point on \\(y^2 = 2x\\) closest to \\((1,4)\\) is \\((2,2)\\).'}
                    />
                </View>
            )}

            <Text> 
                {"\n"}
                {"\n"}
            </Text>
            
                <Text>
                   Find the area of the largest rectangle that can be inscribed in a semicircle of radius r.
                </Text>
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
                    <MathText
                        style={{ alignSelf: 'flex-start'}}
                        value={'Let take the semicircle to the upper half of the circle \\(x^2+y^2=r^2\\) with center the origin. Let \\((x,y)\\) be the vertex that lies in the first quadrant. Then the rectangle has sides of lengths \\(2x\\) and \\(y\\), so its area is'} 
                    />
                    <MathView 
                        math={'A = 2xy'} 
                    />
                    <MathText 
                        style={{ alignSelf: 'flex-start'}}
                        value={'To eliminate \\(y\\) we use the fact that \\((x,y)\\) lies on the circle \\(x^2+y^2=r^2\\) and so \\(y=\\sqrt{r^2-x^2}\\). Thus'} 
                    />
                    <MathView 
                        math={'A = 2x \\sqrt{r^2-x^2}'}
                    />
                    <MathText
                        style={{ alignSelf: 'flex-start'}}
                        value={'The domain of this function is \\(0 \\leq x \\leq r\\). Its derivative is'}
                    />
                    <MathView 
                        math={'A\\overset{,} = 2 \\sqrt{r^2-x^2} - \\frac{2x^2}{\\sqrt{r^2-x^2}} = \\frac{2(r^2-2x^2)}{\\sqrt{r^2-x^2}}'}
                    />
                    <MathText
                        style={{ alignSelf: 'flex-start'}}
                        value={'Which is \\(0\\) when \\(2x^2 = r^2\\), that is, \\(x = \\frac{r}{\\sqrt{2}}\\) (since \\(x \\geq 0\\)). This values of \\(x\\) gives a maximum value of \\(A\\) since \\(A(0) = 0\\) and \\(A(r) = 0\\). Therefore, the area of the largest inscribed rectangle is'}
                    />
                    <MathView 
                        math={'A = (\\frac{r}{\\sqrt{2}}) = 2 \\frac {r}{\\sqrt{2}} \\sqrt{r^2 - \\frac{r^2}{2}} = r^2'}
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

export default e3;