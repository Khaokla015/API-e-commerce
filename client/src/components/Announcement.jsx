import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #81B2EC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;


const Announcement = () => {
  return <Container>พิเศษ! ! !   ได้ตั๋วลดราคา 50 % เมื่อซื้อของครบ 10 ชื้น </Container>;
};

export default Announcement;