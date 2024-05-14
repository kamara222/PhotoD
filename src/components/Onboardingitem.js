import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';

const OnboardingItem = ({ item }) => {
    const { width, height } = useWindowDimensions();

    return (
        <View style={[styles.container, { width, height }]}>
            <Image source={item.image} style={[styles.image, { width: '90%', height: '50%',}]} />

            <View style={{ flex: 0.2,top: '3%', }}>
                <Text style={styles.title}>{item.title}</Text>
                {/* <Text style={styles.description}>{item.description}</Text> */}
            </View>
        </View>
    )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    image: {
        justifyContent: 'center',
        borderRadius:70
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
});
