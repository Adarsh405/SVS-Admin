import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/navBar.js";
import Login from "./components/Login/login.js";
import AddItem from "./components/AddItem/AddItem";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RateUpdate from './components/RateUpdate/rateUpdate'
import Sales from "./components/Sales/sales.js"
import Inventory from "./components/Inventory/Inventory.js";

const App = () => {
  return (
    <BrowserRouter>
      <ProtectedRoute>
        <Navbar />
      </ProtectedRoute>
      <Routes>
        {/* Admin Login */}
        <Route
          path="/login"
          element={<Login />}
        />
        
        {/* Protected Add Jewellery */}
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Inventory"
          element={
            <ProtectedRoute>
              <Inventory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/addJewellery"
          element={
            <ProtectedRoute>
              <AddItem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <RateUpdate />
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>
  );
};

export default App;