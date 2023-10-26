import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <section className="page-not-found">
            <h1>Oopsie-Daisy!</h1>
            <p>Oopsie-daisy! It seems like you've taken a wrong turn and ended up in a land of missing merriment. This isn't the giggle-filled gateway you were searching for.</p>
            <Button action={() => navigate(-1)}>Take me back!</Button>
        </section>
    );
}

export default PageNotFound;