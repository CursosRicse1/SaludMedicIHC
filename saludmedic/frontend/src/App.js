import { BrowserRouter ,Route  , Routes} from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';

import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';

function App() {

  return (
    <BrowserRouter>
   
     <header>
       <Layout/>
    
     </header>
   
      <main>
        <Routes>
        <Route path="/" element={<HomeScreen/>}></Route>
        <Route path="/login" element={<SigninScreen/>}></Route>
        </Routes>
        </main> 
    
    

    </BrowserRouter>
  );
}

export default App;
