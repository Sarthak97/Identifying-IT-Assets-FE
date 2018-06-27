import React from 'react';

class Card extends React.Component
{
  	getDetails = () =>
  	{
  		this.props.fetchMachines()
  		fetch('http://localhost:3000/pwsh/'+this.props.ip)
      	.then(response => response.json())
      	.then(status => {
	        var res = {
	        	host: this.props.ip,
	        	info: status
	        }
	        this.props.func(res);
        });
  	}

  	errorMsg = () =>
  	{
  		alert("This machine is offline.");
  	}

	render()
	{
		let classes = "dib pa3 br3 ma2 grow bw2 shadow-5 ";
		if(this.props.status === "Online\n") 
			classes+="bg-light-green";
		else
			classes+="bg-light-red";
		return (
			<div className = {classes}>
				<p>Machine {this.props.name}</p>
				<p className ="b pointer link underline-hover" onClick={this.props.status === "Online\n" ? this.getDetails : this.errorMsg}>{this.props.ip}</p>
				<p>{this.props.status === "Online\n" ? "UP" : "DOWN"}</p>
			</div>
		);
	}
}
export default Card;