import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Food_List from './components/Food_list'
import Admin from './components/Admin'
import Login from './components/login'
import Landingpage from './components/landing_page'
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Login></Login>}/>
      <Route path="/Admin creation" element={<Admin></Admin>}/>
      <Route path="/Food" element={<Food_List></Food_List>}/>
      <Route path="/Login" element={<Login></Login>}></Route>
      <Route path="/Landing_Page" element={<Landingpage></Landingpage>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
