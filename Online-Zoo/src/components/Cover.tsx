import { useLanguage } from '../i18n/LanguageContext';
import Button from './Button';

const Cover = () => {
    const { t } = useLanguage();

    return (
        <section className="main_page">
            <div>
                <h1>{t("main_page.title")}</h1>
                <p>{t("main_page.description")}</p>
                <Button text={t("main_page.button")} />
            </div>
        </section>
    )
}

export default Cover