//AVANZATO -- LOGICA -- quello che viene fatto in questa pagina è praticamente una sorta di apertura di una nuova pagina, ma poichè siamo in una single
//page application, non possiamo aprire una nuova pagina, e quindi organizziamo tutto attraverso l'apertura di una modale che va a sovrapporsi ad una parte
//della pagina presente in App, che avviene tramite una z-index, maggiore , ma soprattutto grazie all'uso intelligente di regole css per crearsi un
//contenitore aggiuntivo, che si chiama overlay, che prendendo tutta la pagina dà l'illusione all'utente di trovarsi in una nuova pagina. Una volta
//strutturata stilisticamente questa nuova sezione di SPA  si vanno ad usare i CONTROLLED COMPONENTS che ci aiutano ad organizzare la gestione dei dati
//proveniente dal form in una maniera molto semplice. il tutto deve essere gestito con gli stati che prendono i valori grazie all'onChange di ogni input e
// e che poi vengono inviati definitivamente come dato al momento che viene premuto il tasto submit, essendo quello che abbiamo creato un form onSubmit
//Adesso che è stata impostat la logica del componente Reservation, bisogna gestire l'attivazione e disattivazione del Componente, e questo parte da
//App.jsx, che essendo la pagina pricipale andrà poi a gestire tutti i vari passaggi padre-figlio per il settaggio degli stati. Tuuto ciò perchè
//vogliamo che questo componente sia attivato solo a volontà dell'utente, e quindi viene impostato uno stato che gestisce l'attivazione e disattivazione
// e poi passiamo come prop ai componenti dove si intende far scatenare l'evento di chiusura (componente : reservation) ed apertura (componente :navbar)
//

import { useState } from "react";
import styles from "./index.module.scss";
// import Popup from "../popup";

const Reservation = ({
  SetReservationFormActive,
  SetPopUpUp,
  onReservationTimeChange,
  onReservationDateChange,
}) => {
  const [ReservationName, SetReservationName] = useState("");
  const [ReservationTime, SetReservationTime] = useState("");
  const [ReservationDate, SetReservationDate] = useState("");

  //   const [IsPopUpUP, SetPopUpUp] = useState(false);
  const onHandleReservationTextInput = (e) =>
    SetReservationName(e.target.value);
  const onHandleReservationTime = (e) => {
    SetReservationTime(e.target.value);
    onReservationTimeChange(e.target.value);
  };
  const onHandleReservationDate = (e) => {
    SetReservationDate(e.target.value);
    onReservationDateChange(e.target.value);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    // console.log({ ReservationName, ReservationTime, ReservationDate });
    SetPopUpUp(true);
  };
  //impostando il popup all'onHandleSubmit, il popup apparirà solo quando verranno compilati tutti i campi (required) e viene premuto il tasto invio,
  // quindi se il form viene completato parzialmente o non viene completato affatto e viene premuto il tasto submit il pop up non appare poichè
  //non c'è il cambio di stato necessario!

  const onHandleCloseModal = () => SetReservationFormActive(false);

  const onHandleOverlayClick = (e) => {
    e.stopPropagation();
  };

  const onHandleFormClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.Reservation}>
      <div className={styles.Overlay} onClick={onHandleCloseModal}>
        <div className={styles.Content} onClick={onHandleOverlayClick}>
          <h1>Prenota</h1>
          <form
            className={styles.Form}
            onSubmit={onHandleSubmit}
            onClick={onHandleFormClick}
          >
            <label htmlFor="text">inserisci un nome per la prenotazione</label>
            <input
              id="text"
              name="text"
              type="text"
              value={ReservationName}
              placeholder="reservation Name"
              onChange={onHandleReservationTextInput}
              required
            />
            <label htmlFor="time">inserisci ora</label>
            <input
              id="time"
              name="time"
              type="time"
              value={ReservationTime}
              onChange={onHandleReservationTime}
              required
            />
            <label htmlFor="date">inserisci data</label>
            <input
              name="date"
              id="date"
              type="date"
              value={ReservationDate}
              onChange={onHandleReservationDate}
              required
            />
            <input type="submit" value="prenota" />
          </form>
        </div>
      </div>
      {/* {IsPopUpUP && (
        <Popup>
          <h1>ciao {ReservationTime}</h1>
        </Popup>
      )} */}
    </div>
  );
};

export default Reservation;
