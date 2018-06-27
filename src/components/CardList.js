import React from 'react';
import Card from './Card';

const CardList = ({seed, func, fetchMachines}) => {

	const cardComponent = seed.map((machine, i) =>
		<Card key = {i} name = {i} ip = {seed[i].host} status = {seed[i].alive} func = {func} fetchMachines= {fetchMachines}/>
		);
	return (
		<div>
          {cardComponent}
        </div>
	);
}

export default CardList;