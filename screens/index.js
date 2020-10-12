import React from 'react';
import Screen from './Screens';


export const ProfileScreen = ({navigation}) => <Screen navigation={navigation} name="Dashboard"/>
export const DashboardScreen = ({navigation}) => <Screen navigation={navigation} name="Dashboard"/>
export const Arrival_NoteScreen = ({navigation}) => <Screen navigation={navigation} name="Arrival_Note"/>
export const Arrival_DetailsScreen = ({navigation}) => <Screen navigation={navigation} name="Arrival_Details"/>
export const LogoutScreen = ({navigation}) => <Screen navigation={navigation} name="Logout"/>