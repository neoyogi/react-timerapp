let React = require('react');
let {Link, IndexLink} = require('react-router');
let {Menu, MenuItem, TopBar, TopBarLeft, TopBarRight, MenuText} = require('react-foundation');

let Navigation = () => {
    "use strict";
    return(
        <div>
            <TopBar>
                <TopBarLeft>
                    <Menu>
                        <MenuText>React Timer App</MenuText>
                        <MenuText><Link activeClassName="active-link" to="/timer" >Timer</Link></MenuText>
                        <MenuText><Link activeClassName="active-link" to="/countdown" >Countdown</Link></MenuText>
                    </Menu>
                </TopBarLeft>
                <TopBarRight>
                    <Menu>
                        <MenuText> Created By Yogesh</MenuText>
                    </Menu>
                </TopBarRight>
            </TopBar>
        </div>
    )
};
module.exports = Navigation;
