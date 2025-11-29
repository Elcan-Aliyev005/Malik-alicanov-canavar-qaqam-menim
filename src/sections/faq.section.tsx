import {FaqAccordion} from "../components/ui/accordions/faq.accordion.tsx";
import SectionTitle from "../components/ui/text/section-title.text.tsx";

function FaqSection() {
    return (
        <section id={'faq-section'} className={"py-[25px]"}>
            <SectionTitle className={'mb-8'}>
                Tez-Tez Verilən Suallar
            </SectionTitle>


            <div>
                <FaqAccordion/>
            </div>
        </section>
    )
}

export default FaqSection
