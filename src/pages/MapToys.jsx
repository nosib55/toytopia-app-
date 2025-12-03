import React from "react";
import useToysData from "../hooks/useToysData";
import AllToys from "../components/AllToys";
import Loading from "./Loading";

const MapToys = () => {
  const { toys, loading, error } = useToysData();

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  console.log(toys);

  return (
    <div className="w-full px-4 py-6 grid 
      grid-cols-2 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      gap-4">

      {toys.map((toy) => (
        <AllToys key={toy._id} toy={toy} />   
      ))}
    </div>
  );
};

export default MapToys;
