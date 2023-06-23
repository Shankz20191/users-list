import styled from "styled-components";

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

const ListItem = (props: { user: usersObject }) => {
  const { user } = props;
  return (
    <Wrapper>
      <h3>
        {user.name.title} {user.name.first}
      </h3>
      <img src={user.picture.large} alt={user.name.first} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-extra);
  img {
    width: 50px;
    border-radius: 50%;
  }
  :hover {
    box-shadow: var(--box-shadow-3);
  }
`;

export default ListItem;
