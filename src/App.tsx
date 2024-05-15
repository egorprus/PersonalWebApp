import { useEffect } from "react";
import "./App.scss";
import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
      {/* <Router> */}
        <AuthProvider>
          <Header />
          <main className="main container">
						<Outlet />
            {/* <Routes>
               <Route path={DefaultUrls.auth} element={<Protected><AuthContent /></Protected>} />
							 <Route path={DefaultUrls.registration} element={<Registration />} /> */}
              {/*<Route
                path=":login"
                element={
                  <ProtectedRoute>
                    <PersonalPage />
                  </ProtectedRoute>
                }
              />
              
              <Route
                path="posts"
                element={
                  <ProtectedRoute>
                    <Posts />
                  </ProtectedRoute>
                }
              />
              <Route
                path="posts/create"
                element={
                  <ProtectedRoute>
                    <PostCreate />
                  </ProtectedRoute>
                }
              /> */}
              {/* <Route path={DefaultUrls.default} element={<Main />} />
            </Routes> */}
          </main>
          <Footer />
        </AuthProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;
