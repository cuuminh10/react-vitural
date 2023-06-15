import { relative } from "path";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ThemeProvider } from "wiloke-react-core";
import { Employee } from "./features/Employee/Employee";
import Routes from "./routes";
import { RootState } from "./store";

function App() {
  const history = useHistory();
  const isLogin = useSelector(
    (state: RootState) => state.auth.isLogin
  );


  return (
    <>
      <nav className="navbar is-info" style={{zIndex: 3, position: 'relative'}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            Welcome to Vercel App
          </a>
        </div>
      </nav>
      <div className="container is-max-desktop">
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
