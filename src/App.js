import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import { useState } from 'react';
import UserPage from './pages/UserPage';

const PrivateRoute = (props) => {
    return props.isAuthenticated ? props.children : <LogIn />
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  onAuthStateChanged(auth, user => {
    if (user) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <BrowserRouter>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
            {/* TODO EG: Os components de signup and login nao consomem isAuthenticated. Entao, pq ta passando ele? */}
            <Route path={'/signup'} element={(
                <PrivateRoute isAuthenticated={isAuthenticated}>
                    <SignUp />
                </PrivateRoute>
            )} />
            <Route path={'/login'} element={(
                <PrivateRoute isAuthenticated={isAuthenticated}>
                    <LogIn />
                </PrivateRoute>
            )} />
            <Route path={'/user'} element={(
                <PrivateRoute isAuthenticated={isAuthenticated}>
                    <UserPage />
                </PrivateRoute>
            )} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
