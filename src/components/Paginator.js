import { StyleSheet, useWindowDimensions, View, Animated } from 'react-native'
import React from 'react'

const Paginator = ({ data, scrollx }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={{ flexDirection: "row", height: 60 }}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const dotWidth = scrollx.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollx.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return <Animated.View style={[styles.dot, { width: dotWidth, opacity}]} key={i.toString()} />
            })}
        </View>
    )
}

export default Paginator

const styles = StyleSheet.create({
    dot: {
        height: 11,
        borderRadius: 10,
        backgroundColor: '#2A9D8F',
        marginHorizontal: 5,
    },
})