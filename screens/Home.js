import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import DashboardScreen from './screens/DashboardScreen';
import RootStackScreen from './screens/RootStackScreen';
import Arrival_DetailsScreen from './screens/Arrival_DetailsScreen';
import Arrival_NoteScreen from './screens/Arrival_NoteScreen';
import LogOutScreen from './screens/SignUpScreen';
import {DrawerContent} from './screens/SideBar';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from './components/context';
import { TouchableOpacity } from 'react-native-gesture-handler';


import { FontAwesome5 } from '@expo/vector-icons';
// import Home from './screens/Home';

 
const Drawer = createDrawerNavigator();
const DashboardStack = createStackNavigator();

const DashboardStackScreen = ({navigation}) => (
    <DashboardStack.Navigator screenOptions={{ headerStyle:{ 
      backgroundColor:'#b3aaa3',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
    }}>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} options={{
            headerLeft:() =>(
              <TouchableOpacity style={{alignItems:"flex-end",margin:16 }} 
             >
                 <FontAwesome5 name="bars" size="24" color="#261f0e"
                 onPress={() => navigation.openDrawer()}/>
                 
             </TouchableOpacity>
            )
            }} />
                </DashboardStack.Navigator>
 );
 
 const Arrival_NoteStack = createStackNavigator();

const Arrival_NoteStackScreen = ({navigation}) => (
    <Arrival_NoteStack.Navigator screenOptions={{ headerStyle:{ 
      backgroundColor:'#b3aaa3',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
    }}>
      <Arrival_NoteStack.Screen name="Arrival Note" component={Arrival_NoteScreen} options={{
            headerLeft:() =>(
              <TouchableOpacity style={{alignItems:"flex-end",margin:16 }} 
             >
                 <FontAwesome5 name="bars" size="24" color="#261f0e"
                 onPress={() => navigation.openDrawer()}/>
                 
             </TouchableOpacity>
            )
            }} />
                </Arrival_NoteStack.Navigator>
 );
 



const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 



  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      setUserToken('fgkj');
      setIsLoading(false);
      
    },
    signOut: async() => {
      setUserToken(null);
      setIsLoading(false);
      
    },
    signUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
     }
 
  }), []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      
    }, 1000);
  }, []);


  if(isLoading) {
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator size='large'  />
    </View>
  }
  
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      { userToken !== null ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Dashboard" component={DashboardStackScreen} />
        <Drawer.Screen name="Arrival Note" component={Arrival_NoteStackScreen} />
        <Drawer.Screen name="Arrival Details" component={Arrival_DetailsScreen} />
        <Drawer.Screen name="Logout" component={LogOutScreen} />
        </Drawer.Navigator>
      )
    :
      <RootStackScreen/>
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;

  
  
