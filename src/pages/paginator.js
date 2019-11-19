import React from 'react';

import {
	Link,
	useRouteMatch
} from 'react-router-dom';

const Paginator = ({next,prev}) => {
	return (<div className="flex-parent">
		<div className="flex-none"><Link className="btn" to={prev[1]}>{prev[0]}</Link></div>
        <div className="flex-child">&nbsp;</div>
		<div className="flex-none"><Link className="btn" to={next[1]}>{next[0]}</Link></div>
	</div>)
}

const NextPrev = (p) => {
	let page = +useRouteMatch().path.split('/').slice(-1)[0];
    return (<Paginator prev={['Prev',p.path+'/'+(page-1||'')]} next={['Next',p.path+'/'+(page+1)]} />);
}

export {Paginator,NextPrev};