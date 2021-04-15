import 'assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import landingPage from 'pages/LandingPage'


function App() {
  return (
    <div className="App">
     <Router>
       <Route path="/" component={landingPage}></Route>
     </Router>
    </div>
  );
}

export default App;
