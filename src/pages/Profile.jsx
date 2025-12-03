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
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
        <p className="text-xl font-semibold text-gray-700">
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 flex justify-center px-4">
      <div className="w-full max-w-5xl gap-10 grid grid-cols-1 md:grid-cols-2">

        {/* Profile Display Card */}
        <div className="backdrop-blur-xl bg-white/40 shadow-xl rounded-2xl p-8 flex flex-col items-center border border-white/40">
          <img
            src={user.photoURL || "https://i.ibb.co/2gPjFq1/default-avatar.png"}
            alt={user.displayName || "User"}
            className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg object-cover"
          />

          <h2 className="text-3xl mt-5 font-bold text-gray-800">
            {user.displayName || "No Name"}
          </h2>

          <p className="text-gray-600 text-lg mt-1">{user.email}</p>

          <div className="mt-6 text-center">
            <p className="text-gray-700">
              Manage your personal information and account details.
            </p>
          </div>
        </div>

        {/* Edit Form Card */}
        <div className="backdrop-blur-xl bg-white/40 shadow-xl rounded-2xl p-8 border border-white/40">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Edit Profile
          </h2>

          <form onSubmit={handleSave} className="space-y-4">

            <label className="font-semibold text-gray-700">Name</label>
            <input
              type="text"
              className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-purple-400"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />

            <label className="font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full rounded-lg shadow-md focus:ring-2 focus:ring-purple-400"
              value={editPhotoURL}
              onChange={(e) => setEditPhotoURL(e.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 mt-3 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg hover:shadow-xl transition-all ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
