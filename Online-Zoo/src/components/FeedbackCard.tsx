interface Feedback {
    id: number;
    city: string;
    month: string;
    year: string;
    text: string;
    name: string;
}

type FeedbackCardProps = {
    feedback: Feedback;
};

const FeedbackCard = ({ feedback }: FeedbackCardProps) => {
    return (
        <div className="feedback_card">
            <img src="/icons/Feedback_svg.svg" alt="Feedback" />

            <div className="date">
                {feedback.city}, {feedback.month} {feedback.year}
            </div>

            <div className="text">{feedback.text}</div>

            <div className="name">{feedback.name}</div>
        </div>
    );
};

export default FeedbackCard;