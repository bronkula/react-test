import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
    <header className="navbar">
        <div className="container flex-parent">
            <div className="flex-child">
                <h1>{props.title}</h1>
            </div>
            

            <input type="checkbox" className="hidden" id="nav-menu" />
            <label for="nav-menu">&equiv;</label>

            <nav className="nav flex-none">
                <ul>
                    {props.children.map((o,i)=>(<li key={i}>{o}</li>))}
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header;