import SignupForm from "../Components/SignUpForm";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";

const SignUpPage = () => {
  return (
    <div className="grid-flow-row grid-cols-2 gap-4 mt-20 App min-w-max lg:grid">
      <div className="md:col-start-2 ">
        <Navbar />
      </div>
      <div className="row-start-1 lg:mt-20 ">
        <Hero />
      </div>
      <div className="flex justify-center col-start-1 row-start-2 ">
        <iframe
          src="https://my.spline.design/glasssphier-80dab409241b7099dd635a59ddae8621/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="col-end-3 md:col-start-2 ">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpPage;
