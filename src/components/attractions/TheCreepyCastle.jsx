import Overlay from '../Overlay';
import OverlayHeader from '../OverlayHeader';
import useFetchParkInfo from '../../hooks/useFetchParkInfo';
import './TheCreepyCastle.css';

function TheCreepyCastle() {
    const attraction = useFetchParkInfo({ name: "The Creepy Castle" });

    

    // className='the-creepy-castle__house'
    return (
        <Overlay className={'the-creepy-castle'}>
            <OverlayHeader name={attraction.name} desc={attraction.desc} />
            <section className='the-creepy-castle__animation'>
                <svg className='the-creepy-castle__house' xmlns="http://www.w3.org/2000/svg" width="370" height="396" viewBox="0 0 370 396" fill="none">
                    <path d="M108.471 394H228.954M108.471 394V134.06M108.471 394H0M228.954 394H368V48.6253L333.238 75.5282L298.477 48.6253L263.715 75.5282L228.954 48.6253V134.06M228.954 394V134.06M108.471 134.06H228.954M108.471 134.06H57.5114L124.123 1" stroke="#FC6BFF" strokeWidth="4" />
                </svg>
                <div className="the-creepy-castle__window"></div>
                <div className="the-creepy-castle__dot"></div>
            </section>
        </Overlay>
    );
}

export default TheCreepyCastle;