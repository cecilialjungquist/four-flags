import AttractionHeader from "../AttractionHeader";
import Overlay from "../Overlay";

function CherrysCars() {
    const desc = "Mauris justo lorem, posuere ut est in, pharetra maximus ex. Vivamus a elementum felis. Integer non bibendum erat. Nullam pretium imperdiet augue, non gravida mauris facilisis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

    return ( 
        <Overlay>
            <article className="cherrys-cars">
                <AttractionHeader name={"Cherry's Cars"} desc={desc} />

            </article>
        </Overlay>
    );
}

export default CherrysCars;