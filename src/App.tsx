import { ChangeEvent, useState, FormEvent } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./data";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";
import { IProduct } from "./interfaces";
import { productValidation } from "./validations";
import ErrorMessage from "./components/errorMessage";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      imageURL: "",
      name: "",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeHandler(): void {
    setIsOpen(false);
    setProduct(defaultProductObj);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({ title, description, imageURL, price });
    const hasError = Object.values(errors).some((err) => err !== "");

    if (hasError) {
      setErrors(errors);
    }
  }

  const renderedProductsList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderInputList = formInputsList.map((input) => (
    <div key={input.id} className="flex flex-col">
      <label
        className="mb-2 text-gray-600 text-sm font-medium"
        htmlFor={input.id}
      >
        {input.label}
      </label>
      <Input
        id={input.id}
        type={input.type}
        name={input.name}
        value={product[input.name]}
        onChange={inputChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
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
          <form onSubmit={submitHandler}>
            {renderInputList}
            <div className="flex justify-between items-center mt-5 space-x-2 ">
              {" "}
              <Button width="w-full" className="bg-red-400 ">
                SUBMIT
              </Button>
              <Button className="bg-indigo-400" onClick={closeHandler}>
                CANCLE
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </main>
  );
};

export default App;
