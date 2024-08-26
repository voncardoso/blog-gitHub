import {Header} from "../Header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <section className="block sm:hidden flex justify-center items-center h-screen w-full">
                <div
                    className="flex items-center justify-center  text-center p-4 bg-base-post text-white rounded-md m-2">
                    Este conteúdo não está disponível para mobile.
                </div>
            </section>

            <div className="hidden sm:block">
                <Header/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}