import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';

//Dummy content
const CONTENT = [
    {
        isExpand: false,
        category_name: 'Item 1',
        subcategory: [
            {id: 1, val: 'Sub 1'},
            {id: 2, val: 'Sub 2'}, 
        ]
    },
    {
        isExpand: false,
        category_name: 'Item 2',
        subcategory: [
            {id: 3, val: 'Sub 4'},
            {id: 4, val: 'Sub 5'}, 
        ]
    },
    {
        isExpand: false,
        category_name: 'Item 3',
        subcategory: [
            {id: 5, val: 'Sub 7'},
            {id: 6, val: 'Sub 8'}, 
        ]
    },
    {
        isExpand: false,
        category_name: 'Item 4',
        subcategory: [
            {id: 7, val: 'Sub 9'},
            {id: 8, val: 'Sub 10'}, 
        ]
    },
    {
        isExpand: false,
        category_name: 'Item 5',
        subcategory: [
            {id: 9, val: 'Sub 11'},
        ]
    }
];

const ExpandableComponent = ({item, onClickFunction}) => {
    const [layoutHeight, setlayoutHeight] = useState (0);

    useEffect(() => {
        if (item.isExpand) {
            setlayoutHeight(null);
        } else {
            setlayoutHeight(0);
        }
    }, [item.isExpand])

    return (
        <View>
            <TouchableOpacity
                style={styles.item}
                onPress={onClickFunction}
            >
                <Text style={styles.itemText}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: 'hidden'
                }}
            >
                {
                    item.subcategory.map((item, key) => (
                        <TouchableOpacity
                            key={key}
                            style={styles.content}
                        >
                            <Text style={styles.text}>
                                {key}.{item.val}
                            </Text>
                            <View style={styles.separator}/>
                        </TouchableOpacity>
                    ))
                }

            </View>
        </View>
    )
}

const CourseScreen = () => {
    const [multiSelect, setmultiSelect] = useState(false);
    const [listData, setlistData] = useState(CONTENT);

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listData];
        if (multiSelect) {
            //If multiple select is enabled
            array[index]['isExpand'] = !array[index]['isExpand'];
        } else {
            //If single select is enabled
            array.map((value, placeindex) => 
                placeindex === index
                ? (array[placeindex]['isExpand']) = !array[placeindex]['isExpand']
                : (array[placeindex]['isExpand']) = false
            );
        }
        setlistData(array)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titleText}>
                        Expandable List View
                    </Text>
                    <TouchableOpacity
                        onPress={() => setmultiSelect(!multiSelect)}
                    >
                        <Text style={styles.headerButton}>
                            {
                                multiSelect
                                ? 'Enable Single \n Expand'
                                : 'Enable Multiple \n Expand'
                            }
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {
                        listData.map((item, key) => (
                            <ExpandableComponent
                                key={item.category_name}
                                item={item}
                                onClickFunction={() => {
                                    updateLayout(key)
                                }}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        padding: 10
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    headerButton: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18
    },
    item:{
        backgroundColor: 'orange',
        padding: 20
    },
    itemText: {
        fontSize: 16,
        fontWeight: '500'
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 16,
        padding: 10
    },
    separator: {
        height: 0.5,
        backgroundColor: '#c8c8c8',
        width: '100%'
    }
});

export default CourseScreen;