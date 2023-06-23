import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import ListItem from "./ListItem";
import Skeleton from "react-loading-skeleton";

interface usersObject {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const List = (props: {
  users: usersObject[];
  fetchData: (url: string) => void;
}) => {
  const { users, fetchData } = props;

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={users.length}
        next={() =>
          fetchData("https://randomuser.me/api/?results=25&inc=name,picture")
        }
        hasMore={true}
        loader={<div className="loading"></div>}
      >
        {users.map((user) => (
          <ListItem user={user} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 3.8rem;

  div {
    width: calc(100% - 1rem);
  }

  .skeleton {
    height: 5rem;
  }

  .loading {
    width: 3rem;
    height: 3rem;
    margin: 2rem auto;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--clr-primary-5);
    animation: spinner 0.6s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 768px) {
    width: 70vw;
  }
`;

export default List;
