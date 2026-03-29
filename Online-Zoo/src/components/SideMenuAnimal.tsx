type AnimalProps = {
    svg: string,
    alt: string
}

const SideMenuAnimal = ({ svg, alt }: AnimalProps) => {
    return (
        <div>
            <div className="circle"><img src={svg} alt={alt} /></div>
        </div>
    )
}

export default SideMenuAnimal