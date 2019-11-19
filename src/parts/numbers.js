import React from 'react';


const NumberList = ({data}) => {
	return (<ul>
		{data.map((o,i)=>
			<NumberItem key={i} data={o} />
		)}
	</ul>);
}

const NumberItem = ({data}) => {
	return (<li>{data}</li>);
}

export default NumberList;