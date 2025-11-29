import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="mt-15 lg:container lg:mx-auto  bg-[#F9F9F9]">
            <div className={"lg:flex lg:justify-between "}>
                <nav className="py-6 lg:px-6 lg:py-9 text-center lg:text-left ">
                    <Link className="inline-block" to="/">
                        <img src="/img/mobile-logo.svg" alt="logo"/>
                    </Link>
                    <p className="leading-4 text-xs md:text-sm md:leading-6 max-w-[293px] md:mt-[10px] mx-auto lg:mx-0 text-[#00000061]">
                        ondimentum faucibus erat. Nam et massa dapibus,
                        tincidunt metus se
                    </p>
                </nav>
                <div className="text-center lg:flex gap-15 text-sm lg:px-6 lg:py-9  text-[#00000099] space-y-7 pb-10">


                    <div className={' lg:text-left'}>
                        <h3 className="font-semibold text-[13px] leading-[20px]   lg:text-[16px] lg:leading-6 text-[#404145] mb-2">Company</h3>
                        <ul className="space-y-3 text-xs  lg:text-[16px] lg:leading-6 leading-[16px]">
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>Haqqımızda</li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>İstifadəçi şərtləri</li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>Bizimlə əlaqə</li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>Tez-tez verilən suallar</li>
                        </ul>
                    </div>


                    <div className={' lg:text-left'}>
                        <h3 className="font-semibold text-[13px] leading-[20px]   lg:text-[16px] lg:leading-6 text-[#404145] mb-2">Contact
                            us</h3>
                        <ul className="space-y-3 text-xs  lg:text-[16px] lg:leading-6 leading-[16px]">
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>+994 (55) 111 11 11</li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>mnagiyeva21@gmail.com</li>
                        </ul>
                    </div>


                    <div className={'lg:pr-6 lg:text-left'}>
                        <h3 className="font-semibold text-[13px] leading-[20px]   lg:text-[16px] lg:leading-6 text-[#404145] mb-2">Policies</h3>
                        <ul className="space-y-3 text-xs  lg:text-[16px] lg:leading-6 leading-[16px]">
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                                <Link to={'/privacy-and-policy'}>Privacy Policy</Link>
                            </li>
                            <li className={'hover:text-[#0F820F] cursor-pointer'}>
                            <Link to={'/privacy-terms'}>Terms of Service</Link>
                        </li>
                        </ul>
                    </div>


                    <div className="flex lg:hidden justify-center gap-3 pt-4">
                        <img
                            src="/img/store.svg"
                            alt="App Store"
                            className="h-[40px]"
                        />
                        <img
                            src="/img/apple.svg"
                            alt="Google Play"
                            className="h-[40px]"
                        />
                    </div>
                </div>
            </div>
            <div className={"hidden text-sm leading-6 border-t border-[#EBEBEB] text-[#00000061] lg:block pt-6 pb-8 px-6"}>
                <p>© 2025 Lorem Ipsum is simply </p>
            </div>
        </footer>
    );
}

export default Footer;
