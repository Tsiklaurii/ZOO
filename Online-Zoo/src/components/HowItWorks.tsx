import Welcome from '../../public/images/Welcome.png';
import HowWeWork from '../../public/images/How_we_work.png';

import { useLanguage } from '../i18n/LanguageContext';

const HowItWorks = () => {
    const { t } = useLanguage();

    return (
        <section className="how_it_works">
            <div className="how_it_works_info1">
                <div>
                    <h2>{t("how_it_works.title1")}</h2>
                    <p>{t("how_it_works.description1")}</p>
                </div>
                <img src={Welcome} alt="Welcome" />
            </div>
            <div className="how_it_works_info2">
                <img src={HowWeWork} alt="How We Work" />
                <div>
                    <h2>{t("how_it_works.title2")}</h2>
                    <p>{t("how_it_works.description2")}</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks