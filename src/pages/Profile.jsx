import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editName, setEditName] = useState(user?.displayName || "");
  const [editPhotoURL, setEditPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">
          You are not logged in.
        </p>
      </div>
    );
  }

  const handleSave = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(user, { displayName: editName, photoURL: editPhotoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        setUser({ ...user, displayName: editName, photoURL: editPhotoURL });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 py-10 gap-8 flex-col md:flex-row">
      
      {/* Display Section */}
      <div className="card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full max-w-sm">
        <img
          src={user.photoURL || "https://i.ibb.co/2gPjFq1/default-avatar.png"}
          alt={user.displayName || "User"}
          className="w-24 h-24 rounded-full border-4 border-purple-500 mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          {user.displayName || "No Name"}
        </h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
      </div>

      {/* Edit Form Section */}
      <div className="card bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Profile</h2>
        <form onSubmit={handleSave}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input input-bordered w-full mb-3"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            
          />

          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full mb-4"
            value={editPhotoURL}
            onChange={(e) => setEditPhotoURL(e.target.value)}
          />

          <button
            type="submit"
            className={`bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg w-full ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
