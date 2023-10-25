import './BunnyJump.css';
import OverlayHeader from "../OverlayHeader";
import Overlay from '../Overlay';
import useFetchParkInfo from '../../hooks/useFetchParkInfo';

function BunnyJump() {
    const attraction = useFetchParkInfo({ name: "Bunny Jump" });

    return (
        <Overlay className={"bunny-jump"}>
            <OverlayHeader name={attraction.name} desc={attraction.desc} />

            <section className="bunny-jump__svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="361" height="331" viewBox="0 0 361 331" fill="none">
                    <path d="M2 329H180.5M359 329H180.5M180.5 329V2" stroke="#FC6BFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg className="bunny-jump__dots" xmlns="http://www.w3.org/2000/svg" width="24" height="152" viewBox="0 0 24 152" fill="none">
                    <path d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" fill="#FC6BFF" />
                    <path d="M24 44C24 50.6274 18.6274 56 12 56C5.37258 56 0 50.6274 0 44C0 37.3726 5.37258 32 12 32C18.6274 32 24 37.3726 24 44Z" fill="#FC6BFF" />
                    <path d="M24 76C24 82.6274 18.6274 88 12 88C5.37258 88 0 82.6274 0 76C0 69.3726 5.37258 64 12 64C18.6274 64 24 69.3726 24 76Z" fill="#FC6BFF" />
                    <path d="M24 108C24 114.627 18.6274 120 12 120C5.37258 120 0 114.627 0 108C0 101.373 5.37258 96 12 96C18.6274 96 24 101.373 24 108Z" fill="#FC6BFF" />
                    <path d="M24 140C24 146.627 18.6274 152 12 152C5.37258 152 0 146.627 0 140C0 133.373 5.37258 128 12 128C18.6274 128 24 133.373 24 140Z" fill="#FC6BFF" />
                </svg>
            </section>
        </Overlay>
    );
}

export default BunnyJump;