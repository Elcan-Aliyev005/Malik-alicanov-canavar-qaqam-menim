import TitleBadge from "../components/ui/badge/title.badge.tsx";
import SectionTitle from "../components/ui/text/section-title.text.tsx";
import {reachTheRightCustomerData} from "../const/index.const.ts";
import ReachTheRightCustomerCard from "../components/ui/cards/reach-the-right-customer-card.tsx";

function ReachTheRightCustomerSection() {
    return (
        <section
            id={'reach-the-right-customer-section'}
            className={"py-[25px]"}>
            <div className={'section-header text-center'}>
                <TitleBadge title={'Biznes necə işləyir?'}/>
                <SectionTitle className={'mt-3 px-3'}>
                    Doğru Müştəriyə Çatın
                </SectionTitle>
            </div>
            <div className={"reach-the-right-customer-cards mt-[24px] grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 lg:mt-[36px] "}>
                {reachTheRightCustomerData.map((data, index) => {
                    return (
                        <ReachTheRightCustomerCard key={index} {...data} />
                    )
                })}
            </div>
        </section>
    )
}

export default ReachTheRightCustomerSection
