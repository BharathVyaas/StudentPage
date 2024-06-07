import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPwdValid, setIsPwdValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      if (!isEmailValid) setIsEmailValid(true);
    } else {
      if (isEmailValid) setIsEmailValid(false);
    }
  }, [email, isEmailValid, setIsEmailValid]);

  useEffect(() => {
    if (pwd) {
      if (!isPwdValid) setIsPwdValid(true);
    } else {
      if (isPwdValid) setIsPwdValid(false);
    }
  }, [pwd, isPwdValid, setIsPwdValid]);

  useEffect(() => {
    if (isEmailValid && isPwdValid) {
      if (!isFormValid) setIsFormValid(true);
    } else {
      if (isFormValid) setIsFormValid(false);
    }
  }, [isEmailValid, isPwdValid, isFormValid, setIsFormValid]);

  const onEmailChage = (e) => {
    setEmail(e.target.value);
  };

  const onPwdChange = (e) => {
    setPwd(e.target.value);
  };

  const submitHandler = () => {
    navigate("/");
  };

  return (
    <div className="py-12 px-5 flex flex-col text-[#070707] montserrat-md">
      <h1 className="w-full text-center text-[2rem]">Sign In</h1>

      <div className="mt-10 space-y-6 text-base">
        <div className="w-full flex flex-col">
          <label htmlFor="email">
            <span>Email</span>
            <span className="ms-[.1rem]">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="main@example.com"
            value={email}
            onChange={onEmailChage}
            className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t border-b-[#070707] border-b-2 outline-none"
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="pwd">
            <span>Password</span>
            <span className="ms-[.1rem]">*</span>
          </label>
          <input
            id="pwd"
            type="password"
            name="pwd"
            placeholder="OyujiWrSN"
            value={pwd}
            onChange={onPwdChange}
            className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t border-b-[#070707] border-b-2 outline-none"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-6 my-8">
        <p className="text-center text-sm cursor-pointer underline">
          Forgot Mail?
        </p>
        <p className="text-center text-sm cursor-pointer underline">
          Don't hav Account?
        </p>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={submitHandler}
          className="text-lg w-40 h-[2.6rem] bg-blue-800 bg-opacity-[.05] hover:bg-opacity-[.14] rounded border-b-[#070707] border-b-2 cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
