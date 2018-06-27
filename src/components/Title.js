import React from 'react';

const Title = ({isSignedIn, onRouteChange, hasInfo}) => {
	return (
		<div>
			{ (isSignedIn && hasInfo)
				?<nav className="dt w-100 border-box pa3 ph5-ns">
					<p className="tl dtc v-mid mid-gray link dim w-25 pointer" onClick = {() => onRouteChange('home')}>Go Back</p> 
					<p className="tr dtc v-mid mid-gray link dim w-25 pointer" onClick = {() => onRouteChange('signout')}>Sign Out</p>
				</nav>
				: isSignedIn
				? <nav className="dt w-100 border-box pa3 ph5-ns">
					<p className="tr dtc v-mid mid-gray link dim w-25 pointer" onClick = {() => onRouteChange('signout')}>Sign Out</p>
				</nav>
				:<nav className="dt w-100 border-box pa3 ph5-ns">
					<p className="tr dtc v-mid mid-gray link dim w-25 pointer" onClick = {() => onRouteChange('signin')}>Sign In</p>
				</nav>
			}
			<h1 className = "f2 f2-m f-subheadline-l fw6 tc black b tc">Identifying IT assets in a Network</h1>
		</div>
	);
}

export default Title;