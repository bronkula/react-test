import React from 'react';

const ClickList = ({data,callback,delimiter}) => {
    return data
        .map(o=>(
            <span onClick={()=>callback({first:o})}>{o}</span>
        )).reduce((r,o)=>[r,delimiter,o])
}

export default ClickList;