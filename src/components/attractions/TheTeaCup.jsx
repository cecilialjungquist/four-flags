import OverlayHeader from "../OverlayHeader";
import Overlay from "../Overlay";
import './TheTeaCup.css';
import useFetchParkInfo from "../../hooks/useFetchParkInfo";

function TheTeaCup() {
    const [ attraction ] = useFetchParkInfo('attraction').filter(attraction => attraction.name === "The Tea Cup");

    return (
        <Overlay className={"the-tea-cup"}>
                <OverlayHeader name={attraction.name} desc={attraction.desc} />
                <section className="the-tea-cup__animation">
                    <div className="the-tea-cup__big">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 63 63" fill="none">
                            <path d="M40 16.5C40 21.1944 36.1944 25 31.5 25C26.8056 25 23 21.1944 23 16.5C23 11.8056 26.8056 8 31.5 8C36.1944 8 40 11.8056 40 16.5Z" fill="#FC6BFF" />
                            <path d="M61 31.5C61 47.7924 47.7924 61 31.5 61C15.2076 61 2 47.7924 2 31.5C2 15.2076 15.2076 2 31.5 2C47.7924 2 61 15.2076 61 31.5ZM38 16.5C38 20.0899 35.0899 23 31.5 23C27.9101 23 25 20.0899 25 16.5C25 12.9101 27.9101 10 31.5 10C35.0899 10 38 12.9101 38 16.5ZM31.5 27C37.299 27 42 22.299 42 16.5C42 10.701 37.299 6 31.5 6C25.701 6 21 10.701 21 16.5C21 22.299 25.701 27 31.5 27Z" stroke="#FC6BFF" strokeWidth="4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 63 63" fill="none">
                            <path d="M40 16.5C40 21.1944 36.1944 25 31.5 25C26.8056 25 23 21.1944 23 16.5C23 11.8056 26.8056 8 31.5 8C36.1944 8 40 11.8056 40 16.5Z" fill="#FC6BFF" />
                            <path d="M61 31.5C61 47.7924 47.7924 61 31.5 61C15.2076 61 2 47.7924 2 31.5C2 15.2076 15.2076 2 31.5 2C47.7924 2 61 15.2076 61 31.5ZM38 16.5C38 20.0899 35.0899 23 31.5 23C27.9101 23 25 20.0899 25 16.5C25 12.9101 27.9101 10 31.5 10C35.0899 10 38 12.9101 38 16.5ZM31.5 27C37.299 27 42 22.299 42 16.5C42 10.701 37.299 6 31.5 6C25.701 6 21 10.701 21 16.5C21 22.299 25.701 27 31.5 27Z" stroke="#FC6BFF" strokeWidth="4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 63 63" fill="none">
                            <path d="M40 16.5C40 21.1944 36.1944 25 31.5 25C26.8056 25 23 21.1944 23 16.5C23 11.8056 26.8056 8 31.5 8C36.1944 8 40 11.8056 40 16.5Z" fill="#FC6BFF" />
                            <path d="M61 31.5C61 47.7924 47.7924 61 31.5 61C15.2076 61 2 47.7924 2 31.5C2 15.2076 15.2076 2 31.5 2C47.7924 2 61 15.2076 61 31.5ZM38 16.5C38 20.0899 35.0899 23 31.5 23C27.9101 23 25 20.0899 25 16.5C25 12.9101 27.9101 10 31.5 10C35.0899 10 38 12.9101 38 16.5ZM31.5 27C37.299 27 42 22.299 42 16.5C42 10.701 37.299 6 31.5 6C25.701 6 21 10.701 21 16.5C21 22.299 25.701 27 31.5 27Z" stroke="#FC6BFF" strokeWidth="4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 63 63" fill="none">
                            <path d="M40 16.5C40 21.1944 36.1944 25 31.5 25C26.8056 25 23 21.1944 23 16.5C23 11.8056 26.8056 8 31.5 8C36.1944 8 40 11.8056 40 16.5Z" fill="#FC6BFF" />
                            <path d="M61 31.5C61 47.7924 47.7924 61 31.5 61C15.2076 61 2 47.7924 2 31.5C2 15.2076 15.2076 2 31.5 2C47.7924 2 61 15.2076 61 31.5ZM38 16.5C38 20.0899 35.0899 23 31.5 23C27.9101 23 25 20.0899 25 16.5C25 12.9101 27.9101 10 31.5 10C35.0899 10 38 12.9101 38 16.5ZM31.5 27C37.299 27 42 22.299 42 16.5C42 10.701 37.299 6 31.5 6C25.701 6 21 10.701 21 16.5C21 22.299 25.701 27 31.5 27Z" stroke="#FC6BFF" strokeWidth="4" />
                        </svg>

                    </div>

                </section>
        </Overlay>
    );
}

export default TheTeaCup;