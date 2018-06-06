import React, {Component} from 'react';

const Card = (props) => {
	return (
		<div className = "bg-light-green dib pa3 br3 ma2 grow bw2 shadow-5">
		<h4>This is a machine.</h4>
		<p>{props.name}</p>
		<p>{props.ip}</p>
		</div>
	);
}

export default Card;