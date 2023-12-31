import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-black">
      <aside>
        <p className="font-bold">
          <span className="text-black">SSC</span> Technovision Inc
          <br />
          Providing reliable rooms since 1992
        </p>
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col text-3xl gap-4 cursor-pointer">
          <BsFacebook className="text-blue-600"></BsFacebook>
          <BsInstagram className="text-rose-500"></BsInstagram>
          <BsYoutube className="text-red-500"></BsYoutube>
          <BsTwitter className="text-sky-500"></BsTwitter>
          <BsLinkedin className="text-sky-400"></BsLinkedin>
          <BsWhatsapp className="text-green-500"></BsWhatsapp>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
