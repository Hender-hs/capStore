import {RiVisaFill as Visa} from "react-icons/ri";
import { FaCcMastercard as Mastercard } from "react-icons/fa";
import { BsCreditCard as CreditCard } from "react-icons/bs";

const Footer = () => {

    return (
      <div>
        <p>Quem somos</p>
        <p>Formas de pagamento</p>
        <div>
          <Visa size={50} />
          <Mastercard size={50} />
          <CreditCard size={50}/>
        </div>
      </div>
    );
}
export default Footer;