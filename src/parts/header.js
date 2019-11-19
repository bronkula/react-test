import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
    <header className="navbar">
        <div className="container flex-parent">
            <div className="flex-child">
                <h1>{props.title}</h1>
            </div>
            <nav className="nav flex-none">
                <ul>{
                    props.children.map((o,i)=>(
                        <li key={i}>{o}</li>
                    ))
                }</ul>
            </nav>
        </div>
    </header>
    )
}

export default Header;