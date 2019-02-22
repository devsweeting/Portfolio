import React from "react";
import Body from './Home/Body';
import AboutMe from './AboutMe/AboutMe';
import { Switch, Route } from 'react-router-dom';




class App extends React.Component{
    render(){
        return (
          <div>
<Switch>
<Route exact path='/' component={Body} />
<Route path='/about' component={AboutMe} />
</Switch>
          </div>
        );
    };
}

export default App;
