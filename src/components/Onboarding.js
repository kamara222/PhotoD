// import { StyleSheet, Text, View, FlatList, Animated, ScrollView } from 'react-native';
// import React, { useState, useRef } from 'react';

// import slides from '../../slides';
// import OnboardingItem from './Onboardingitem';
// import Paginator from './Paginator';

// const Onboarding = () => {

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const scrollx = useRef(new Animated.Value(0)).current;
//     const slidesRef = useRef(null);


//     const viewableItemesChanged = useRef(({ viewableItems }) => {
//         setCurrentIndex(viewableItems[0].index);
//     }).current;

//     const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

//     return (
//         <View style={styles.container}>
//             <ScrollView>
//             <View style={{flex:3, borderWidth:1,}}>
//             <FlatList
//                 data={slides}
//                 renderItem={({ item }) => <OnboardingItem item={item} />}
//                 horizontal
//                 showsHorizontalScrollIndicator={false} //masque le trait de defilement de la flatliste
//                 pagingEnabled
//                 bounces={false}
//                 keyExtractor={(item) => item.id}
//                 onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
//                     useNativeDriver: false,
//                 })}
//                 scrollEventThrottle={32}
//                 onViewableItemsChanged={viewableItemesChanged}
//                 viewabilityConfig={viewConfig}
//                 ref={slidesRef}
//             />
//             </View>
//             </ScrollView>
//             <View>
//                 <Text style={{}}>
//                     hello
//                 </Text>
//             </View>
//             <Paginator data={slides} scrollx={scrollx} />
            
//         </View>
//     )
// }

// export default Onboarding

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor:'#264653'
//     },
// });







import { StyleSheet, Text, View, FlatList, Animated, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import slides from '../../slides';
import OnboardingItem from './Onboardingitem';
import Paginator from './Paginator';

const Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollx = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const navigation = useNavigation();


    const viewableItemesChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false} //masque le trait de defilement de la flatliste
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollx } } }], {
                    useNativeDriver: false,
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemesChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />

            <View style={styles.bottomContainer}>
                <Paginator data={slides} scrollx={scrollx} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScrenn', { name: 'kamara' })}>
                    <Text style={styles.buttonText}>Continuer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#264653'
    },
    bottomContainer: {
        position: 'absolute',
        bottom: '4%',
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#2A9D8F',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 2,
        width:'70%',
        height:'50%', 
        alignItems:'center' ,
        justifyContent:'center', 
        bottom:'12%',
        padding:5
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});
