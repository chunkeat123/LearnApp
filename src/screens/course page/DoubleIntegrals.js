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
import image1 from '../../image/DoubleIntegrals.png'

const DoubleIntegrals = () => {
    const doubleIntegral = '\\int\\int_R f(x,y)dA = \\lim\\limits_{\\phantom{t}{\\scriptstyle m,n\\to \\infty}} \\sum\\limits_{\\substack{i=1}}^{m} \\sum\\limits_{\\substack{j=1}}^{n}f(x_{ij}^*, y_{ij}^*) \\Delta A';
    const fubini1 = 'R={ (x,y)|a \\leq x \\leq b,c \\leq y \\leq d}';
    const fubini2='\\int\\!\\!\\!\\int_{lower}^{upper} f(x,y) \\,dx\\,dy';
    return (
        <ScrollView sytle={styles.container}>
            <Text style={styles.title}>Double Integrals over Rectangles</Text>
            <Text style={styles.stitle}>The double integral off over the rectangle R is</Text>
            <MathView
                math={doubleIntegral}
            />
            <Image
                source={image1}
                resizeMode="contain"
                style={{width: 400, height: 300}}
            />

            <Text style={styles.stitle}>Fubini's Theorem</Text>
            <MathText
                color={'black'}
                value={'If \\(f\\) is continuous on the rectangle'}
            />
            <MathText
                value={'\\(R=\\{f(x,y)|a \\leq x \\leq b,c \\leq y \\leq d\\}\\)'} 
            />
            <Text>Then</Text>
            <MathView
                math={'{\\int\\int\\limits_{R}} f(x,y) dA = \\int_{a}^{b}\\int_{c}^{d}f(x,y) dy dx = \\int_{c}^{d}\\int_{a}^{b}f(x,y)dxdy'}
            />
            <MathText
                value={'More generally, this is true if we assume that \\(f\\) is bounded on \\(R\\), \\(f\\) is discontinuous only on a finite number of smooth curves, and the iterated integrals exist.'}
            />

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
        fontSize: 20,
        color:'black',
    },
    mathTxt: {
        fontSize: 15,
        color: 'black',
    }
});

export default DoubleIntegrals;