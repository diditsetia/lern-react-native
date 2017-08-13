// import library for making a Component
import React from 'react';
import {
  Text,
  View,
}from 'react-native';

// Make a Component
const Header = (props) => {
  const { textStyle,viewStyle} = styles;

  return (
  <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
  </View>
) ;
};

const styles = {
  viewStyle : {
    backgroundColor: '#F8F8F8',
    justifyContent:'center',
    alignItems: 'center',
    height : 60,
    paddingTop: 5,
    shadowColor:'#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    borderBottomColor:'#ddd',
    borderBottomWidth:1,
    shadowRadius: 2,
    elevation: 2,


  },

  textStyle : {
    fontSize: 20
  }
};
// Makethe Component avaiable to other parts of the app
export default Header;
