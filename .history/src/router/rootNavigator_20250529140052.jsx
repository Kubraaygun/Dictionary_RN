import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const rootNavigator = () => {
  return (


    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Search"
        component={SearchScreen}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
  )
}

export default rootNavigator

const styles = StyleSheet.create({})