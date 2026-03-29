import { Link } from "react-router-dom"
import Button from "./Button"
import { useLanguage } from "../i18n/LanguageContext"

interface Pet {
    id: number,
    name: string,
    commonName: string,
    description: string
}

type AnimalCardProps = {
    pet: Pet,
    image: string,
}

const AnimalCard = ({ pet, image }: AnimalCardProps) => {
    const { t } = useLanguage();

    return (
        <div className="pet_card">
            <Link to="/zoos">
                <div className="name">{pet.name}</div>

                <img src={image} alt={pet.name} />

                <div className="card_info">
                    <div>
                        <h3>{pet.commonName}</h3>
                        <p>{pet.description}</p>
                    </div>

                    <Button text={t('main_page.button')} />
                </div>
            </Link>
        </div>
    )
}

export default AnimalCard