import AttractionHeader from "../AttractionHeader";
import Overlay from "../Overlay";
import './CherrysCars.css';

function CherrysCars() {
    const desc = "Mauris justo lorem, posuere ut est in, pharetra maximus ex. Vivamus a elementum felis. Integer non bibendum erat. Nullam pretium imperdiet augue, non gravida mauris facilisis ac. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."

    return (
        <Overlay>
            <article className="cherrys-cars">
                <AttractionHeader name={"Cherry's Cars"} desc={desc} />
                <div className="cherrys-cars__svg">
                    <svg className="cherrys-cars__dot cherrys-cars__dot-1" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                        <circle cx="24.5" cy="24.5" r="24.5" fill="#FC6BFF" />
                    </svg>
                    <svg className="cherrys-cars__dot cherrys-cars__dot-2" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                        <circle cx="24.5" cy="24.5" r="24.5" fill="#FC6BFF" />
                    </svg>
                </div>
            </article>
        </Overlay>
    );
}

export default CherrysCars;