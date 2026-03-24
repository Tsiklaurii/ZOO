import Arrow from '../../public/icons/Arrow.svg';

const Cover = () => {
    return (
        <section className="main_page">
            <div>
                <h1 data-i18n="main_page.title">Watch your favorite animal online</h1>
                <p data-i18n="main_page.description">Explore the exciting and mysterious world of wild animals in a
                    natural setting without leaving your
                    home.</p>
                <button data-i18n="main_page.button">View Live Cam<img src={Arrow} alt="Arrow" /></button>
            </div>
        </section>
    )
}

export default Cover