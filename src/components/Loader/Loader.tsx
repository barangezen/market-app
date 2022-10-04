import BlockUi from "react-block-ui";
import "react-block-ui/style.css";
import { useAppSelector } from "../../store";
interface ILoader {
  children: React.ReactNode;
}
export const Loader: React.FC<ILoader> = ({ children }) => {
  const productsLoader = useAppSelector((state) => state.products.loading);
  const brandsLoader = useAppSelector((state) => state.brands.loading);
  const tagsLoader = useAppSelector((state) => state.tags.loading);
  
  return (
    <BlockUi tag="div" blocking={productsLoader || brandsLoader || tagsLoader}>
      {children}
    </BlockUi>
  );
};
