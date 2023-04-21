import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ERS from './components/ERS';
import ReimbursementTable from './components/ReimbursementTable';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Routes, Route, Link } from "react-router-dom";
import ReimbursementForm from './components/ReimbursementForm';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="ers" element={<ERS />}>
          <Route path="list" element={<ReimbursementTable/>} />
          <Route path="create" element={<ReimbursementForm />} />
          <Route path="about" element={<About />} />
        </Route>
        
      </Routes>


    </div>
  );
}


function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/"></Link>
      </nav>
    </>
  );
}


export default App;
