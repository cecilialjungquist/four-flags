function MapDot({ name, offsetDistance, id, isHorisontal }) {
    const styles = {
        offsetDistance: offsetDistance,
        flexDirection: isHorisontal ? 'row' : 'column'
    }

    return (
        <div className="map-dot" id={`map-dot-${id}`} style={styles}>
            <h4>{name}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" viewBox="0 0 51 50" fill="none">
                <circle cx="25.5" cy="25" r="25" fill="#FC6BFF" />
            </svg>
        </div>
    );
}

export default MapDot;