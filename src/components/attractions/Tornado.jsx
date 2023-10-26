import useFetchParkInfo from "../../hooks/useFetchParkInfo";
import Overlay from "../Overlay";
import OverlayHeader from "../OverlayHeader";
import './Tornado.css';

function Tornado() {
    const [ attraction ] = useFetchParkInfo({ attractions: true }).filter(attraction => attraction.name === 'Tornado');
    console.log(attraction)

    return (
        <Overlay className={'tornado'} >
            <OverlayHeader name={attraction.name} desc={attraction.desc} />
            <section className="tornado__animation">
                <svg className="tornado__tower" xmlns="http://www.w3.org/2000/svg" width="244" height="332" viewBox="0 0 244 332" fill="none">
                    <path d="M2 330H122M242 330H122M122 330V3M122 3L72 53H172L122 3Z" stroke="#FC6BFF" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="tornado__dots">
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="24" viewBox="0 0 152 24" fill="none">
                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#FC6BFF" />
                        <path d="M44 0C50.6274 0 56 5.37258 56 12C56 18.6274 50.6274 24 44 24C37.3726 24 32 18.6274 32 12C32 5.37258 37.3726 0 44 0Z" fill="#FC6BFF" />
                        <path d="M76 0C82.6274 0 88 5.37258 88 12C88 18.6274 82.6274 24 76 24C69.3726 24 64 18.6274 64 12C64 5.37258 69.3726 0 76 0Z" fill="#FC6BFF" />
                        <path d="M108 0C114.627 0 120 5.37258 120 12C120 18.6274 114.627 24 108 24C101.373 24 96 18.6274 96 12C96 5.37258 101.373 0 108 0Z" fill="#FC6BFF" />
                        <path d="M140 0C146.627 0 152 5.37258 152 12C152 18.6274 146.627 24 140 24C133.373 24 128 18.6274 128 12C128 5.37258 133.373 0 140 0Z" fill="#FC6BFF" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="24" viewBox="0 0 152 24" fill="none">
                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#FC6BFF" />
                        <path d="M44 0C50.6274 0 56 5.37258 56 12C56 18.6274 50.6274 24 44 24C37.3726 24 32 18.6274 32 12C32 5.37258 37.3726 0 44 0Z" fill="#FC6BFF" />
                        <path d="M76 0C82.6274 0 88 5.37258 88 12C88 18.6274 82.6274 24 76 24C69.3726 24 64 18.6274 64 12C64 5.37258 69.3726 0 76 0Z" fill="#FC6BFF" />
                        <path d="M108 0C114.627 0 120 5.37258 120 12C120 18.6274 114.627 24 108 24C101.373 24 96 18.6274 96 12C96 5.37258 101.373 0 108 0Z" fill="#FC6BFF" />
                        <path d="M140 0C146.627 0 152 5.37258 152 12C152 18.6274 146.627 24 140 24C133.373 24 128 18.6274 128 12C128 5.37258 133.373 0 140 0Z" fill="#FC6BFF" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="24" viewBox="0 0 152 24" fill="none">
                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#FC6BFF" />
                        <path d="M44 0C50.6274 0 56 5.37258 56 12C56 18.6274 50.6274 24 44 24C37.3726 24 32 18.6274 32 12C32 5.37258 37.3726 0 44 0Z" fill="#FC6BFF" />
                        <path d="M76 0C82.6274 0 88 5.37258 88 12C88 18.6274 82.6274 24 76 24C69.3726 24 64 18.6274 64 12C64 5.37258 69.3726 0 76 0Z" fill="#FC6BFF" />
                        <path d="M108 0C114.627 0 120 5.37258 120 12C120 18.6274 114.627 24 108 24C101.373 24 96 18.6274 96 12C96 5.37258 101.373 0 108 0Z" fill="#FC6BFF" />
                        <path d="M140 0C146.627 0 152 5.37258 152 12C152 18.6274 146.627 24 140 24C133.373 24 128 18.6274 128 12C128 5.37258 133.373 0 140 0Z" fill="#FC6BFF" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="152" height="24" viewBox="0 0 152 24" fill="none">
                        <path d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0Z" fill="#FC6BFF" />
                        <path d="M44 0C50.6274 0 56 5.37258 56 12C56 18.6274 50.6274 24 44 24C37.3726 24 32 18.6274 32 12C32 5.37258 37.3726 0 44 0Z" fill="#FC6BFF" />
                        <path d="M76 0C82.6274 0 88 5.37258 88 12C88 18.6274 82.6274 24 76 24C69.3726 24 64 18.6274 64 12C64 5.37258 69.3726 0 76 0Z" fill="#FC6BFF" />
                        <path d="M108 0C114.627 0 120 5.37258 120 12C120 18.6274 114.627 24 108 24C101.373 24 96 18.6274 96 12C96 5.37258 101.373 0 108 0Z" fill="#FC6BFF" />
                        <path d="M140 0C146.627 0 152 5.37258 152 12C152 18.6274 146.627 24 140 24C133.373 24 128 18.6274 128 12C128 5.37258 133.373 0 140 0Z" fill="#FC6BFF" />
                    </svg>
                </div>
            </section>
        </Overlay>
    );
}

export default Tornado;