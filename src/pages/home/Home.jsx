import { connect } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";

import Dashboard from "../../components/home/Dashboard";
import MainNav from "../../ui/home/MainNav";

function HomeComponent({ isAuthenticated }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  return (
    <>
      <header className="relative">
        <MainNav />
      </header>

      <div className="min-h-screen min-w-full bg-gradient-to-r from-blue-800 via-white to-white opacity-[.10] fixed top-0 left-0 -z-10">
        <div className="min-h-screen min-w-full bg-gradient-to-b from-white via-white to-blue-800 opacity-60">
          <div className="min-h-screen min-w-full bg-gradient-to-t from-blue-800 via-white to-blue-800 opacity-70"></div>
        </div>
      </div>

      <main style={{ marginInlineStart: "280px" }}>
        <Dashboard />
      </main>
      <footer></footer>
    </>
  );
}

const mapState = (state) => ({
  isAuthenticated: state.user.isAuthenticated,
});

const Home = connect(mapState, null)(HomeComponent);

export default Home;
