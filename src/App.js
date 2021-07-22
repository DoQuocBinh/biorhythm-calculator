import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel,
  IonItem,
  IonDatetime} from '@ionic/react';
import React,{useState} from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {
  const [birthDate, setBirthdate]= useLocalStorage('birthDate','');
  const [targetDate, setTargetdate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonItem>
        <IonLabel position="stacked">Date of Birth:</IonLabel>
       <IonDatetime displayFormat="YYYY-MM-DD" value={birthDate} onIonChange={(event)=>setBirthdate(event.detail.value)}/>
      </IonItem> 
      <IonItem>
        <IonLabel position="stacked">Target Date:</IonLabel>
       <IonDatetime displayFormat="YYYY-MM-DD" value={targetDate} onIonChange={(event)=>setTargetdate(event.detail.value)}/>
      </IonItem>  
      {birthDate &&
        <BiorhythmCard targetDate={targetDate} birthDate={birthDate}/> 
      }
      </IonContent>
    </IonApp>
  );
}

export default App;
