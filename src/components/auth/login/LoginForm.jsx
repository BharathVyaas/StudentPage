import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { loginDispatch } from "../../../redux/actions/auth";

function LoginFormComponent({ _userName, _isAuthenticated, login }) {
  const [uname, setUname] = useState(_userName || "");
  const [email] = useState("");
  const [pwd] = useState("OyujiWrSN");

  const [isUnameValid, setIsUnameValid] = useState(false);
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
    if (uname.length > 4) {
      if (!isUnameValid) setIsUnameValid(true);
    } else {
      if (isUnameValid) setIsUnameValid(false);
    }
  }, [uname, isUnameValid, setIsUnameValid]);

  useEffect(() => {
    if (pwd) {
      if (!isPwdValid) setIsPwdValid(true);
    } else {
      if (isPwdValid) setIsPwdValid(false);
    }
  }, [pwd, isPwdValid, setIsPwdValid]);

  useEffect(() => {
    if (isUnameValid && isPwdValid) {
      if (!isFormValid) setIsFormValid(true);
    } else {
      if (isFormValid) setIsFormValid(false);
    }
  }, [isUnameValid, isPwdValid, isFormValid, setIsFormValid]);

  useEffect(() => {
    if (_isAuthenticated) {
      navigate("/");
    }
  }, [_isAuthenticated, navigate]);

  const onUnameChage = (e) => {
    setUname(e.target.value);
  };

  // const onEmailChage = (e) => {
  //   setEmail(e.target.value);
  // };

  // const onPwdChange = (e) => {
  //   setPwd(e.target.value);
  // };

  const submitHandler = () => {
    if (isFormValid) login({ userName: uname, password: pwd });
  };

  return (
    <div className="py-12 px-5 flex flex-col text-[#070707] montserrat-md">
      <h1 className="w-full text-center text-[2rem]">Sign In</h1>

      <div className="mt-10 space-y-6 text-base">
        <div className="w-full flex flex-col">
          <label htmlFor="uname">
            <span>User name</span>
            <span className="ms-[.1rem]">*</span>
          </label>
          <input
            id="uname"
            type="uname"
            name="uname"
            placeholder="john Doe"
            value={uname}
            onChange={onUnameChage}
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
            onChange={() => {}}
            className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t border-b-[#070707] border-b-2 outline-none"
          />
        </div>
      </div>

      <div className="flex justify-center space-x-6 my-8">
        <p className="text-center text-sm cursor-pointer underline">
          Forgot Mail?
        </p>
        <p className="text-center text-sm cursor-pointer underline">
          Don't have Account?
        </p>
      </div>

      <div className="w-full flex justify-center">
        <button
          disabled={!isFormValid}
          onClick={submitHandler}
          className="text-lg w-40 h-[2.6rem] bg-blue-800 bg-opacity-[.05] hover:bg-opacity-[.14] rounded border-b-[#070707] border-b-2 cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  _userName: state.user.userName,
  _isAuthenticated: state.user.isAuthenticated,
});

const mapDispatch = {
  login: loginDispatch,
};

const LoginForm = connect(mapState, mapDispatch)(LoginFormComponent);

export default LoginForm;
