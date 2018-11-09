import React, { Component } from 'react';
import { connect } from 'react-redux';
import Video from 'react-native-video';
import { Text, View, Image, TouchableOpacity, Share } from 'react-native';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';
import * as actions from '../actions';

// const shareOptions = {
//   title: 'Title',
//   message: 'Message to share',
//   url: 'www.example.com',
//   subject: 'Subject'
// };

class VideoListItem extends Component {

	renderVideo() {
		if(this.props.video.item.id == this.props.selectedVideo) {
			const url = this.props.video.item.video_url;
			return (
				<Video source={{uri: url}}
      	 ref={(ref) => {
         this.player = ref
					 }}
					onBuffer={this.onBuffer}
					onError={this.videoError}
					style={styles.backgroundVideo}
				/>
			);
		}
	}

 shareOptions = {
		title: 'Title',
		message: 'Message to share',
		url: this.props.video.item.video_url,
		subject: 'Subject'
	};

	onSharePress = () => Share.share(this.shareOptions);

	render() {
	const { title, thumbnail_url, video_url, id } = this.props.video.item;
	const { headerContentStyle, headerTextStyle, imageStyle } = styles;
		return (
			<TouchableOpacity onPress={() => this.props.selectVideo(id)}>
			<Card>
				<CardSection>
					<View style={headerContentStyle}>
						<Text style={headerTextStyle}>{title}</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image
						style={imageStyle}
						source={{ uri: thumbnail_url }}
					/>
				</CardSection>

				<View style={styles.videoContainer}>
				{this.renderVideo()}
				</View>

				<CardSection>
					<Button onPress={this.onSharePress}>
						Share
					</Button>
				</CardSection>
			</Card>
			</TouchableOpacity>
		);
	}
}


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
	},
	backgroundVideo: {
    height:300,
		width:'100%',
	},
	videoContainer: {
    flex: 1,
    backgroundColor: 'black',
},
};

const mapStateToProps = (state) => {
  return { selectedVideo: state.selectVideo };
};

export default connect(mapStateToProps, actions)(VideoListItem);