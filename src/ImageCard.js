import React, { Component } from "react";

export default class ImageCard extends Component {
	render() {
		const item = this.props.imageItem;
		return (
				<a href={item.fullImageUrl}>
					<img src={item.thumbsImageUrl} alt="" />
					<h3>{item.footnote}</h3>
				</a>


		);
	}
}
