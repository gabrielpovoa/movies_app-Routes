import styled from 'styled-components';

export const Container = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Img = styled.img`
    width: 35rem;
    object-fit: cover;
`;
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: #FFF;
    padding: 2rem;
    margin-block: 2rem;
    background-color: orange;
    border-radius:.4rem;
  a {
    color: #FFF;
    font-weight: bold;
    text-align: center;
    flex: 1;
    text-decoration: underline;
    &:hover {
        text-decoration: initial;
    }
}
`;