import styled from "styled-components";
import { FullScreenBanner } from "../../components/FullScreen";
import { AiOutlineArrowRight, AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { blue, pink } from "../../styles/colors";
import bg from "../../images/bg-mywebsite-01.png";
const Container = styled(FullScreenBanner)`
  background-color: transparent;
  display: flex;
  align-items: flex-end;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Name = styled.p`
  font-weight: 300;
  font-size: 2.7rem;
  margin-right: 20px;
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const LName = styled(Name)`
  font-weight: 600;
`;
const Role = styled.p`
  font-weight: 600;
  width: fit-content;
  font-size: 1.2rem;
  background-image: linear-gradient(45deg, #e70046, #2576c6);
  background-clip: text;
  text-fill-color: transparent !important;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  background-size: cover;
  background-repeat: repeat;
`;
const Text = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: #ffffff40;
  margin-bottom: 30px;
`;
const Label = styled.a`
  color: #000;
  width: fit-content;
  margin-top: 40px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 300ms ease;
  &:hover {
    color: ${pink};
  }
`;
const NameWrap = styled.div`
  width: 100%;
`;

export default function Me() {
  return (
    <Container id="me">
      <div className="container">
        <Flex>
          <Name>484</Name>
          <LName>LTD</LName>
        </Flex>
        <Role>HOLDINGS COMPANY</Role>
        <Role>EXTON, PENNSYLVANIA | EST. 2022</Role>
        <Label href="https://x.com/484ltd">
          <AiOutlineTwitter className="me-2" /> View On X <AiOutlineArrowRight />
        </Label>
      </div>
    </Container>
  );
}
