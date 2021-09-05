import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Router";
import GlobalContextProvider from "./utilities/context/context";
import "./App.css";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <GlobalContextProvider>
                    <Routes />
                </GlobalContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
