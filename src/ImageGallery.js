import React, { Component } from "react";

import ImageCard from "./ImageCard"

export default class ImageGallery extends Component {
	
	render() {
		const cards = this.props.imageCards.map( (elm) => 
			<ImageCard key = {elm.id} imageItem = {elm} />
		)
		
		let index = 0
		const incrIndex = () => {
			index += 3
		}
		
		return (
			<section className="thumbnails">
				<div>
					{cards.slice(index,index+3)}
					{incrIndex()}
				</div>

				<div>
					{cards.slice(index,index+3)}
					{incrIndex()}
					
				</div>

				<div>
					{cards.slice(index,index+3)}
					{incrIndex()}
				</div>
			</section>
		);
	}
}
