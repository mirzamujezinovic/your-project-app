import "./Home.css"
import { FaHotel } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";


function Home(){
    return(
        <>
        <div className="home-page">
            <div className="home-tekst">
                <h1>Dobrodošli na Našu Aplikaciju</h1>
                <p>
                    Ovde možete pronaći najbolje hotele iz različitih delova sveta.
                    Pogledajte našu ponudu i rezervišite svoj boravak danas!
                </p>   
                <p>
                    Naša platforma vam omogućava da istražite različite destinacije,
                    pregledate ocene drugih korisnika i pronađete idealan smeštaj po vašim preferencijama.
                </p>
                </div>
        </div>
        <div className="home-under">
            <div className="home-under-page1">
                <h1><u>Sta nudimo</u></h1>
                <div className="home-kartice">
                <div className="home-kartica1">
                    <h2>Širok izbor smeštaja:</h2>
                    <div className="home-kartice-logo">
                    <FaHotel />
                    <div className="home-kartica1-tekst">
                    <p>Pregledajte našu pažljivo odabranu ponudu smeštaja širom sveta. Naša kolekcija uključuje sve poput:
                    <ul>
                        <li><strong>Luksuzni hoteli:</strong> Uživajte u vrhunskom komforu i usluzi sa pet zvezdica.</li>
                        <li><strong>Moderni apartmani:</strong> Smeštaj sa svim savremenim pogodnostima za vaš užitak.</li>
                        <li><strong>Udobne vikendice:</strong> Idealno za opuštanje i bekstvo iz gradske gužve.</li>
                        <li><strong>Jedinstveni bed and breakfast:</strong> Pronađite šarm i toplinu doma daleko od kuće.</li>
                    </ul>
                    </p>
                    </div>
                    </div>
                </div>
                <div className="home-kartica2">
                    <h2>Pregled i recenzije: </h2>
                    <div className="home-kartice-logo">
                    <MdReviews />
                    </div>
                    <div className="home-kartica2-tekst">
                        <p>Pročitajte autentične recenzije od naših zadovoljnih korisnika kako biste doneli informisanu odluku. 
                        <ul>
                            <li><strong>Detaljne ocene:</strong> Saznajte sve o čistoći, udobnosti, lokaciji i usluzi smeštaja.</li>
                            <li><strong>Komentari gostiju:</strong> Pročitajte iskustva drugih putnika i saznajte šta im se najviše svidelo.</li>
                            <li><strong>Filtriranje recenzija:</strong> Sortirajte recenzije po datumu, oceni ili tipu putnika kako biste našli informacije koje su vam najvažnije.</li>
                        </ul>
                        </p>
                    </div>
                    

                </div>
                <div className="home-kartica3">
                    <h2>Najbolje cene:</h2>
                    <div className="home-kartice-logo">
                    <FaDollarSign />
                    </div>
                    <div className="home-kartica3-tekst">
                        <p>
                        Garantujemo najbolje cene i posebne ponude za vaše putovanje. 
                        <ul>
                            <li><strong>Ekskluzivni popusti:</strong> Uživajte u posebnim popustima dostupnim samo našim korisnicima.</li>
                            <li><strong>Cena-match garancija:</strong> Ako nađete nižu cenu, mi ćemo je izjednačiti ili čak ponuditi povoljniju.</li>
                            <li><strong>Besplatne pogodnosti:</strong> Iskoristite dodatne pogodnosti kao što su besplatan doručak, Wi-Fi, ili kasna odjava.</li>
                            <li><strong>Paketi ponuda:</strong> Kombinujte smeštaj sa drugim uslugama kao što su letovi ili rent-a-car za još veće uštede.</li>
                        </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Home;