import { relative } from "path";
import { ThemeProvider } from "wiloke-react-core";
import { Employee } from "./features/Employee/Employee";
import Routes from "./routes";

function App() {
  return (
    <>
      <nav className="navbar is-info" style={{zIndex: 3, position: 'relative'}}>
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            React.JS Redux Toolkit with Typescript CRUD Sample
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
