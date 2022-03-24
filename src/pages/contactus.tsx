import ContactUs from "../components/ContactUs";
import pushNewContactMessage from "./api/contact/pushNewContactMessage";

export default function contactUs() {
  return <ContactUs sendContactMessage={pushNewContactMessage}></ContactUs>;
}
