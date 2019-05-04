import React from "react";
import { View, Text } from "react-native";
import { white, black } from "ansi-colors";

class App extends React.Component
{
    render()
    {
      return(
        <View style = {style.MainWrapper}>
          <View style = {style.AppWrapper}>
            <Text style = {style.AppTitle}>Project Reminder</Text>
          </View>
        </View>
      )
    }
}

const style = 
{
  MainWrapper:
  {
    flex : 1,
    backgroundColor: '#000',
    flexWrap: 'wrap',
  },
  AppWrapper:
  {
    alignItems : 'center',
    justifyContent : 'center',
  },
  AppTitle:
  {
    marginTop : 30,
    color : '#FFF',
    fontSize : 30,
    fontWeight : 'bold',
    alignItems : "center",
    justifyContent : "center",
  },
}

export default App;