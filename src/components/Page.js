import React from 'react';
import Info from './Info';

class Page extends React.Component
{

	render()
	{
		var display = this.props.info.info.map((val,i)=>
			<Info key = {i} name = {i} value = {val} />
		);
		return(
		<div>
	    	<h1>{this.props.info.host}</h1>
	        <div>{display}</div>
	    </div>
	    );
	}
}

export default Page;