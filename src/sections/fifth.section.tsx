import TitleBadge from "../components/ui/badge/title.badge.tsx";
import SectionTitle from "../components/ui/text/section-title.text.tsx";
import HowDoesItWorkCard from "../components/ui/cards/how-does-it-work.card.tsx";
import {fifthSectionData} from "../const/index.const.ts";

function FifthSection() {
    return (
        <section
            id={'how-does-it-work]'}
            className={"py-[25px]"}>
            <div className={'section-header text-center'}>
                <TitleBadge title={'Niyə biz?'}/>
                <SectionTitle className={'mt-3 px-3'}>
                    Xidmət tapmaq asan olmamışdı
                </SectionTitle>
            </div>
            <div className={"how-does-it-work-cards mt-[24px] lg:mt-[36px] grid grid-cols-1 items-start  md:grid-cols-2  lg:grid-cols-3 gap-5"}>
                <div className={'grid grid-cols-1 gap-5'}>
                    {fifthSectionData.slice(0, 2).map((data, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...data} />
                        )
                    })}
                </div>
                <div className={'grid grid-cols-1 md:order-1 lg:order-0 gap-5'}>
                    <div className={"hidden lg:block"}>
                        <img className={'2xl:w-full rounded-[12px]'} src={'/img/men.svg'} alt={'men'}/>
                    </div>
                    {fifthSectionData.slice(2, 3).map((data, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...data} />
                        )
                    })}
                </div>
                <div className={'grid grid-cols-1 gap-5'}>
                    {fifthSectionData.slice(3, 5).map((data, index) => {
                        return (
                            <HowDoesItWorkCard key={index} {...data} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FifthSection
