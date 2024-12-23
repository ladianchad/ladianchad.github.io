import {Route, Router} from 'wouter';
import Navigator from "./components/Navigator";
import Home from "./pages/home/Home";

const App = () => {
    return <Router>
        <Navigator/>
        <Route path="/" component={Home}/>
        <Route path="/cv" component={Home}/>
        <Route path="/projects" component={Home}/>
    </Router>
}

export default App
