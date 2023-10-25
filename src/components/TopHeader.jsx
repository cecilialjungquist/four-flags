import Navigation from "./Navigation";
import logo from '../assets/logo.svg';
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function TopHeader() {
    const navigate = useNavigate();

    const options = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'The Park',
            path: 'the-park'
        },
        {
            title: 'Accomodation',
            path: 'accomodation'
        },
        {
            title: 'Prices & Tickets',
            path: 'prices-and-tickets'
        },
        {
            title: 'Opening Hours',
            path: 'opening-hours'
        },
        {
            title: 'About Us',
            path: 'about-us'
        }
    ];

    return (
        <header className="top-header">
            <aside onClick={() => navigate('/')} className="top-header__logo">
                Four Flags
                <img src={logo}/>
            </aside>
            <Navigation options={options.slice(0,3)}/>
            <HamburgerMenu options={options} />
        </header>
    );
}

export default TopHeader;