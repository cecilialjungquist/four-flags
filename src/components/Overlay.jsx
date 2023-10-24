import { useNavigate } from "react-router-dom";

function Overlay({ children }) {
    const navigate = useNavigate();

    function toggleOverlay(event) {
        if (event.target.className.includes('overlay')) {    
            navigate(-1);
        }
    }

    return ( 
        <section className="overlay" onClick={toggleOverlay}>
            {children}
        </section>
    );
}

export default Overlay;