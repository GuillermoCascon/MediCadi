import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayouth from "./layout/AuthLayout"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import ProtectedRoute from "./layout/ProtectedRoute"
import Admin from "./pages/Admin"

import { AuthProvider } from "./context/AuthProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayouth />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<Admin />} /> 
          </Route>
        </Routes>
      </AuthProvider>


    </BrowserRouter>
  );
}

export default App;
