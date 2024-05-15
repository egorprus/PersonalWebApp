import { useEffect } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "./redux/store";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";
import { Header } from "./components/Templates/Header/Header";
import { Footer } from "./components/Templates/Footer/Footer";
import { startAuth } from "./redux/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
			console.log(1)
			dispatch(startAuth(''));
    }
  }, []);

  return (
    <div className="App">
        <AuthProvider>
          <Header />
          <main className="main container">
						<Outlet />
          </main>
          <Footer />
        </AuthProvider>
    </div>
  );
}

export default App;
