import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import GradingSystem from '../Components/GradingSystem';
import SemesterGpaScreen from '../Components/SemesterGpa';
import CumulativeGpa from '../Components/CumulativeGpa';
import ContactUs from '../Components/ContactUs';
import FAQScreen from '../Components/FAQScreen';
import ExitScreen from '../Components/ExitScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SideBar from './SideBar';
import SplashScreen from 'react-native-splash-screen';

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      headerLayoutPreset="left"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="SemesterGpa"
        component={SemesterGpaScreen}
        options={({navigation}) => ({
          headerTitle: 'GPA Calculator',
          headerTitleAlign: 'left',
          headerTitleStyle: {color: 'white', marginLeft: 30},
          headerStyle: {backgroundColor: '#41916c'},
          headerShown: true,
          headerLeft: () => (
            <View>
              <Icon
                onPress={() => navigation.toggleDrawer()}
                name="menu"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
          headerRight: () => (
            <View>
              <Image
                source={require('../Assets/images/kk.png')}
                resizeMode="contain"
                style={{width: 60, height: 60}}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="GradingSystem"
        component={GradingSystem}
        options={({navigation}) => ({
          headerTitle: 'Grading Screen',
          headerTitleAlign: 'left',
          headerShown: true,
          headerLeft: () => (
            <View>
              <IonIcon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="CumulativeGpa"
        component={CumulativeGpa}
        options={({navigation}) => ({
          headerTitle: 'CGPA',
          headerTitleAlign: 'left',
          headerTitleStyle: {color: 'white', marginLeft: 30},
          headerStyle: {backgroundColor: '#41916c'},
          headerShown: true,
          headerLeft: () => (
            <View>
              <IonIcon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="FAQScreen"
        component={FAQScreen}
        options={({navigation}) => ({
          headerTitle: 'Grading Screen',
          headerTitleAlign: 'left',
          headerShown: true,
          headerLeft: () => (
            <View>
              <IonIcon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const FAQStack = createNativeStackNavigator();
function FaqStack() {
  return (
    <FAQStack.Navigator>
      <FAQStack.Screen
        name="FaqScreen"
        component={FAQScreen}
        options={({navigation}) => ({
          title: 'FAQs',
          headerTitle: 'FAQs',
          headerTitleAlign: 'left',
          headerTitleStyle: {color: 'white', marginLeft: 30},
          headerStyle: {backgroundColor: '#41916c'},
          headerShown: true,
          headerLeft: () => (
            <View>
              <IonIcon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
        })}
      />
    </FAQStack.Navigator>
  );
}

const GradeStack = createNativeStackNavigator();
function GradingStack() {
  return (
    <GradeStack.Navigator>
      <GradeStack.Screen
        name="GradeSystem"
        component={GradingSystem}
        options={({navigation}) => ({
          title: 'Grading Policy',
          headerTitle: 'Grading Policy',
          headerTitleAlign: 'left',
          headerTitleStyle: {color: 'white', marginLeft: 30},
          headerStyle: {backgroundColor: '#41916c'},
          headerShown: true,
          headerLeft: () => (
            <View>
              <IonIcon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
        })}
      />
    </GradeStack.Navigator>
  );
}

const ContactUsStack = createNativeStackNavigator();
function ContactStack() {
  return (
    <ContactUsStack.Navigator>
      <ContactUsStack.Screen
        name="ContactUs"
        component={ContactUs}
        options={({navigation}) => ({
          title: 'About Us',
          headerTitle: 'Contact Us',
          headerTitleAlign: 'left',
          headerTitleStyle: {color: 'white', marginLeft: 30},
          headerStyle: {backgroundColor: '#41916c'},
          headerShown: true,
          headerLeft: () => (
            <View>
              <IonIcon
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={25}
                color="white"
                style={{marginRight: 20}}
              />
            </View>
          ),
        })}
      />
    </ContactUsStack.Navigator>
  );
}

function DrawerStack() {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => (
          <View style={{backgroundColor: 'white', flex: 1}}>
            <SideBar {...props} />
          </View>
        )}
        drawerStyle={{
          drawerBackgroundColor: '#41916c',
          drawerText: 'white',
        }}
        screenOptions={{
          drawerStyle: {backgroundColor: '#41916c'},
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#41916c',
          drawerInactiveBackgroundColor: 'transparent',
          drawerLabelStyle: {color: 'white'},
          drawerIcon: 'white',
          drawerInactiveTintColor: 'white',
          headerShown: false,
          headerTitleAlign: 'center',
        }}>
        {/* Define your drawer screens */}
        <Drawer.Screen
          name="SemesterGp"
          component={HomeStack}
          options={{
            title: 'Home',
            drawerIcon: ({color}) => (
              <MaterialIcon name="home" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="GradeSys"
          component={GradingStack}
          options={{
            title: 'Grading System',
            drawerIcon: ({color}) => (
              <MaterialIcon name="grading" size={25} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="FaQScreen"
          component={FaqStack}
          options={{
            title: 'FAQs',
            drawerIcon: ({color}) => (
              <Icon
                name="ios-information-circle-outline"
                size={25}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Contactus"
          component={ContactStack}
          options={{
            title: 'About Us',
            drawerIcon: ({color}) => (
              <IonIcon name="person" size={23} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ExitScreen"
          component={ExitScreen}
          options={{
            title: 'Exit',
            drawerIcon: ({color}) => (
              <Icon name="exit-outline" size={30} color={color} />
            ),
          }}
        />
        {/* Add more screens if needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 200,
    // position: 'absolute',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default DrawerStack;
