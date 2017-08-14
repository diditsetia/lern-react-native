import React from 'react';
import {
  Text,
  View,
  Image,
  Linking,
 } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Buttom from './Buttom';

const AlbumDetail = ({data}) => {
  const {title,artist,thumbnail_image,image, url} = data;
  const {
    headerTextStyle,
    thumbnailStyle,
     headerContenStyle ,
     thumbnailContainerStyle,
     imageStyle,
   } = styles;
 return (
   <Card>
    <CardSection>
      <View style={thumbnailContainerStyle}>
        <Image
        style={thumbnailStyle}
         source={{uri: thumbnail_image }}
         />
      </View>
      <View style={headerContenStyle}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>
      <Image
      style={imageStyle}
      source={{uri: image }}
      />
    <CardSection>
      <Buttom onPress={() => Linking.openURL(url)} >
      Buy Now
      </Buttom>
    </CardSection>
   </Card>
 );
};

const styles  = {
  headerContenStyle: {
    flexDirection : 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle : {
    height: 50,
    width:50,
  },
  thumbnailContainerStyle :{
      justifyContent: 'center',
      marginLeft:10,
      marginRight:10,

  },
  imageStyle : {
    height: 300,
    width: null,
  }

};

// di bawah ini adalah cara ajaib menyingkat pengunaan props
// const AlbumDetail = ({data,name,nim}) => {
//  return (
//    <View>
//     <Text>{data.artist}</Text>
//     <Text>{name}</Text>
//     <Text>{nim}</Text>
//    </View>
//  );
// };
export default AlbumDetail;
