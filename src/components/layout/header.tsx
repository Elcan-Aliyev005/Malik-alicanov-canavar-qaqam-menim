import {Button, Select} from "@mantine/core"
import {Link} from "react-router-dom"
import {MobileSidebar} from "../ui/sidebars/mobile.sidebar"
import {menuList} from "../../const/index.const.ts";


function Header() {

    return (

        <header className="py-7 fixed z-[999] w-full bg-[#fff]  font-manrope">

            <div className="container mx-auto flex items-center px-4 justify-between">
                <nav className="flex items-center gap-25">
                    <Link to={'/'}>
                        <img src="/img/mobile-logo.svg" alt="logo"/>
                    </Link>
                    <ul className="hidden lg:flex gap-10">
                        {menuList.map((link, index) => {
                            const isActive = window.location.pathname === link.path;

                            return (
                                <li key={index}>
                                    <a
                                        href={link.path}
                                        className={
                                            isActive
                                                ? "text-[#0F820F] font-semibold"
                                                : "text-black hover:text-[#0F820F] transition-colors"
                                        }
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="hidden lg:flex items-center gap-[12px]">
                    <Button className="!rounded-full  !border-[#212121] !py-3 !h-[48px] !px-[50px]" variant="default">
                        <span className="font-normal text-[16px] leading-6">Yüklə</span>
                    </Button>
                    <Select
                        classNames={
                            {
                                input: "!h-[48px] !rounded-full !p-0 !text-center",
                                dropdown: "!border-[#212121] !rounded-[10px] !z-[9999]",
                                option:
                                    "aria-[selected=true]:!bg-[#0F820F] aria-[selected=true]:!text-white",
                            }}
                        className="w-[48px]"
                        defaultValue="AZ"
                        data={["AZ", "EN", "RU"]}
                        styles={{
                            input: {
                                border: "1px solid #212121",
                            }
                        }}
                    />

                </div>
                <MobileSidebar/>
            </div>


        </header>
    )
}

export default Header