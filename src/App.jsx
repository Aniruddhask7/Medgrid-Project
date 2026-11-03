
import { Navigate, Route, Routes } from 'react-router-dom';

import LegacyPage from './components/LegacyPage.jsx';
import Users from './components/Users.jsx';
import Register from './components/Register.jsx';

export default function App() {


//   const pages = [
//   ['/', 'index.html'],
//   ['/home', 'index.html'],
//   ['/login', 'login.html'],
//   ['/register', 'register.html'],
//   ['/patient/dashboard', 'dashboard.html'],
//   ['/doctor/dashboard', 'doctor-dashboard.html'],
//   ['/admin/dashboard', 'admin-dashboard.html'],
//   ['/appointment', 'appointment.html'],
//   ['/appointments', 'appointments.html'],
//   ['/doctors', 'doctors.html'],
//   ['/doctor-profile', 'doctor-profile.html'],
//   ['/medical-records', 'medical-records.html'],
//   ['/messages', 'messages.html'],
//   ['/prescriptions', 'prescriptions.html'],
//   ['/profile', 'profile.html'],
//   ['/settings', 'settings.html'],
//   ['/basic', 'basic.html'],
// ];

    return (

        <Routes>

            {/* Home page */}
            <Route
                path="/"
                element={<LegacyPage file="index.html" />}
            />

            <Route
                path="/home"
                element={<LegacyPage file="index.html" />}
            />

            {/* Authentication pages */}
            <Route
                path="/login"
                element={<LegacyPage file="login.html" />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            {/* Dashboard pages */}
            <Route
                path="/patient/dashboard"
                element={<LegacyPage file="dashboard.html" />}
            />

            <Route
                path="/doctor/dashboard"
                element={<LegacyPage file="doctor-dashboard.html" />}
            />

            <Route
                path="/admin/dashboard"
                element={<LegacyPage file="admin-dashboard.html" />}
            />

            {/* Other pages */}
            <Route path="/appointment" element={<LegacyPage file="appointment.html" />} />

            <Route path="/appointments" element={<LegacyPage file="appointments.html" />} />

            <Route path="/doctors" element={<LegacyPage file="doctors.html" />} />

            <Route path="/doctor-profile" element={<LegacyPage file="doctor-profile.html" />} />

            <Route path="/medical-records" element={<LegacyPage file="medical-records.html" />} />

            <Route path="/messages" element={<LegacyPage file="messages.html" />} />

            <Route path="/prescriptions" element={<LegacyPage file="prescriptions.html" />} />

            <Route path="/profile" element={<LegacyPage file="profile.html" />} />

            <Route path="/settings" element={<LegacyPage file="settings.html" />} />

            <Route path="/basic" element={<LegacyPage file="basic.html" />} />

            {/* Users page */}
            <Route
                path="/users"
                element={<Users />}
            />

            {/* Unknown URL */}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />

        </Routes>

    );

}
