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
  formState,
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
    console.log("login");
    login({ userName: userName.value, password: password.value });
  };

  console.log(formState, isFormValid);

  return (
    <div className="py-12 px-5 flex flex-col text-[#070707] montserrat-md">
      <h1 className="w-full text-center text-[2rem]">Sign In</h1>

      <div
        style={{ marginTop: formState === "reject" ? "1.2rem" : "2rem" }}
        className="text-base"
      >
        {formState === "reject" && (
          <small className="text-[#ed2224] text-center block mb-[.3rem]">
            Username or Password is Invalid.
          </small>
        )}
        <div className="space-y-6">
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
              style={{
                borderBlockEnd:
                  userName.isDirty && userName.isValid
                    ? "2px solid #070707"
                    : userName.isDirty
                    ? "2px solid #ed2224"
                    : "2px solid #070707",
              }}
              className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t outline-none"
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
              style={{
                borderBlockEnd:
                  password.isDirty && password.isValid
                    ? "2px solid #070707"
                    : password.isDirty
                    ? "2px solid #ed2224"
                    : "2px solid #070707",
              }}
              className="p-2 mt-1 bg-blue-800 bg-opacity-[.07] rounded-t border-b-[#070707] border-b-2 outline-none"
            />
          </div>
        </div>

        <div className="w-full flex justify-center my-14">
          <button
            disabled={!isFormValid}
            onClick={submitHandler}
            className="text-lg w-40 h-[2.6rem] bg-blue-800 bg-opacity-[.14] hover:bg-opacity-[.18] rounded border-b-[#070707] border-b-2 cursor-pointer"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  _userName: state.user.userName,
  _isAuthenticated: state.user.isAuthenticated,

  userName: state.login.userName,
  password: state.login.password,
  formState: state.user.state,
  isFormValid: state.login.isFormValid,
});

const mapDispatch = {
  login: loginDispatch,
  onNameChange: setUserName,
  onPwdChange: setPassword,
};

const LoginForm = connect(mapState, mapDispatch)(LoginFormComponent);

export default LoginForm;
