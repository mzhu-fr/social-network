import './App.css';
import Header from './components/navbar/navbar';
import ErrorPage from './components/errorPage/errorPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (

    <Router>
      <Routes>
        
        <Route
          path="/"
            element={
              <>
                <Header />
              </>
            }
        />

        <Route
          path="*"
          element={
            <> 
              <Header />
              <ErrorPage />
            </>
          }
        />

      </Routes>
    </Router>

  )
}

export default App;
