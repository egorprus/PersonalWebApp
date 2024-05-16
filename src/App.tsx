import { useEffect } from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";
import { RootState, useAppDispatch } from "./redux/store";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";
import { Header } from "./components/Templates/Header/Header";
import { Footer } from "./components/Templates/Footer/Footer";
import { startAuth } from "./redux/userSlice";
import { useSelector } from "react-redux";
import { UserStatus } from "./models/enums";
import { Spinner } from "./components/UIkit/Spinner/Spinner";

function App() {
  const dispatch = useAppDispatch();
  const { status } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      dispatch(startAuth(""));
    }
  }, []);

	if (status === UserStatus.loading) {
		return <Spinner />
	}

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
