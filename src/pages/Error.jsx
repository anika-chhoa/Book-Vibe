const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-100 px-6 text-center">
      <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">404</h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Oops! Page Not Found
      </h2>

      <p className="text-gray-600 max-w-md mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable. Please check the URL or return
        to the homepage.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full shadow-md hover:scale-105 transition-transform duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default Error;
