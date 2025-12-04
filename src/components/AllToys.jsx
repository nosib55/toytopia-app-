import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorPage from "../pages/ErrorPage";
import Loading from "../pages/Loading";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);

  const [categories, setCategories] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch toys
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/toys`)
      .then((res) => {
        setToys(res.data);
        setFilteredToys(res.data);

        // Unique subCategory list
        const cats = [...new Set(res.data.map((t) => t.subCategory))];
        setCategories(cats);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // Filtering logic (Search + Category)
  useEffect(() => {
    let updated = [...toys];

    // Search
    if (searchText.trim() !== "") {
      updated = updated.filter((t) =>
        t.toyName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      updated = updated.filter((t) => t.subCategory === category);
    }

    setFilteredToys(updated);
  }, [searchText, category, toys]);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="w-full px-4 py-6 text-base-content">

      {/* Search + Category */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 md:justify-between">

        {/* Search */}
        <input
          type="text"
          placeholder="Search toys..."
          className="px-3 py-2 border border-base-300 bg-base-100 text-base-content rounded-md md:w-1/3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Category */}
        <select
          className="px-3 py-2 border border-base-300 bg-base-100 text-base-content rounded-md md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Toys Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredToys.map((toy) => {
          const { toyName, toyPrice, rating, pictureURL, _id } = toy;

          return (
            <div
              key={_id}
              className="bg-base-100 dark:bg-base-200 border border-base-300 
                         rounded-lg shadow-sm hover:shadow-xl transition-all"
            >
              {/* IMAGE */}
              <div className="w-full h-40 md:h-52 bg-base-300 overflow-hidden flex justify-center items-center">
                <img
                  src={pictureURL}
                  alt={toyName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 space-y-1.5">
                <h3 className="text-sm font-semibold line-clamp-2 text-base-content">
                  {toyName}
                </h3>

                <div className="flex justify-between items-center">
                  <p className="text-[#f85606] text-lg font-bold">${toyPrice}</p>
                  <p className="text-yellow-400 text-sm">⭐ {rating}</p>
                </div>

                <Link
                  to={`/toys/${_id}`}
                  className="block mt-2 py-1.5 text-sm text-center bg-pink-500 hover:bg-pink-600 text-white rounded-md"
                >
                  View More
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* BACK BUTTON */}
      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          className="px-6 py-2 bg-base-200 dark:bg-base-300 text-base-content rounded-md hover:bg-base-300 hover:dark:bg-base-400 transition"
        >
          ⬅ Back
        </Link>
      </div>

    </div>
  );
};

export default AllToys;
