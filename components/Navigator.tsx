import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'
import { Appbar } from 'react-native-paper';

const Navigator = ({}) => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="home" component={HomeScreen} /> */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ 
                        title: 'Home',
                        headerStyle: {
                        backgroundColor: '#634B66',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        }}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
  }

export default Navigator

      {/* <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ 
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#634B66',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }}}
            />
        </Stack.Navigator>
      </NavigationContainer> */}


        // <Appbar.Header>
        {/* <Appbar.BackAction onPress={_goBack} /> */}
        // <Appbar.Content title="Title" subtitle="Subtitle" />
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
        // </Appbar.Header>