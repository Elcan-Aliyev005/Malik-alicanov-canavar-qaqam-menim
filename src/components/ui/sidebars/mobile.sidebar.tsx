import {useDisclosure} from "@mantine/hooks";
import {Drawer} from "@mantine/core";
import {Link} from "react-router-dom";

export function MobileSidebar() {
    const [opened, {open, close}] = useDisclosure(false);

    return (
        <div className="lg:hidden">

            <Drawer
                offset={0}
                position="bottom"
                padding="md"
                radius={0}
                opened={opened}
                onClose={close}

                classNames={{
                    body: "px-5 py-6",
                }}
            >

                <div className="mb-8 flex justify-between items-center">
                    <Link to="/" onClick={close}>
                        <img src="/img/mobile-logo.svg" className="h-[30px]" alt="logo"/>
                    </Link>


                </div>


                <ul className="space-y-5 text-[18px] font-medium text-[#212121E3]">
                    <li>
                        <Link to="/" onClick={close}>Haqqımızda</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={close}>Xidmətlər</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={close}>Bizimlə əlaqə</Link>
                    </li>
                    <li>
                        <Link to="/faq" onClick={close}>Tez-tez verilən suallar</Link>
                    </li>
                    <li>
                        <Link to="/privacy-and-policy" onClick={close}>Privacy Policy</Link>
                    </li>

                    <li>
                        <Link to="/privacy-terms" onClick={close}>Terms of Service</Link>
                    </li>
                </ul>


            </Drawer>


            <div onClick={open}>
                <img src="/icons/menu-bars.svg" alt="menu-bar"/>
            </div>
        </div>
    );
}
