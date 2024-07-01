import styled from "styled-components";
import ContactCard from "./Card";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Global = styled.div`
  min-height: 300px;
  padding: 80px 0;
  background-color: #000;
`;

const Header = styled.h2`
  color: #fff;
`;

const Copyright = styled.p`
  font-size: 0.8rem;
`;
const ContactIcon = styled.a`
  color: #ffffff50;
  &:hover {
    color: #ffffff90;
  }
`;

export default function Contact() {
  return (
    <Global>
      <div className="d-flex justify-content-center my-5" id="contact">
        <ContactIcon
          href="https://github.com/484-LTD/Main-Website"
          target="_blank"
        >
          <AiFillGithub className="mx-3" size="30px" />
        </ContactIcon>

        <ContactIcon href="https://www.facebook.com/484ltd/" target="_blank">
          <AiFillFacebook className="mx-3" size="30px" />
        </ContactIcon>

        <ContactIcon href="https://www.instagram.com/484ltd" target="_blank">
          <AiOutlineInstagram className="mx-3" size="30px" />
        </ContactIcon>

        <ContactIcon
          href="https://www.linkedin.com/company/484ltd"
          target="_blank"
        >
          <AiFillLinkedin className="mx-3" size="30px" />
        </ContactIcon>

        <ContactIcon href="mailto:info@484.ltd" target="_blank">
          <SiGmail className="mx-3" size="30px" />
        </ContactIcon>

        <ContactIcon href="https://x.com/484ltd">
          <AiFillPhone
            className="mx-3 pointer"
            size="30px"
            onClick={() => window.open("tel:0924373999")}
          />
        </ContactIcon>
      </div>
      <div className="d-flex justify-content-center">
        <Copyright>© 2024 484 LTD | EXTON, PENNSYLVANIA</Copyright>
      </div>
    </Global>
  );
}
