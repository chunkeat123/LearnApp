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
import image1 from '../../image/MaxAndMin.png'

const page = () => {
    return (
        <ScrollView>
            <Text>
                Maximum and Minimum Values
            </Text>    
            <MathText
                color={'black'}
                value={'A function of two variables has a local maximum at \\((a,b)\\) if \\(f(x,y) \\leq f(a,b)\\) when \\((x,y)\\) is near \\((a,b)\\). [This means that \\(f(x,y) \\leq f(a,b)\\) for all points \\((x,y)\\) in some disk with center \\((a,b)\\).] The number \\(f(a,b)\\) is called a local maximum value. If \\(f(x,y) \\req f(a,b)\\) when \\((x,y)\\) is near \\((a,b)\\), then \\(f\\) has a local minimum at \\((a,b)\\) and \\(f(a,b)\\) is a local minimum value.'}
            />
            <Image
                source={image1}
                resizeMode="contain"
                style={{width: 400, height: 300}}
            /> 
            <MathText
                color={'black'}
                value={'Let \\((a,b)\\) be a point in the domain \\(D\\) of a function \\(f\\) of two variables. Then \\(f(a,b)\\) is the'}
            />
            <MathText
                color={'black'}
                value={'1) absolute maximum value of \\(f\\) on \\(D\\) if \\(f(a,b) \\geq f(x,y)\\) for all \\((x,y)\\) in \\(D\\).'}
            />
            <MathText
                color={'black'}
                value={'2) absolute maximum value of \\(f\\) on \\(D\\) if \\(f(a,b) \\leq f(x,y)\\) for all \\((x,y)\\) in \\(D\\).'}
            />


                
                
            
        </ScrollView>
    );
};

export default page;