import './style.css';

import { h, Component } from 'preact';

function hide_navbar() {
    window.parent.postMessage('hide-navbar', '*');
}

function show_navbar() {
    window.parent.postMessage('show-navbar', '*');
}

export class NavbarController extends Component {
    render() {
        return <div className="navbar-controller">
                   <div id="hide_navbar" onClick={hide_navbar} className="navbar-controller-item">&lt;</div>
                   <div id="show_navbar" onClick={show_navbar} className="navbar-controller-item">&gt;</div>
               </div>
    }
}
