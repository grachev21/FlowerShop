export default interface IProduct {
  id: number;
  typeproduct: {
    id: number;
    name: string;
    image: string;
    slogan: string;
  };
  category: {
    id: number;
    name: string;
  };
  name: string;
  price: number;
  description: string;
  photos: [{ id: number; image: string }];
}
