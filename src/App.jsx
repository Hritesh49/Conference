import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Error from './pages/Error';
import './App.css';
import Loader from './components/Loader';
import About from './pages/About';
import Imp from './pages/ImpDates';
import Comite from './pages/Comite';
import Speakers from './pages/Speakers';
import Papers from './pages/Papers';
import Tutorials from './pages/Tutorials';
import Contacts from './pages/Contacts';
import Awards from './pages/Awards';
import Venues from './pages/Venues';
import Sponsorship from './pages/Sponsorship';
import Authors from './pages/Authors';
import Registration from './pages/Registration';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  console.log('Rendering App component', isLoading);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/important-dates" element={<Imp />} />
              <Route path="/committees" element={<Comite />} />
              <Route path="/call-for-papers" element={<Papers />} />
              <Route path="/special-sessions" element={<Tutorials />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/authors" element={<Authors />} />
              <Route path="/sponsorship" element={<Sponsorship />} />
              <Route path="/speakers" element={<Speakers />} />
              <Route path="/venue" element={<Venues />} />
              <Route path="/fellowship" element={<Awards />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from './components/Layout';
// import Home from './pages/home';
// import Error from './pages/Error';
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import Loader from './components/Loader';


// function App() {
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 0);
//   }, []);
//   const isLoggedIn = window.localStorage.getItem("loggedIn");
//   return (
//     <>
//       {
//         isLoading ? (
//           <Loader />
//         ) : (
//           <Router>
//             <Routes>
//               <Route path="/" element={<Layout />}>
//                 <Route index element={<Home />} />
//                 <Route path="*" element={<Error />} />
//               </Route>
//             </Routes>
//           </Router>
//         )
//       }

//     </>

//   );
// }

// export default App;