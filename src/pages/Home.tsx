import Login from "../components/Login";

const Home = (props: { login: () => void }) => {
  const { login } = props;
  return <Login login={login} />;
};

export default Home;
