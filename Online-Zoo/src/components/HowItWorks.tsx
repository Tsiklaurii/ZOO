import Welcome from '../../public/images/Welcome.png';
import HowWeWork from '../../public/images/How_we_work.png';

const HowItWorks = () => {
    return (
        <section className="how_it_works">
            <div className="how_it_works_info1">
                <div>
                    <h2 data-i18n="how_it_works.title1">Welcome to the Online Zoo!</h2>
                    <p data-i18n="how_it_works.description1">On our website, using live webcams, fans of all ages can
                        observe various animals. Among them, are
                        Giant pandas, eagles, alligators, forest gorillas, African lions, and others. It is the whole
                        natural world in real-time in front of our cameras. We hope you will enjoy watching closely and
                        explore animals' behavior and habitats! Note: animals are not always on view on cameras, so
                        please check back if you don't see anything.</p>
                </div>
                <img src={Welcome} alt="Welcome" />
            </div>
            <div className="how_it_works_info2">
                <img src={HowWeWork} alt="How We Work" />
                <div>
                    <h2 data-i18n="how_it_works.title2">How we work</h2>
                    <p data-i18n="how_it_works.description2">Online Zoo is a nonprofit committed to inspiring awareness
                        and preservation of nature and wild
                        animals in our zoo and worldwide. Every day, our experts work to safeguard the health and
                        wellness of the animals. To continue these efforts, we need your help. We're so grateful to our
                        numerous supporters. All donations, large and small, go a long way to the conservation efforts
                        of our pets.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks