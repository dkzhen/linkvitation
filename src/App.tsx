import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App(): JSX.Element {
  const Order1 = () => {
    window.location.href =
      "https://linkvitation-wedding-v1.vercel.app/order-v1";
    return null; // Tambahkan return null karena fungsi ini tidak mengembalikan elemen JSX
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order-v1" element={<Order1 />} />
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
