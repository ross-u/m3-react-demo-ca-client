import './App.css';
import { Switch, Route } from 'react-router-dom';
import ProjectList from './pages/ProjectList/ProjectList';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'; 
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>																												{/* ADD */}
        <Route exact path="/projects" component={ProjectList}/>
        <Route exact path="/projects/:id" component={ProjectDetails} />       {/* ADD */}
      </Switch>
    </div>
  );
}

export default App;
