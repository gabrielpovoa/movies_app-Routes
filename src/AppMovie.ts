import styled from 'styled-components';

export const Header = styled.header`
    background-color: green;
    padding: 2rem 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: greenyellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & span {
        font-size: 4rem;
        flex: 1;
    }
`;

export const Length = styled.div`
    font-size: 1.4rem;
    color: #FFFF;
    font-weight: bolder;
    letter-spacing: .1rem;
    & button {
        width: 15rem;
        cursor: pointer;
        background-color: #77DD77;
        font-weight: 700;
        margin-top: .4rem;
        padding:.5rem;
        border-radius: .4rem;
    }
`;

export const Hero = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 2rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &:hover {
        transform: scale(1.1);
    }
`;

export const Img = styled.img`
    width: 20rem;
    max-width: 100%;
    object-fit: cover;
    border-radius:.4rem .4rem 0 0;
    @media screen and (max-width:768px){
        width: 100%;
    }
`;

export const Content = styled.div`
    background-color: green;
    color: #FFF;
    font-weight: 700;
    width: 20rem;
    max-width: 100%;
    text-align: center;
    padding:.8rem;
    border-radius:0 0 .4rem .4rem ;

    @media screen and (max-width:768px){
        width: 100%;
    }
`;

export const Loader = styled.div`
  width:240px;
  height:120px;
  border-radius:400px 400px 0 0;
  -webkit-mask:repeating-radial-gradient(farthest-side at bottom ,#0000 0,#000 2px 12%,#0000 calc(12% + 2px) 20%);
  background:
   radial-gradient(farthest-side at bottom,#42892B 0 95%,#0000 0) bottom/0% 0% no-repeat
   #E4E4ED;
  animation:p10 2s infinite steps(6);
  margin: 0 auto;

    @keyframes p10 {
        100% {background-size:120% 120%}
    }
`;