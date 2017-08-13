import React from 'react';
import {Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
 return (
   <Card>
    <CardSection>
      <Text>{props.data.title}</Text>
    </CardSection>
   </Card>
 );
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
