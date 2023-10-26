import Button from "./Button";

function Card({ className = '', title, svg, desc }) {

    function handleClick() {
        
    }

    return (
        <article className={`card ${className}`}>
            <section className="card__section">
                <figure>
                    <img src={`src/assets/${svg}`} />
                </figure>
                <h3>{title}</h3>
                <p>{desc}</p>
            </section>
            <Button action={handleClick}>Book you stay now!</Button>
        </article>
    );
}

export default Card;
