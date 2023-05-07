import styled from 'styled-components';

export const mobile = `@media (max-width: 768px)`;

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Content = styled.span`
  margin-top: 20vh;
  margin-left: 5vw;
  height: 80%;
`;

export const ContentContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const RightContent = styled.span`
  width: 53%;
`;

export const LeftContent = styled.span`
  width: 47%;
`;
export const BackNextButtonContainer = styled.span`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
`;
export const NextButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.isValid ? '#3a49ac' : '#F2F2F2')};
  color: ${(props) => (props.isValid ? 'white' : '#b3b3b3')};
  border: ${(props) => (props.isValid ? 'none' : '1px solid #b3acaa')};
  border-radius: 4px;
  cursor: ${(props) => (props.isValid ? 'pointer' : 'default')};
  text-transform: uppercase;
`;

export const BackButton = styled.button`
  width: 80px;
  height: 40px;
  background-color: ${(props) => (props.isSelected ? '#3a49ac' : '#979797')};
  color: ${(props) => (props.isSelected ? '#b3b3b3' : '#1D2556')};
  border: ${(props) => (props.isSelected ? 'none' : '1px solid #1D2556')};
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #665e5b;
  cursor: pointer;
`;

export const SelectButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
  padding: 10px 30px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 200px;
  height: 60px;
  &:hover {
    background-color: rgba(128, 0, 128, 0.8);
    color: #ffffff;
  }
`;
