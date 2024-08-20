import {Links} from "../Links";


export const Profile = () => {
  return (
    <div className="flex rounded-[10px] gap-8 justify-center items-center justify-between bg-base-profile py-8 px-10 w-full max-w-[864px] m-auto">
      <img className={"w-[148px] h-[148px] bg-base-label rounded-lg"} src={""}/>
        <div className={"w-full"}>
            <header className={"flex items-center justify-between mb-2"}>
                <h1 className={"text-2xl font-bold"}>Cameron Williamson</h1>
                <Links title={"GITHUB"} url={""}/>
            </header>
            <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
            <ul className={"flex gap-4 mt-6"}>
                <li>
                    <img src={""} alt=""/>
                    <p>5 completados</p>
                </li>
                <li>
                    <img src={""} alt=""/>
                    <p>5 completados</p>
                </li>
            </ul>
        </div>
    </div>
  );
}