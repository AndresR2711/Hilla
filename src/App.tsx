import { useState } from "react";
import "./App.css";



export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };


  const handleVolverAtrasClick = () => {
    
    // Aquí es donde deberías actualizar el estado yesPressed a false
    setYesPressed(false);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Segura?",
      "Seguraaaaaaaa?",
      "Porfaaaaaaaa!",
      "Manda Huevo",
      "Toy Tristito",
      "Betty, yo a usted la Amo",
      "Recurde septiembre 24 :c",
      "Se va a arrepentir :c",
      "No me quiere?",
      "Nadie quiere a Calvin por chaparro",
      "Hagalo por Carlos",
      "Ya no me quiere verdad?",
      "Te amo guapa,diga que sí pls",
      "Segura segura segurísima?",
      "Monicaaaaaaaaaaaaaaaaa",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container valentine-container">

      <div  id="holatext">
        {yesPressed ? (
          <>
            <img id="redondeo" src="src\Imagenes\besos-ted-wzls67auvp6ow52i.webp" />
            
            <div className="text-container" id="hola" >Esoooo!<br />Te amoooooooo 💕</div>
         <button
              className={"volver-button"}
              style={{ fontSize: yesButtonSize }}
              onClick={handleVolverAtrasClick}
            >
              Volver atrás
            </button>
          </>

          
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              id="redondeo"
              src="src\Imagenes\i-love-you-love.gif"
            />
            <h1 className="text-container">¿Te gustaría ser mi San Valentín?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => {
                  setYesPressed(true);
                  setNoCount(0);
                }}
                
              >
                Sí
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No :c" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
