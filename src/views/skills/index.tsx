import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";
import Card from "./Card";
import { pink } from "../../styles/colors";
import solidityIcon from "../../images/file_type_solidity_icon_130156.png";
const Container = styled.div`
  padding: 40px auto;
`;
const Global = styled.div`
  background-color: #ededed;
`;
const Upshift = styled.div`
  transform: translateY(-50px);
`;
const More = styled.a`
  text-align: center;
  color: #000;

  &:hover {
    color: ${pink};
  }
`;

export default function Skills() {
  return (
    <Global>
      <Container className="container">
        <Upshift>
          <Card
            title="484 MGMT."
            img="src/images/484GLOBALGREYPINK.png"
            details="484 MGMT is a Talent and Social Media agency aimed and bringing you the best from our models and influencers. 484 MGMT was founded by 484 LTD in Manhattan, NY on December 1st, 2022 and has expanded its agency to Los Angeles. "
            color="#202123"
            visitorText="Visit 484 MGMT"
            herf="https://mgmt.484.ltd"
          />
          <Card
            title="484 CO."
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png"
            details="484 Co is a Web3 holdings company located in Manhattan, NY. 484 Co's primary funtion is to focus on the decentralization aspects of The Ecosystem. IE: HTX Partnership , Crypto Ave's Servers, Nodes, and Miners."
            color="#f4f2f7"
            visitorText="Visit 484 Co"
            herf="https://twitter.com/484co"
          />
          <Card
            title="484 STUDIOS"
            img="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png"
            details="484 Studios primary focus is to bring rich content and graphics to 484 LTD everyday. They are located in houes with 484 MGMT and 484 INTL."
            color="#d5eb94"
            visitorText="Learn more"
            herf="https://twitter.com/484studios"
          />
          <Card
            title="484 SPORTS"
            img="https://trufflesuite.com/assets/logo.png"
            details="484 Sports Network brings you London's First, Puckwave and 484 Bets. 484 Sports Network was founded by 484 LTD and is located in London & New York. "
            color="#5fedc0"
            visitorText="Learn more"
            herf="https://twitter.com/484SN"
          />
          <Card
            title="484 GOVERNMENT"
            img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
            details="484 GOVERNMENT is a government entity aimed at helping the United States government fufil their contracts. We also work with different Political Candidates from across the globe."
            color="#e6f1f2"
            visitorText="Learn more"
            herf="https://twitter.com/484gov"
          />
          <Card
            title="484 X HTX"
            img="src/images/484HTX.jpg"
            details="In a groundbreaking move set to redefine the Web3 and marketing landscape, 484 LTD, a leading Pennsylvania holdings company and Social Media Marketing Company, has announced a strategic partnership with HTX, a global leader in digital innovation. This collaboration promises to deliver a new era of technological advancement, combining the strengths of both companies to provide cutting-edge solutions and services to businesses worldwide."
            color="#fafafa"
            visitorText="Learn more"
            herf="https://484.ltd/HTX/"
          />

          <More href="https://www.crunchbase.com/organization/484-ltd">
            More about 484's Ecosystem and Corporations <BsArrowUpRight />
          </More>
        </Upshift>
      </Container>
    </Global>
  );
}
