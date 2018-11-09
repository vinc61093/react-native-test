import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';
import { Button } from './common/Button';


class VideoListItem extends Component {

	onButtonPress(video_url) {
		console.log('vicod', video_url)
	}

	render() {
	const { title, thumbnail_url, video_url } = this.props.video.item;
	const { headerContentStyle, headerTextStyle, imageStyle } = styles;
		return (
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

				<CardSection>
				</CardSection>
			</Card>
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
  }
};

export default VideoListItem;