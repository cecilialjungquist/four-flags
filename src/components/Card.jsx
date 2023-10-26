import Button from "./Button";

function Card({ className = '', name, svg, desc }) {

    function handleClick() {
        
    }

    return (
        <article className={`card ${className}`}>
            <section className="card__section">
                <figure>
                    <img src={`src/assets/${svg}`} />
                </figure>
                <h3>{name}</h3>
                <p>{desc}</p>
            </section>
            <Button action={handleClick}>Book you stay now!</Button>
        </article>
    );
}

export default Card;
