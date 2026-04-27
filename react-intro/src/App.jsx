import "./App.css";
import Title from "./Component/Title";
import Lista from "./Component/Lista";
import Paragrafo from "./Component/class";
import ButtonComponent from "./Component/Classbutton";
import BicolorClass from "./Component/BicolorClass";
import ImageClass from "./Component/ImageClass";
function App() {
  return (
    <>
      <Title />
      <Lista item="Pizza" />
      <Paragrafo
        testo="
        Questo è un paragrafo di prova per controllare il funzionamento della
        mia pagina."
        colorep="blu"
      />
      <Paragrafo testo="questo è il nuovo paragrafo modificato dinamicamente tramite le props e delle classi" />
      <ButtonComponent nuovobottone="Cliccami" />
      <ButtonComponent nuovobottone="Non cliccare" />
      <ButtonComponent nuovobottone="Hai già cliccato" />
      <BicolorClass nuovotesto="Sono un bottone giallo" colore1="giallo" />
      <BicolorClass nuovotesto="Sono un bottone fucsia" colore1="fucsia" />
      <div className="contenitore-foto">
        <ImageClass
          src=" https://tse4.mm.bing.net/th/id/OIP.h0qRsYuOxojOAP3FWN3llQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3 "
          alt="fiore rosa"
        />
        <ImageClass
          src=" https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1379766572i/247997._SX540_.jpg"
          alt="rosa blu"
        />
        <ImageClass
          src=" https://www.ifioridiluna.it/wp-content/uploads/2017/02/33-Rose-Rosse.jpg "
          alt="rosa rossa"
        />
      </div>
    </>
  );
}
export default App;
