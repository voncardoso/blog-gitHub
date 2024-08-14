import ImgHeader from "../../assets/cover_2x.png";
export const Header = () => {
  return (
    <header className="w-fit ">
      <img src={ImgHeader as string} />
    </header>
  );
}