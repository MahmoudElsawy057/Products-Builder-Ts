export function productValidation(product: {
  title: string;
  imageURL: string;
  description: string;
  price: string;
}) {
  const errors: {
    title: string;
    imageURL: string;
    description: string;
    price: string;
  } = {
    title: "",
    imageURL: "",
    description: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "enter a valid title (between 10 and 80 character )";
  }
  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = "enter a valid imageURL";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 800
  ) {
    errors.description =
      "enter a valid description(between 10 and 800 character ) ";
  }
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "enter a valid price ";
  }

  return errors;
}
