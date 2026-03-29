import SideMenuAnimal from '../components/SideMenuAnimal';
import { useLanguage } from '../i18n/LanguageContext';
import QuickDonate from '../components/QuickDonate';

import LiveVector from '../../public/icons/Live_vector.svg';
import PandaVector from '../../public/icons/Panda_vector.svg';
import ExpandArrows from '../../public/icons/Expand_arrows.svg';
import ExpandArrow from '../../public/icons/Expand_arrow.svg';
import EagleVector from '../../public/icons/Eagle_vector.svg';
import GorillaVector from '../../public/icons/Gorilla_vector.svg';
import LemurVector from '../../public/icons/Lemur_vector.svg';
import PandaCam from '../../public/images/Panda_cam.png';
import PandaCam1 from '../../public/images/Panda_cam_1.png';
import PandaCam2 from '../../public/images/Panda_cam_2.png';
import PandaCam3 from '../../public/images/Panda_cam_3.png';
import Right from '../../public/icons/Right.svg';
import Left from '../../public/icons/Left.svg';
import DidYouKnowPanda from '../../public/images/Did_you_know_panda.png';

const Zoos = () => {
    const { t } = useLanguage();

    return (
        <main>
            <div className="side_panel">
                <div className="expand1">
                    <div>
                        <h3>Live</h3>
                        <img src={LiveVector} alt="Live" />
                    </div>
                    <img className="expand_arrows" src={ExpandArrows} alt="Expand arrows" />
                </div>
                <SideMenuAnimal svg={PandaVector} alt={PandaVector} />
                <SideMenuAnimal svg={EagleVector} alt={EagleVector} />
                <SideMenuAnimal svg={GorillaVector} alt={GorillaVector} />
                <SideMenuAnimal svg={LemurVector} alt={LemurVector} />
                <div className="expand2">
                    <img src={ExpandArrow} alt="Expand arrow" />
                </div>
            </div>

            <section className="live_cams">
                <h1>{t('zoos.title1')}</h1>
                <a href="https://www.youtube.com/watch?v=yYp_Shk7XcI" target="_blank">
                    <img src={PandaCam} alt="Panda Cam" />
                </a>
                <div className="more_cams">
                    <h2>{t('zoos.title2')}</h2>
                    <div className="more_cams_carousel">
                        <img src={Left} alt="Left Arrow" />
                        <div className="more_cams_imgs">
                            <a href="https://www.youtube.com/watch?v=yYp_Shk7XcI" target="_blank">
                                <img src={PandaCam1} alt="Panda Cam 1" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=yYp_Shk7XcI" target="_blank">
                                <img src={PandaCam2} alt="Panda Cam 2" />
                            </a>
                            <a href="https://www.youtube.com/watch?v=yYp_Shk7XcI" target="_blank">
                                <img src={PandaCam3} alt="Panda Cam 3" />
                            </a>
                        </div>
                        <img src={Right} alt="Right Arrow" />
                    </div>
                </div>
            </section>

            <QuickDonate />

            <section className="information">
                <div className="did_you_know">
                    <h2>{t('zoos.title3')}</h2>
                    <p>{t('zoos.description')}</p>
                </div>
                <div>
                    <div className="animal_info">
                        <div className="list">
                            <p><span>{t('zoos.common_name')}: </span>&nbsp;&nbsp;&nbsp;&nbsp;{t('zoos.name_description')}</p>
                            <p><span>{t('zoos.scientific_name')}: </span>&nbsp;&nbsp;&nbsp;{t('zoos.sci_name_description')}</p>
                            <p><span>{t('zoos.type')}: </span>&nbsp;&nbsp;&nbsp;{t('zoos.type_description')}</p>
                            <p><span>{t('zoos.size')}: </span>&nbsp;&nbsp;&nbsp;{t('zoos.size_description')}</p>
                            <p><span>{t('zoos.diet')}: </span>&nbsp;&nbsp;&nbsp;{t('zoos.diet_description')}</p>
                            <p><span>{t('zoos.habitat')}: </span>&nbsp;&nbsp;&nbsp;{t('zoos.habitat_description')}</p>
                            <p><span>{t('zoos.range')}: </span>&nbsp;&nbsp;&nbsp;{t('zoos.range_description')}</p>
                        </div>
                        <img src={DidYouKnowPanda} alt="Panda" />
                    </div>
                    <h4 data-i18n="zoos.info">{t('zoos.info')}</h4>
                </div>
            </section>
        </main>
    )
}

export default Zoos