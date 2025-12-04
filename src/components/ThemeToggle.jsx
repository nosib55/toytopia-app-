const ThemeToggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="theme-controller sr-only" value="dark" />

      {/* Switch Track */}
      <div className="w-12 h-6 bg-base-300 rounded-full peer 
                      peer-checked:bg-blue-500 transition-all"></div>

      {/* Switch Circle */}
      <div className="absolute left-1 top-1 w-4 h-4 rounded-full 
                      bg-white shadow-md transition-all peer-checked:translate-x-6 flex items-center justify-center">

      </div>

      {/* SUN/MOON ICON */}
      <div className="absolute flex items-center justify-between w-12 px-1 text-xs">
        <span className="text-yellow-500">☀</span>
        <span className="text-blue-300">🌙</span>
      </div>
    </label>
  );
};

export default ThemeToggle;
