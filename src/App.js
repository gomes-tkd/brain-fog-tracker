import 'bootstrap/dist/css/bootstrap.min.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import LogIn from "./pages/LogIn";
import { useState } from "react";
import UserPage from "./pages/UserPage";

const PrivateRoute = (props) => {
    return props.isAuthenticated ? props.children : <LogIn />
};

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // TODO EG tem que estar no primeiro nivel, pq eh um "listener" pro estado da authenticacao.
    // vc quer que toda a vez que ela mudar, ele fique sabendo, entao nao faz sentido colocar num useEffect
    // na verdade, tanto faz, mas, assim fica mais natural (tipo, pq complicar se da pra ser mais simples?)

        onAuthStateChanged(auth, user => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });

  return (
    <BrowserRouter>
        <Header isAuthenticated={isAuthenticated}/>
        <Routes>
            <Route path={'/signup'} element={<SignUp />} />
            <Route path={'/login'} element={<LogIn />} />
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
