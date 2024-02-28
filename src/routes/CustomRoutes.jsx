import { Routes, Route } from "react-router-dom";
import UserProfileDetails from "../Components/UserDetails/UserProfileDetails";
import SocialApp from "../Components/SocialApp";

export default function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SocialApp />} />
      <Route path="/user/:id" element={<UserProfileDetails />} />
    </Routes>
  );
}
