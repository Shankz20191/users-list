import styled from "styled-components";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props: { login: () => void }) => {
  const { login } = props;
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/users");
    login();
  };
  return (
    <Wrapper>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
          <button>submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    width: 80vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: var(--box-shadow-1);
  }

  input {
    margin-bottom: 0.5rem;
    height: 1.5rem;
    padding-left: 0.5rem;
    border-radius: 5px;
    border: solid 1.5px #d3d3d3;
    display: flex;
  }

  input:focus {
    outline: none;
  }

  button {
    width: 100%;
    height: 1.5rem;
    display: block;
    background-color: var(--color-secondary);
    border-radius: 5px;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    color: var(--color-white);
    letter-spacing: 0.05rem;
  }

  @media (min-width: 768px) {
    .form-container {
      display: flex;
      justify-content: center;
    }

    form {
      padding-top: 2rem;
    }
  }
`;

export default Login;
