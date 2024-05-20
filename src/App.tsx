import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Store } from "./pages/Store"
import { Navbar } from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import {useEffect, useState} from "react";
import {jwtDecode} from "jwt-decode";
import Login from "./pages/Login";

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    useEffect(() => {
        setToken(localStorage.getItem('token'));
        if (token) {
            const decodedToken = jwtDecode(token);
            const currentTime = Date.now() / 1000;

            // @ts-ignore
            if (decodedToken.exp < currentTime) {
                localStorage.removeItem('token');
                setToken(null);
            }
        }
    }, [token]);

  return (
    <ShoppingCartProvider>
        {token && (
            <div>
                <Navbar />
                <Container className="mb-4">
                    <Routes>
                        <Route path="/" element={<Store />} />
                    </Routes>
                </Container>
            </div>
            )}
        {!token && (
        <Login/>
            )}
    </ShoppingCartProvider>
  )
}

export default App
