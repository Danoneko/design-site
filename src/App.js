import { Routes, Route } from "react-router-dom";

import { Layout } from "./Components/Layout";

import { Home } from "./Pages/Home";
import { NotFound } from "./Pages/NotFound";
import { UserAgreement } from "./Pages/UserAgreement";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="user-agreement" element={<UserAgreement/>} />
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
      </Route>
    </Routes>
  );
}

export default App;
