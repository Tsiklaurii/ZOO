import { useLanguage } from '../i18n/LanguageContext';

import Arrow from '../../public/icons/Arrow.svg';

const QuickDonate = () => {
    const { t } = useLanguage();

    return (
        <section className="quick_donate">
            <div className="quick_donate_info">
                <div>
                    <h3>{t('quick_donate.title1')}</h3>
                    <p>{t('quick_donate.description')}</p>
                </div>
                <div>
                    <h4>{t('quick_donate.title2')}</h4>
                    <button id="donateBtn">
                        <div className="btn_text">{t('quick_donate.button')}</div>
                        <div className="arrow"><img src={Arrow} alt="Arrow" /></div>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default QuickDonate