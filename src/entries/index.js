import React from 'react';
import ReactDOM from 'react-dom';


var injectTapEventPlugin = require("react-tap-event-plugin");   //

import { Home }  from   "../controller/Home.js"



import { NavigationRouter }  from   "../components"

injectTapEventPlugin();


export class App extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {


        const props = {
            rootView:  <Home tag="Home" > </Home>
        };
        return (
            <NavigationRouter {...props} />
        );
    }
}
ReactDOM.render(<App/>, document.querySelector("#root"));


