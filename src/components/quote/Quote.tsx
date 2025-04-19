import screenshot from "../../assets/screenshot.png";
import { quotes } from "./Quote.list";
import QuoteRotator from "../common/quote-rotator/QuoteRotator";

const Quote = () => {

  return (
    <section className="flex flex-col gap-8 md:flex-row">
      <div className="md:w-[50%]">
      <QuoteRotator quotes={quotes} />
      </div>
      <div className="md:w-[50%] mt-3">
        <img src={screenshot} alt="screenshot-todo" />
      </div>
    </section>
  );
};

export default Quote;
