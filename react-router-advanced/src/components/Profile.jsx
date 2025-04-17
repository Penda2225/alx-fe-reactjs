import { Link, Outlet, Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Profile Page</h1>
      <nav className="space-x-4 mb-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default Profile;
 
