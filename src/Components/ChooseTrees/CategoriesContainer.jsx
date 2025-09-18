import { Suspense, use } from "react";

const getCategoriesPromise = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );

  return response.json();
};

export default function CategoriesContainer() {
  const categoriesPromise = getCategoriesPromise();

  return (
    <div className="col-span-2 text-black border">
      <h4 className="font-inter text-xl font-semibold text-black mb-4">
        Categories
      </h4>
      <Suspense fallback={<CategoriesFallback></CategoriesFallback>}>
        <Categories categoriesPromise={categoriesPromise}></Categories>
      </Suspense>
    </div>
  );
}

function Categories({ categoriesPromise }) {
  const result = use(categoriesPromise);
  const categories = result.categories;

  return (
    <div className="flex flex-col gap-3">
      <CategoryButton category={{ category_name: "All" }}></CategoryButton>
      {categories.map((category) => (
        <CategoryButton key={category.id} category={category}></CategoryButton>
      ))}
    </div>
  );
}

function CategoryButton({ category: { category_name: name } }) {
  return (
    <button className="cursor-pointer rounded p-1 font-inter text-base font-normal text-[#1F2937] text-left hover:bg-[#1FB657] hover:text-white">
      {name}
    </button>
  );
}

function CategoriesFallback() {
  return (
    <div className="flex flex-col gap-3">
      <div className="skeleton h-6 bg-gray-100"></div>
      <div className="skeleton h-6 bg-gray-100"></div>
      <div className="skeleton h-6 bg-gray-100"></div>
      <div className="skeleton h-6 bg-gray-100"></div>
      <div className="skeleton h-6 bg-gray-100"></div>
      <div className="skeleton h-6 bg-gray-100"></div>
      <div className="skeleton h-6 bg-gray-100"></div>
    </div>
  );
}
