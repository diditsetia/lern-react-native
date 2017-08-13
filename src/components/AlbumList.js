import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
  state = {
    albums: []
  };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map((album,index) =>
    <AlbumDetail key= {index} data={album} />
  );
  }
// cara ribet memangil componen lain di dalam satu class
  // renderAlbums() {
  //   return this.state.albums.map((album,index) => {
  //     console.log(album);
  //       return (
  //         <Text key = {index}>{album.title}</Text>
  //     )
  //   })
  // }

  render() {
    console.log(this.state);

    return(
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
