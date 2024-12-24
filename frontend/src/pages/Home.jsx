import Navbar from "../components/Navbar";
import "../styles/App.css";

export default function Home() {
    return (
        <>
            <Navbar activeHome="active" />
            <div className="firstHalf">
                <div className="introductionCard">
                    <h2>HELLO, I AM</h2>
                    <h1 className="names">SEAN ULRIC MONTANO</h1>
                    <br />
                    <h1>COMPUTER ENGINEERING STUDENT</h1>
                    <h2 className="names">
                        @ DE LA SALLE UNIVERSITY - DASMARIÑAS
                    </h2>
                </div>
            </div>
        </>
    );
}
