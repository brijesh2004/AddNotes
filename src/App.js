import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import AddNotes from './component/AddNotes';
import Home from './component/Home';
import Navbar from './component/Navbar';
import ErrorPage from './component/ErrorPage';
import ShowNotes from './component/ShowNotes';

function App() {
  return (
   <>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/addnotes' element={<AddNotes/>}></Route>
          <Route exact path='/shownotes' element={<ShowNotes/> }></Route>
          <Route exact path='*' element={<ErrorPage/>}></Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
