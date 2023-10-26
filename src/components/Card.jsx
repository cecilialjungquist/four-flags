function Card({ className, title, img, desc}) {
    return (
        <article className={className}>
            <img src={img} />
            <h3>{title}</h3>
            <p>{desc}</p>
        </article>
    );
}

export default Car
