import React from 'react';

class Nav extends React.Component {
    constructor() {
        super();

        this.handleHover();
    }

    // Drop menu down
    handleHover() {
        let elem = $('.nav li');
        let dropDown = $('.dropdown');
        elem.hover(() => {
            dropDown.toggleClass('show-dropdown');
        });
    }
    render() {
        return (
            <div className="navbar">
                <div className="nav-brand">
                    <h2>Brand</h2>
                </div>
                <div className="nav">
                    <ul>
                        <li className="sub-menu-parent">
                            <a href="#">Menu Item 1</a>
                            <ul className="sub-menu">
                                <li><a href="#">Sub Item 1</a></li>
                                <li><a href="#">Sub Item 2</a></li>
                                <li><a href="#">Sub Item 3</a></li>
                                <li><a href="#">Sub Item 4</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu-parent"><a href="#">Menu Item 2</a>
                            <ul className="sub-menu">
                                <li><a href="#">Sub Item 1</a></li>
                                <li><a href="#">Sub Item 2</a></li>
                                <li><a href="#">Sub Item 3</a></li>
                                <li><a href="#">Sub Item 4</a></li>
                                <li><a href="#">Sub Item 5</a></li>
                                <li><a href="#">Sub Item 6</a></li>
                            </ul>
                        </li>
                        <li className="sub-menu-parent"><a href="#">Menu Item 3</a>
                            <ul className="sub-menu">
                                <li><a href="#">Sub Item 1</a></li>
                                <li><a href="#">Sub Item 2</a></li>
                            </ul></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Nav;