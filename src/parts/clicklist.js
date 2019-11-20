import React from 'react';

const ClickList = ({data,callback}) => {
    return (<p style={{lineHeight: 2.4}}>
        {data.map(o=>(
            <span className="btn" onClick={()=>callback({first:o})}>{o}</span>
        )).reduce((r,o)=>[r," ",o])}
    </p>);
}

export default ClickList;