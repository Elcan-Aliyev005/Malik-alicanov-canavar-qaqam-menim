import TitleBadge from "../components/ui/badge/title.badge.tsx";
import SectionTitle from "../components/ui/text/section-title.text.tsx";
import HowDoesItWorkCard from "../components/ui/cards/how-does-it-work.card.tsx";
import {howDoesItWorkData} from "../const/index.const.ts";

function HowDoesItWorkSection() {
    return (
        <section
            id={'how-does-it-work]'}
            className={"py-[25px]"}>
            <div className={'section-header text-center'}>
                <TitleBadge title={'Necə işləyir?'}/>
                <SectionTitle className={'mt-3 px-3'}>
                    Xidmət tapmaq bu qədər asan olmamışdı - <br/>
                    ehtiyacınızı qeyd edin, qalanını yaxın icraçılar həll etsin.
                </SectionTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] lg:flex-row flex flex-col gap-5"}>
                {howDoesItWorkData.map((data, index) => {
                    return (
                        <HowDoesItWorkCard key={index} {...data} />
                    )
                })}
            </div>
        </section>
    )
}

export default HowDoesItWorkSection
