type AnimalProps = {
    svg: string,
    alt: string
}

const Animal = ({ svg, alt }: AnimalProps) => {
    return (
        <div>
            <div className="circle"><img src={svg} alt={alt} /></div>
        </div>
    )
}

export default Animal