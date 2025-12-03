import useToysData from "../hooks/useToysData";
import AllToys from "../components/AllToys";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";

const HomeProducts = () => {
  const { toys, loading, error } = useToysData();

  if (loading) return <Loading />;
  if (error) return <ErrorPage></ErrorPage>;

  const homeToys = toys.slice(0, 8); 
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Featured Toys</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {homeToys.map(toy => (
          <AllToys key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;