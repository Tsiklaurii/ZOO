import Cover from '../components/Cover'
import Feedback from '../components/Feedback'
import HowItWorks from '../components/HowItWorks'
import MeetPets from '../components/MeetPets'
import QuickDonate from '../components/QuickDonate'

const Home = () => {
    return (
        <div>
            <Cover />
            <HowItWorks />
            <QuickDonate />
            <MeetPets />
            <Feedback />
        </div>
    )
}

export default Home