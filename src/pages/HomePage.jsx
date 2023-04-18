import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="p-4 text-4xl font-bold text-center">
        Welcome to my Website
      </h1>
      <p className="w-1/2 text-center">
        This is just a training app for creating a sign up form with React and
        Tailwind, Please go back to sign up form.
      </p>
      <button className="p-2 px-4 m-4 transition duration-700 bg-cyan-200 rounded-xl hover:scale-125">
        <Link to="/L-Odin6-SignUpForm">Sign Up</Link>
      </button>
    </div>
  );
}

export default HomePage;
