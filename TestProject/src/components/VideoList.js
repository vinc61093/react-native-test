import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { videoListFetch } from '../actions/VideoAction';
import { connect } from 'react-redux';
import VideoListItem from './VideoListItem';


class VideoList extends Component {
  constructor(props) {
      super(props);  
      this.state = {
      };
    }
    componentDidMount() {
      this.props.videoListFetch();
    }

    renderItem(video) {
      return <VideoListItem video={video} />;
    }

    render() {
      const { videoList } = this.props;
      // HAVE TO DO THIS API DON'T HAVE UNIQUE ID SO
      let videos = (typeof videoList.videoList.videos != "undefined")?videoList.videoList.videos:[];
      for(let i=0;i<videos.length;i++){
        videos[i].id = i.toString();
      }
      return(
        <FlatList
          data={videos}
          renderItem={this.renderItem}
          keyExtractor={(video) => video.id}
        />
      );
    }
}

const mapStateToProps = state => {
return { videoList: state };
};

export default connect(mapStateToProps, { videoListFetch })(VideoList);