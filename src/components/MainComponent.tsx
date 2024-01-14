import star from "../assets/icon-star.svg";
import { accordionData } from "./Content";
import Accordion from "./Accordion";

export default function MainComponent() {
  return (
    <main className="font-work laptop:max-w-[500px] laptop:mt-[-24vh] mobile:max-w-[340px] mobile:mt-[-8vh] tablet:max-w-[400px] tablet:mt-[-20vh] my-[2rem] mx-auto shadow-lg p-5 bg-white rounded-xl relative z-10">
      <div className="flex items-center mb-5">
        <img src={star} alt="icon-star" className="mr-4 size-6" />
        <h1 className="font-700 text-4xl text-darkPurple mobile:text-3xl">
          FAQs
        </h1>
      </div>
      <div className="flex flex-col gap-4 max-w-40rem">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </main>
  );
}
