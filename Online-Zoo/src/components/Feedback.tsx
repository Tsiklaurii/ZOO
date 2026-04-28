import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Button from "./Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Left from "../../public/icons/Left_white.svg";
import Right from "../../public/icons/Right_white.svg";
import Arrow from "../../public/icons/Arrow.svg";

import FeedbackCard from "./FeedbackCard";

interface Feedback {
    id: number;
    city: string;
    month: string;
    year: string;
    text: string;
    name: string;
}

const Feedback = () => {
    const { t } = useLanguage();

    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const res = await fetch("https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback");
                if (!res.ok) {
                    throw new Error("Server error")
                }
                const data = await res.json();
                setFeedbacks(data.data);
            } catch (err) {
                console.log(err);
                setError(t("errors.fetchError"));
            } finally {
                setLoading(false);
            }
        }
        fetchFeedback();
    }, []);

    const cardsPerSlide = 2;
    const slides: Feedback[][] = [];

    for (let i = 0; i < feedbacks.length; i += cardsPerSlide) {
        slides.push(feedbacks.slice(i, i + cardsPerSlide));
    }

    return (
        <section className="feedback">
            <div className="feedback_info">
                <div className="feedback_title">
                    <h2>{t("feedback.title")}</h2>
                    <p>{t("feedback.description")}</p>
                </div>

                <div className="feedback_wrapper">

                    {loading && (
                        <div className="loader" id="feedbackLoader">
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
                    )}
                    {error && <div className="feedback_fetch_error">{error}</div>}

                    {!loading && !error && (
                        <>
                            <Swiper
                                modules={[Navigation]}
                                loop={true}
                                spaceBetween={30}
                                navigation={{ nextEl: ".feedback_next", prevEl: ".feedback_prev" }}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    1000: { slidesPerView: 2 },
                                }}
                                className="feedback_container"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slide">
                                            {slide.map((item) => (
                                                <FeedbackCard key={item.id} feedback={item} />
                                            ))}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="btns" id="feedbackBtns">
                                <Button className="feedback_prev"><img src={Left} alt="prev" /></Button>
                                <Button className="feedback_next"><img src={Right} alt="next" /></Button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Button className="leave_feedback_btn">
                <span>{t("feedback.button")}</span>
                <img src={Arrow} alt="Arrow" />
            </Button>
        </section>
    );
};

export default Feedback;