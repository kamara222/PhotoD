import { Image, PixelRatio, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



export default function  WelcomeScreen () {

  const ring1paddind = useSharedValue(0);
  const ring2paddind = useSharedValue(0);
  const ring3paddind = useSharedValue(0);

  const navigation = useNavigation();

  useEffect (()=>{
    ring1paddind.value = 0;
    ring2paddind.value = 0;
    ring3paddind.value = 0;
    setTimeout(()=> ring1paddind.value = withSpring(ring1paddind.value+hp(3.5)), 100);
    setTimeout(()=> ring2paddind.value = withSpring(ring2paddind.value+hp(4)), 200);
    setTimeout(()=> ring3paddind.value = withSpring(ring3paddind.value+hp(4.5)), 300)

    setTimeout(()=> navigation.navigate('Onboarding'),2500)
  },[])

  return (
    <View  style={{flex: 1,justifyContent: 'center',alignItems: 'center', paddingVertical: 40,backgroundColor: '#264653',}}>
      <StatusBar style='light' />

      {/* logo image whith rings */}
      <Animated.View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',borderRadius: 999, padding: ring3paddind}}>
        <Animated.View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',borderRadius: 999, padding: ring2paddind}}>
        <Animated.View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)',borderRadius: 999, padding: ring1paddind}}>
            <Image source={require('../../assets/image/1.jpg')} 
            style={{width:hp(21), height:hp(21), borderRadius:999}} />
            </Animated.View>
        </Animated.View>
      </Animated.View>

      {/* title and punshline */}
      <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between', marginVertical: 10,top: '20%',}}>
        <Text style={{fontWeight: 'bold',color: 'white',letterSpacing: 2,fontSize:hp(6)}}>Bienvenue</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})