import bgLeftLeaf from "../assets/left-leaf.png";
import bgRightLeaf from "../assets/right-leaf.png";

export default function Banner() {
  return (
    <section className="bg-[#CFF0DC]">
      <div className="container mx-auto px-4 sm:px-0 pt-10 flex items-center justify-between">
        <BackgroundLeaf image={bgLeftLeaf}></BackgroundLeaf>
        <TextContent></TextContent>
        <BackgroundLeaf image={bgRightLeaf}></BackgroundLeaf>
      </div>
    </section>
  );
}

function BackgroundLeaf({ image }) {
  return (
    <img src={image} alt="" className="w-1/4 h-auto self-end hidden sm:block" />
  );
}

function TextContent() {
  return (
    <div className="text-center mb-6">
      <h1 className="font-inter text-4xl text-[#1F2937] font-bold mb-4">
        Plant a Tree,<br className="block lg:hidden"></br> Grow a Future
      </h1>
      <p className="font-inter text-base text-[#1F2937] font-normal mb-6">
        Join our mission to plant 1 million trees and make the Earth greener for
        future generations.
      </p>
      <button className="btn btn-primary bg-[#FACC15] border-none rounded-full shadow-none font-inter text-base font-medium text-[#15803D]">
        Get Involved
      </button>
    </div>
  );
}
