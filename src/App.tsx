import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./data";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const renderedProductsList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderInputList = formInputsList.map((input) => (
    <div className="flex flex-col">
      <label
        className="mb-2 text-gray-600 text-sm font-medium"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input id={input.id} type={input.type} name={input.name} />
    </div>
  ));

  return (
    <main className="container">
      <button
        className="w-full bg-indigo-400 text-white rounded-md"
        onClick={openModal}
      >
        ADD
      </button>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 m-2 p-2">
        {renderedProductsList}
      </div>
      <Modal isOpen={isOpen} title="New Product" closeModal={closeModal}>
        <div className=" mt-5 space-y-2">
          <form>{renderInputList}</form>
          <div className="flex justify-between items-center mt-5 space-x-2 ">
            {" "}
            <Button width="w-full" className="bg-red-400 ">
              SUBMIT
            </Button>
            <Button className="bg-indigo-400" onClick={closeModal}>
              CANCLE
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default App;
