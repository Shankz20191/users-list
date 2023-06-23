import styled from "styled-components";
import { useState } from "react";
import { CiLogout, CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Navbar = (props: { isLogin: boolean; logout: () => void }) => {
  const { isLogin, logout } = props;
  const [showInput, setShowInput] = useState(false);
  const title = window.location.pathname.substring(1);
  const navigate = useNavigate();

  const handleShowInput = () => {
    setShowInput(!showInput);
  };

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className="search">
        {showInput ? null : (
          <>
            <CiSearch
              className={showInput ? "disable icon" : "icon"}
              onClick={handleShowInput}
            />
            {isLogin && (
              <CiLogout
                className={showInput ? "disable icon" : "icon"}
                onClick={handleLogout}
              />
            )}
          </>
        )}
        {showInput ? (
          <form>
            <input
              className={showInput ? "search-input" : "search-input disable"}
              type="text"
              autoFocus
              onBlur={() => setShowInput(!showInput)}
              placeholder="Search.."
            />
          </form>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--color-primary);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  position: fixed;
  width: calc(100vw - 2rem);

  h2 {
    text-transform: uppercase;
  }

  .search {
    font-size: 1.2rem;
    .icon {
      padding-left: 1rem;
    }
  }

  .search-input {
    float: right;
    padding: 0.25rem 0.75rem;
    border-radius: 5px;
    border: solid 1.5px #d3d3d3;
    transition: 1s ease-in;
  }

  input:focus {
    outline: none;
  }

  .disable {
    display: none;
  }
`;

export default Navbar;
