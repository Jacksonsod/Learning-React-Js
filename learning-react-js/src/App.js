import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Aboutus from './Aboutus';


function App(){
     return(
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/aboutus' element={<Aboutus />}/>
        
        </Routes>
      </Router>

     );

}
export default App;