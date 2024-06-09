import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { loginDispatch } from "../../../redux/actions/auth";
import {
  setPassword,
  setUserName,
} from "../../../redux/slices/user/loginSlice";
import { useEffect } from "react";

function LoginFormComponent({
  _userName,
  _isAuthenticated,
  userName,
  password,
  isFormValid,
  loginState,
  login,
  onNameChange,
  onPwdChange,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (_isAuthenticated) {
      navigate("/");
    }
  }, [_isAuthenticated, navigate]);

  const submitHandler = () => {
    login({ userName: userName.value, password: password.value });
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
            value={userName.value}
            onChange={(e) => onNameChange({ value: e.target.value })}
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
            value={password.value}
            onChange={(e) => onPwdChange({ value: e.target.value })}
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

  userName: state.login.userName,
  password: state.login.password,
  loginState: state.login.loginState,
  isFormValid: state.login.isFormValid,
});

const mapDispatch = {
  login: loginDispatch,
  onNameChange: setUserName,
  onPwdChange: setPassword,
};

const LoginForm = connect(mapState, mapDispatch)(LoginFormComponent);

export default LoginForm;
