import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import { string, func } from 'prop-types';
import webRouter from './webRouter';
//const { history, location } = window;

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>
const CoffeeScript = () => <p>A programming language that transpiles into JavaScript, so we'll be redirecting there in 3.</p>

const Link = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log(props.to)
        webRouter.navigateTo(props.to);
        // history.pushState({}, null, `${props.to}`);
    }
    return (
        <div>
            <a href="" onClick={handleClick}>{props.children}</a>
        </div>
    )
}

Link.propTypes = {
    to: string.isRequired,
    children: string.isRequired
}

const Route = ({to, component}) => {
    if(webRouter.pathname === to)
    {
        return React.createElement(component)
    }
    return null;
}

Route.propTypes = {
    to: string.isRequired,
    component: func.isRequired
}

class App extends Component {
    constructor(props) {
        super(props);
        webRouter.subscribe(this.rerender);
    }
    rerender() {
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <Link to="/javascript">JavaScript</Link>
                <Link to="/haskell">Haskell</Link>
                <Link to="/coffeescript">CoffeeScript</Link>
                <hr/>
                <Route to="/javascript" component={JavaScript} />
                <Route to="/haskell" component={Haskell} />
                <Route to="/coffeescript" component={CoffeeScript} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));