import AttractionHeader from "../AttractionHeader";
import Overlay from "../Overlay";
import './CherrysCars.css';

function CherrysCars() {
    const desc = "Mauris justo lorem, posuere ut est in, pharetra maximus ex. Vivamus a elementum felis. Integer non bibendum erat. Nullam pretium imperdiet augue, non gravida mauris facilisis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."



    return (
        <Overlay>
            <article className="cherrys-cars">
                <AttractionHeader name={"Cherry's Cars"} desc={desc} />
                <section className="cherrys-cars__animation">
                    <div className="cherrys-cars__dot cherrys-cars__dot-1"></div>
                    <div className="cherrys-cars__dot cherrys-cars__dot-2"></div>

                    <div className="cherrys-cars__dot cherrys-cars__dot-3"></div>
                    <div className="cherrys-cars__dot cherrys-cars__dot-4"></div>

                    <div className="cherrys-cars__dot cherrys-cars__dot-5"></div>
                    <div className="cherrys-cars__dot cherrys-cars__dot-6"></div>
                </section>
            </article>
        </Overlay>
    );
}

export default CherrysCars;