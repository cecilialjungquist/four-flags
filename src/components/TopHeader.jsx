import Navigation from "./Navigation";
import logo from '../assets/logo.svg';
import { useNavigate } from "react-router-dom";

function TopHeader() {
    const navigate = useNavigate();

    return (
        <header className="top-header">
            <aside onClick={() => navigate('/')} className="top-header__logo">
                Four Flags
                <img src={logo}/>
            </aside>
            <Navigation />
        </header>
    );
}

export default TopHeader;