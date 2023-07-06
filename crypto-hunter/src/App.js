import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepgae";
import Coin from "./pages/Coin";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#000000",
    color: "#fff",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} exact />
          <Route path="/coins/:id" Component={Coin} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
