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
import Video from 'react-native-video';
import video from '../video/Limit.mp4';
import image1 from '../../image/Limits.png';

const Limit = () => {
    return (
        <ScrollView sytle={styles.container}>
            <Text style={styles.title}>Limits</Text>
            <Text style={styles.stitle}>Limit of Single Variable</Text>
            {/* <Text style={styles.mathTxt}>The limit of a function</Text> */}
            <MathText 
                //style={styles.mathTxt}
                value={'The limit of a function \\(f(x)\\) at a given point \\(x_0\\) is the value that the function approaches as \\(x\\) approaches \\(x_0\\). We denote such a limit'}
                
            />
            

            <MathView
                math={"\\lim\\limits_{\\phantom{t}{\\scriptstyle x\\to x_0}} f(x)"}
            />

            <MathText
                value={'The limit does not depend on the function value of \\(f\\) at \\(x_0\\) which may not even be defined.'}
            />
            <Text>
                {'\n'}
            </Text>
            <Text style={styles.stitle}>Limit of Multi Variable</Text>
            <MathText
                value={'Let \\(f\\) be a function of two variables whose domain \\(D\\) includes points arbitrarily close to \\((a,b)\\). Then we say that the limit of \\(f(x,y)\\) as \\((x,y)\\) approaches \\((a,b)\\) is \\(L\\) and we write'}
            />

            <MathView
                math={"\\lim\\limits_{\\phantom{t}{\\scriptstyle {(x,y)}\\to {(a,b)}}} f(x,y) = L"}
            />
            <MathText
                value={'if for every number \\(\\epsilon > 0\\) there is a corresponding number \\(\\delta > 0\\) such that if \\((x,y) \\in D\\) and \\(0 < \\sqrt{(x-a)^2+(y-b)^2} < \\delta\\) then \\(||f(x,y)-L|<\\epsilon\\)'}
            />

            <Image
                source={image1}
                resizeMode="contain"
                style={{width: 400, height: 300}}
            /> 

            <View>
                <Text style={styles.stitle}>Video:</Text>
                <Video
                    source={video}
                    controls={true}
                    style={{width: 400, height: 300}}
                    muted={false}
                    volume={100}
                    resizeMode="contain"   
                />
            </View>


                
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

export default Limit;

