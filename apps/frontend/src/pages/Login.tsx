import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <div className="bg-[#faedf8] w-full h-screen  flex flex-col justify-center items-center gap-10  ">
      <p className="text-6xl font-bold text-[#e926ec] stroke-2 stroke-black ">
        UnHinged
      </p>

      <div className="flex flex-col justify-center items-center  gap-4 w-[43%]">
        <Input
          className="border-2 border-[#e926ec] "
          placeholder="Enter Your ID"
        />
        <Input
          className="border-2 border-[#e926ec] "
          placeholder="Enter Your Password"
        />
        <Button className="bg-[#e926ec] w-[43%] text-[#faedf8] text-xl">
          Sign In
        </Button>
      </div>
      <div className="flex items-center justify-center align-middle my-4 w-[43%] ">
        <hr className="flex-grow border-t border-[#e926ec] w-full" />
        <span className="px-4 text-gray-500 text-sm">or</span>
        <hr className="flex-grow border-t border-[#e926ec] w-full" />
      </div>
      <Button className="border-2 rounded-xl border-[#e926ec] bg-[#faedf8] w-[19%] h-10 text-[#faedf8] text-xl text-[#e926ec] flex flex-row justify-center items-center gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="#e926ce"
            d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"
          />
        </svg>
        Sign in with Google
      </Button>
      <span className="text-sm text-[#e926ec] ">Don't have an account? SignUp</span>
    </div>
  );
};

export default Login;
