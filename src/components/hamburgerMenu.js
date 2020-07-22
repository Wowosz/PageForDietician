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
                    <button class={this.state.opened === true ? "hamburger hamburger--active" : "hamburger"} onClick={this.handleClick}>
                        <span class="hamburger__box">
                            <span class="hamburger__inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="navigation">
  <ul class="navigation__list">
    <li class="navigation__item"><a href="">Lorem</a></li>
    <li class="navigation__item"><a href="">Ipsum</a></li>
    <li class="navigation__item"><a href="">Dolor</a></li>
    <li class="navigation__item"><a href="">Sit</a></li>
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