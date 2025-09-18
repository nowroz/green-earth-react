import CategoriesContainer from "./CategoriesContainer";

export default function ChooseTrees() {
  return (
    <section className="container mx-auto my-20 px-4 sm:px-10 border border-black">
      <SectionTitle></SectionTitle>
      <MainContentContainer></MainContentContainer>
    </section>
  );
}

function SectionTitle() {
  return (
    <h2 className="font-inter text-3xl font-semibold text-[#1F2937] text-center mb-8">
      Choose Your Trees
    </h2>
  );
}

function MainContentContainer() {
  return (
    <div className="grid grid-cols-12">
      <CategoriesContainer></CategoriesContainer>
      <h3 className="col-span-8 text-black border">Trees</h3>
      <h3 className="col-span-2 text-black border">Cart</h3>
    </div>
  );
}
