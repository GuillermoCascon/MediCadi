import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayouth from "./layout/AuthLayout"
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ConfirmAccount from "./pages/ConfirmAccount";
import ProtectedRoute from "./layout/ProtectedRoute"
import Admin from "./pages/Admin"

import { AuthProvider } from "./context/AuthProvider";
import { LocationProvider } from "./context/LocationsProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LocationProvider>
          <Routes>
            <Route path="/" element={<AuthLayouth />}>
              <Route index element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="confirm/:id" element={<ConfirmAccount />} />
            </Route>

            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<Admin />} />
            </Route>
          </Routes>
        </LocationProvider>
      </AuthProvider>


    </BrowserRouter>
  );
}

export default App;
