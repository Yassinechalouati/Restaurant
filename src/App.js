import Home from './components/Home'
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Food_List from './components/Food_list'
import Statistics from './components/Statistics'
import './App.css'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>}/>
      <Route path="/Statistics" element={<Statistics></Statistics>}/>
      <Route path="/Food" element={<Food_List></Food_List>}/>
      <Route path="/Home" element={<Home></Home>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
