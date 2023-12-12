import { IProduct } from "../interfaces";
import Button from "./ui/Button";
import Image from "./Image";
import { textSlicer } from "../utils";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, imageURL, description } = product;
  return (
    <div className="border rounded-md flex flex-col p-2 max-w-sm   mx-auto">
      <Image
        className="rounded-md mb-2 lg:object-cover w-full h-52"
        alt={title}
        imageURL={imageURL}
      />
      <h3>{title}</h3>
      <p>{textSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 rounded-full bg-indigo-400 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-yellow-400 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-red-400 cursor-pointer"></span>
      </div>
      <div className="flex justify-between items-center">
        <span>$500,000</span>

        <Image
          className="w-10 h-10 rounded-full object-cover"
          alt="Ferrari F8"
          imageURL="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex justify-between items-center mt-5 space-x-2 ">
        <Button
          width="w-full"
          className="bg-red-400 "
          onClick={() => console.log("clicked")}
        >
          EDIT
        </Button>
        <Button className="bg-indigo-400">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
