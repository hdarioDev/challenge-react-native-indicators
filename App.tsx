import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation'
import { PermissionsProvider } from './src/context/PermissionsContext';

const AppState = ({ children }: any) => {

  return (
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )

}

const App = () => {
  // const { top } = useSafeAreaInsets()

  return (
    <NavigationContainer>
      <AppState>
        <StackNavigation />
      </AppState>
    </NavigationContainer>
  )
}

export default App