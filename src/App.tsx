import { BrowserRouter, Route } from "react-router-dom";
import { Router } from "./router";
import { Navbar } from "./components/organisms/Navbar";
import { Order } from "./pages/order";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div>
        <div className="">
          <Navbar />
        </div>

        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
