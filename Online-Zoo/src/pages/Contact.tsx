import { useLanguage } from "../i18n/LanguageContext"
import Button from "../components/Button";

import TouchTheAnimal from '../../public/images/Touch_the_animal.png';
import Arrow from '../../public/icons/Arrow.svg';

const Contact = () => {
    const { t } = useLanguage();

    return (
        <main className="contact_us">
            <img src={TouchTheAnimal} alt="Touch The Animal" />
            <section className="get_in_touch">
                <div>
                    <h1>{t("contact_us.title")}</h1>
                    <p>{t("contact_us.description")}.</p>
                </div>
                <form action="">
                    <label htmlFor="name"><span>* </span>{t("contact_us.name")}</label><br />
                    <input type="text" name="name" id="name" autoComplete="name" required
                        placeholder={t("contact_us.name_placeholder")} /><br />

                    <label htmlFor="email"><span>* </span>{t("contact_us.email")}</label><br />
                    <input type="text" name="email" id="email" autoComplete="email" required
                        placeholder={t("contact_us.email_placeholder")} /><br />

                    <label htmlFor="subject"><span>* </span>{t("contact_us.subject")}</label><br />
                    <input type="text" name="subject" id="subject" required placeholder={t("contact_us.subject_placeholder")} /><br />

                    <label htmlFor="message"><span>* </span>{t("contact_us.message")}</label><br />
                    <textarea name="message" id="message" required placeholder={t("contact_us.message_placeholder")}></textarea>

                    <Button text={t("contact_us.button")}><img src={Arrow} /></Button>
                </form>
            </section>
        </main>
    )
}

export default Contact