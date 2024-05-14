import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScrenn from '../screens/HomeScrenn';
import WelcomeScreen from '../screens/welcomeScreen';
import Onboarding from '../components/Onboarding';
import OnboardingItem from '../components/Onboardingitem';
import Paginator from '../components/Paginator';

const Stack = createNativeStackNavigator();


function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScrenn" component={HomeScrenn} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="OnboardingItem" component={OnboardingItem} />
                <Stack.Screen name="Paginator" component={Paginator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default AppNavigation