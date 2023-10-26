import useFetchParkInfo from "../../hooks/useFetchParkInfo";
import Overlay from "../Overlay";
import OverlayHeader from "../OverlayHeader";
import './LoopWhoop.css';

function LoopWhoop() {
    const [ attraction ] = useFetchParkInfo('attraction').filter(attraction => attraction.name === "Loop Whoop");


    return (
        <Overlay className={'loop-whoop'}>
            <OverlayHeader name={attraction.name} desc={attraction.desc} />
            <section className="loop-whoop__animation">
                <svg xmlns="http://www.w3.org/2000/svg" width="342" height="304" viewBox="0 0 342 304" fill="none">
                    <path d="M2.00002 85.82C2.00002 85.82 36.6594 86.866 58.8272 85.82C108 83.5 134.36 4.84136 134.36 4.84136C134.36 4.84136 132.326 85.82 166.325 85.82C204.684 85.82 218.18 85.82 246.594 85.82C269.74 85.82 288.504 67.0563 288.504 43.91C288.504 20.7638 269.74 2 246.594 2C223.447 2 205.238 20.7704 204.684 43.91C204.028 71.2543 233.448 85.82 260.8 85.82C288.504 85.82 295 85.82 319.048 85.82C328.666 85.82 332.545 94.2583 332.545 106.42C332.545 118.581 329.611 129.861 319.048 129.861C305 129.861 267.193 129.861 225.283 129.861C205.799 129.861 190.003 145.657 190.003 165.141C190.003 184.626 205.799 200.421 225.283 200.421C244.768 200.421 259.36 184.589 260.564 165.141C262.158 139.383 232.387 129.861 204.684 129.861C167.789 129.861 148.093 129.861 110.208 129.861C79.4775 129.861 54.5651 154.773 54.5651 185.504C54.5651 216.235 79.4775 241.148 110.208 241.148C140.939 241.148 164.567 216.208 165.852 185.504C167.462 147.015 93.088 129.861 54.5651 129.861C31.1239 129.861 36.5 129.861 20.4688 129.861C10.2688 129.861 2.00004 138.13 2.00002 148.33C1.99997 175.086 2.00002 185.504 2.00002 209.656C2.00003 257.988 36.0672 302 84.3994 302C103.815 302 104.435 257.249 129.151 257.249C153.866 257.249 149.187 302 173.902 302C204.684 302 229.782 302 255.118 302C279.833 302 303.678 281.669 299.869 257.249C296.534 235.868 276.74 223.711 255.118 224.573C234.598 225.391 218.778 237.297 213.918 257.249C206.489 287.748 249.299 302 280.69 302C303.894 302 341.069 302 341.069 302" stroke="#FC6BFF" strokeWidth="2" />
                </svg>
                <div className="loop-whoop__dot"></div>
            </section>
        </Overlay>
    );
}

export default LoopWhoop;