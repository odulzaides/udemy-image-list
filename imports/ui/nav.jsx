import React from 'react';

class Nav extends React.Component {
    constructor(){
        super();

        this.handleHover();
    }

    // Drop menu down
    handleHover(){
        let elem = $('.nav li');
        let dropDown = $('.dropdown');
        elem.hover(()=> {
            dropDown.toggleClass('show-dropdown');
        });
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-brand">
                    <h2>Brand</h2>
                </div>
                <nav>
                    <ul className="main-menu">
                        <li ><a href="#">Blog</a></li>
                        <li><a href="#">Store</a>
                        <ul>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Gear</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Nav;