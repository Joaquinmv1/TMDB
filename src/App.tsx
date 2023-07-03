import { Footer, Navbar } from "./components";
import { Route, useLocation } from "react-router-dom"
import { Home, Detail, Login, ShowSearchView, } from "./pages";
import { AuthProvider } from "./context/Auth";
import { RouteWithNotFound } from "./utils/RouteWithNotFound";

function App() {
  const location = useLocation();

  return (
    <>
      <AuthProvider>
        {location.pathname !== '/movies' && <Navbar />}
        <RouteWithNotFound>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/:type/:id' element={<Detail />} />
          <Route path='/movies' element={<ShowSearchView />} />
        </RouteWithNotFound>
        {/* <Footer /> */}
      </AuthProvider>
    </>
  );
}

export default App;