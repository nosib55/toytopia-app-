import { useEffect, useState } from "react";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { Link } from "react-router-dom";

const HomeProducts = () => {
  const [homeToys, setHomeToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/toys`)
      .then((res) => res.json())
      .then((data) => {
        const sliced = data.slice(0, 8);
        setHomeToys(sliced);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  return (
    <div className="px-4 py-6 text-base-content">
      <h2 className="text-2xl font-bold mb-4">Featured Toys</h2>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {homeToys.map((toy) => {
          const { _id, toyName, toyPrice, rating, pictureURL } = toy;

          return (
            <div
              key={_id}
              className="bg-base-100 dark:bg-base-200 border border-base-300
                         rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 
                         overflow-hidden"
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

                <p className="text-[#f85606] text-lg font-bold">${toyPrice}</p>

                <p className="text-yellow-400 text-sm">⭐ {rating}</p>

                <Link
                  to={`/toys/${_id}`}
                  className="block mt-2 py-1.5 text-sm text-center 
                             bg-pink-500 hover:bg-pink-600 text-white rounded-md"
                >
                  View More
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* VIEW ALL BUTTON */}
      <div>
        <Link
          to="/toys"
          className="mt-6 px-6 py-3 w-max bg-base-200 dark:bg-base-300
                     text-base-content rounded-md hover:bg-base-300 hover:dark:bg-base-400 
                     transition text-center flex items-center mx-auto"
        >
          View All Toys
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
