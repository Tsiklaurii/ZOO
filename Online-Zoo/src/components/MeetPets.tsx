import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Button from "./Button";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Left from '../../public/icons/Left.svg';
import Right from '../../public/icons/Right.svg';
import AnimalCard from "./AnimalCard";

interface Pet {
    id: number,
    name: string,
    commonName: string,
    description: string
}

const petImages: Record<number, string> = {
    1: "/images/Panda.png",
    2: "/images/Lemur.png",
    3: "/images/Gorilla.png",
    4: "/images/Alligator.png",
    5: "/images/Eagles.png",
    6: "/images/Koala.png",
    7: "/images/Lion.png",
    8: "/images/Tiger.png",
    9: "/images/Red_panda.jpg",
    10: "/images/Mountain_gorilla.jpg",
    11: "/images/African_elephant.jpg",
    12: "/images/Sea_otter.jpg",
    13: "/images/Bengal_tiger.jpg",
    14: "/images/Gray_wolf.jpg",
    15: "/images/Fennec_fox.jpg",
    16: "/images/Grizzly_bear.jpg",
    17: "/images/Bottlenose_dolphin.jpg",
    18: "/images/Snow_leopard.jpg",
    19: "/images/Polar_bear.jpg",
    20: "/images/Jaguar.jpg",
    21: "/images/Ring_tailed_lemur.jpg",
    22: "/images/White_rhinoceros.jpg",
    23: "/images/Arctic_fox.jpg",
    24: "/images/Saltwater_crocodile.jpg",
    25: "/images/Scarlet_macaw.jpg",
    26: "/images/Comodo_dragon.jpg",
    27: "/images/Sloth.jpg",
    28: "/images/Cheetah.jpg"
}

const MeetPets = () => {
    const { t } = useLanguage();

    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const res = await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets");
                if (!res.ok) {
                    throw new Error("Server error");
                }
                const data = await res.json();
                setPets(data.data);
            } catch (err) {
                console.log(err)
                setError(t("errors.fetchError"));
            } finally {
                setLoading(false);
            }
        }
        fetchPets();
    }, []);

    const cardsPerSlide = 2;
    const slides: Pet[][] = [];

    for (let i = 0; i < pets.length; i += cardsPerSlide) {
        slides.push(pets.slice(i, i + cardsPerSlide));
    }

    return (
        <section className="meet_pets">
            <div className="meet_pets_info">
                <h2>{t('meet_pets.title')}</h2>

                <p className="info">{t('meet_pets.description')}</p>

                {!loading && !error && (
                    <div className="btns">
                        <Button className="prev_btn"><img src={Left} alt="Left" /></Button>
                        <Button className="next_btn"><img src={Right} alt="right" /></Button>
                    </div>
                )}
            </div>

            <div className="pets_wrapper">
                {loading &&
                    <div className="loader" id="petsLoader">
                        <svg width="200" height="200" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="blue">
                            <g fill="none" fillRule="evenodd">
                                <g transform="translate(1 1)" strokeWidth="2">
                                    <circle stroke="#d3d3d3" cx="18" cy="18" r="18" />
                                    <path d="M36 18c0-9.94-8.06-18-18-18">
                                        <animateTransform attributeName="transform" type="rotate" from="0 18 18"
                                            to="360 18 18" dur="1s" repeatCount="indefinite" />
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>
                }
                {error && <div className="pets_error">{error}</div>}

                {!loading && !error && (
                    <Swiper
                        modules={[Navigation]}
                        loop={true}
                        spaceBetween={40}
                        navigation={{ nextEl: ".next_btn", prevEl: ".prev_btn" }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            1000: { slidesPerView: 2 },
                            1200: { slidesPerView: 2.5 },
                            1700: { slidesPerView: 3 },
                            1900: { slidesPerView: 3.6 }
                        }}
                        className="pets_container"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide">
                                    {slide.map((pet) => (
                                        <AnimalCard key={pet.id} pet={pet} image={petImages[pet.id]} />
                                    ))}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>

            <Link to="/zoos">
                <Button text={t("meet_pets.button")} className="favorite_btn" />
            </Link>
        </section>
    );
}

export default MeetPets