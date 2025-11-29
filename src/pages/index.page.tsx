

import MoodboardSection from "../sections/moodboard.section.tsx";
import HowDoesItWorkSection from "../sections/how-does-it-work.section.tsx";
import ThirdSection from "../sections/third.section.tsx";
import ReachTheRightCustomerSection from "../sections/reach-the-right-customer.section.tsx";
import FourthSection from "../sections/fourth.section.tsx";
import FifthSection from "../sections/fifth.section.tsx";
import SixthSection from "../sections/sixth.section.tsx";
import FaqSection from "../sections/faq.section.tsx";
import LastSection from "../sections/last.section.tsx";
import {useEffect} from "react";

function HomePage() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <div className={'px-4'}>
            <MoodboardSection/>
            <HowDoesItWorkSection/>
            <ThirdSection/>
            <ReachTheRightCustomerSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <FaqSection/>
            <LastSection/>
        </div>
    )
}

export default HomePage