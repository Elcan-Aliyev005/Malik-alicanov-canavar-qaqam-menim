import { Button, Select } from "@mantine/core"
import { Link, NavLink } from "react-router-dom"
import { MobileSidebar } from "../ui/sidebars/mobile.sidebar"


function Header() {

    return (

        <header className="py-7 px-4" >

            <div className="container mx-auto flex items-center  justify-between">
                <nav className="flex items-center gap-25" >
                    <Link to={'/'}>
                        <img src="/img/mobile-logo.svg" alt="logo" />
                    </Link>
                    <ul className="hidden md:flex gap-10">
                        <li>
                            <NavLink to={"/"}>Helplly   </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Biznes</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Niyə biz</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Faq</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>Bizimlə əlaqə</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="hidden md:flex items-center gap-[12px]">
                    <Button className="!rounded-full !py-3 !h-[48px] !px-[50px]" variant="default">
                        Yüklə
                    </Button>
                    <Select
                        classNames={{ input: "!h-[48px] !rounded-full !p-0 !text-center"}}
                        className="w-[48px] "
                        defaultValue={'AZ'}
                        placeholder="Pick value"
                        data={['AZ', 'EN', 'RU']}
                    />
                </div>

                <MobileSidebar />
            </div>


        </header>
    )
}

export default Header