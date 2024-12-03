import { LoginForm } from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col gap-3 justify-center items-center ">
      <h1 className="text-4xl font-bold ">UnHinged</h1>
      <LoginForm classname={"w-1/3"} />
      <div className="flex items-center justify-center align-middle w-full gap-4">
        <hr className="border-[#ffff] w-[15%]" /> <p>or</p>{" "}
        <hr className="border-[#ffff] w-[15%]" />
      </div>
      <button className="bg-white text-black text-xl font-bold w-1/3 rounded-lg flex justify-center items-center gap-4 px-1 py-1 hover:bg-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          width="20"
          viewBox="0 0 488 512"
        >
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
        Sign In Google
      </button>
    </div>
  );
};

export default Login;
