import ImgHeader from "../../assets/cover_2x.png";
import {Profile} from "../Profile";
export const Header = () => {
  return (
    <header
        className=" w-full flex flex-col items-center min-h-[296px] h-full bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${ImgHeader as string})`}}>
    </header>
  );
}