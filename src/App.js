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
          <Route  path='/' element={<Home/>}></Route>
          <Route  path='/addnotes' element={<AddNotes/>}></Route>
          <Route  path='/shownotes' element={<ShowNotes/>}></Route>
          <Route  path='*' element={<ErrorPage/>}></Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
