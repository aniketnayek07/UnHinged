import { Link } from "react-router-dom";
import { SignUpForm } from "@/components/SignUpForm";
const SignUp = () => {
  return (
    <main className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-black text-white p-24 flex justify-between flex-col">
        <h1 className="text-6xl font-bold">UnHinged</h1>
        <footer className="italic font-medium">
          "Break free from the ordinary. Discover bold, authentic connections.
          Because love shouldn't come with limits."
        </footer>
      </div>
      <div className="w-1/2 h-full flex justify-center p-24 items-center bg-slate-200">
        <Link to={"/login"} className="absolute top-10 right-24 font-medium">Login</Link>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
