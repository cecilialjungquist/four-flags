import { useParams } from "react-router-dom";
import Overlay from "../Overlay";
import OverlayHeader from "../OverlayHeader";
import useFetchParkInfo from "../../hooks/useFetchParkInfo";

function Facility() {
    const id = Number(useParams().id);
    const [ facility ] = useFetchParkInfo({ attractions: false }).filter(facility => facility.id === id);

    return ( 
        <Overlay className={"facility"}>
            <OverlayHeader name={facility.name} desc={facility.desc} />
            <figure>
                <img src={`src/assets/${facility.svg}`} />
            </figure>
        </Overlay>
    );
}

export default Facility;