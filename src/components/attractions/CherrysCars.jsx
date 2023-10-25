import OverlayHeader from "../OverlayHeader";
import Overlay from "../Overlay";
import './CherrysCars.css';
import useFetchParkInfo from "../../hooks/useFetchParkInfo";

function CherrysCars() {
    const [ attraction ] = useFetchParkInfo({ isAttraction: true })
        .filter(attraction => attraction.name === "Cherry's Cars");

    return (
        <Overlay className={"cherrys-cars"}>
            <OverlayHeader name={attraction.name} desc={attraction.desc} />
            <section className="cherrys-cars__animation">
                <div className="cherrys-cars__dot cherrys-cars__dot-1"></div>
                <div className="cherrys-cars__dot cherrys-cars__dot-2"></div>

                <div className="cherrys-cars__dot cherrys-cars__dot-3"></div>
                <div className="cherrys-cars__dot cherrys-cars__dot-4"></div>

                <div className="cherrys-cars__dot cherrys-cars__dot-5"></div>
                <div className="cherrys-cars__dot cherrys-cars__dot-6"></div>
            </section>
        </Overlay>
    );
}

export default CherrysCars;