import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/homePage/homePage';
import ErrorPage from './components/errorPage/errorPage';

function AppRoutes() {
    return (
  
      <Router>
        <Routes>
          
          <Route
            path="/"
              element={
                <Home />
              }
          />
  
          <Route
            path="*"
            element={
              <ErrorPage />
            }
          />
  
        </Routes>
      </Router>
  
    )
  }
  
  export default AppRoutes;
  