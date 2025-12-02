import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-pink-100 py-6 mt-10 text-center text-pink-700">
      <p className="font-semibold">© 2025 ToyTopia | All Rights Reserved</p>
      <div className="flex justify-center gap-4 mt-2">
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy Policy</Link>
        
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
