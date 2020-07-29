import React from "react";
import "../styles/hamburgerMenu.css";

class HamburgerMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {opened: false};
    }
    render() {
        return(
            <div>
            <div className={this.state.opened === true ? "d-flex leftSide" : "d-flex rightSide"}>
                <div>
                    <button className={this.state.opened === true ? "hamburger hamburger--active" : "hamburger"} onClick={this.handleClick}>
                        <span className="hamburger__box">
                            <span className="hamburger__inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className={this.state.opened === true ? "navigation navigation--active" : "navigation"}>
  <ul className="navigation__list pb-5">
    <li className="navigation__item pt-5"><a href="">Lorem</a></li>
    <li className="navigation__item"><a href="">Ipsum</a></li>
    <li className="navigation__item"><a href="">Dolor</a></li>
    <li className="navigation__item"><a href="">Sit</a></li>
  </ul>
</div>
            </div>
        );
    }

    handleClick = () => {
        this.state.opened === false ? this.setState({opened: true}) : this.setState({opened: false});
    }
}

export default HamburgerMenu;