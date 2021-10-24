import useTranslation from "next-translate/useTranslation";
import { Media } from "../../utils/media";
import SocialList from "./SocialList";

const Footer = () => {
  const {t} = useTranslation("common")
  return (
    <footer className="py-6 px-3 mt-3 bg-navy-normal flex flex-col items-center justify-center font-mono">
      <p className="text-blue-200 text-opacity-50">
        {t("footer_text")} <strong>Shayant Sital</strong>
      </p>
      <Media lessThan="md"><SocialList /></Media>
    </footer>
  );
};

export default Footer;
