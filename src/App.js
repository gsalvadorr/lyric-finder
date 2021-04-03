import './App.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import {BrowserRouter as Router, Route, Switch,HashRouter} from 'react-router-dom'
import {Provider} from './context'
import Lyrics from './components/tracks/Lyrics';

function App() {
  return (
    <Provider>
    <HashRouter>
      
      <Navbar/>
      <div className="container">

        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route exact path="/lyrics/track/:id" component={Lyrics}></Route>
        </Switch>
      </div>

    </HashRouter>
    </Provider>
  );
}

export default App;
