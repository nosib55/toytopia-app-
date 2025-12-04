const ThemeToggle = () => {
  return (
    <label className="swap swap-rotate cursor-pointer flex items-center gap-2 px-3 py-2 rounded-md bg-base-200 hover:bg-base-300 transition">

      {/* Theme controller */}
      <input type="checkbox" className="theme-controller" value="dark" />

      {/* Light Icon */}
      <svg
        className="swap-off h-6 w-6 fill-current text-base-content"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17l-.71..." />
        <circle cx="12" cy="12" r="5" />
      </svg>

      {/* Dark Icon */}
      <svg
        className="swap-on h-6 w-6 fill-current text-base-content"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.64 13A9 9 0 1111..." />
      </svg>

      {/* Light Text */}
      <span className="swap-off text-base-content font-medium">Light Mode</span>

      {/* Dark Text */}
      <span className="swap-on text-base-content font-medium">Dark Mode</span>

    </label>
  );
};

export default ThemeToggle;
