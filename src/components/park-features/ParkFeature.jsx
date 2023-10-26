import { useParams } from "react-router-dom";
import Overlay from "../Overlay";
import OverlayHeader from "../OverlayHeader";
import useFetchParkInfo from "../../hooks/useFetchParkInfo";

function ParkFeature() {
    const id = Number(useParams().id);
    const [ parkFeature ] = useFetchParkInfo().filter(parkFeature => parkFeature.id === id);

    return ( 
        <Overlay className={"park-feature"}>
            <OverlayHeader name={parkFeature.name} desc={parkFeature.desc} />
            <figure>
                <img src={`src/assets/${parkFeature.svg}`} />
            </figure>
        </Overlay>
    );
}

export default ParkFeature;