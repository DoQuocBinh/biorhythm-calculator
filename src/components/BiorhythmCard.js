import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';
import  React from 'react';
import dayjs from 'dayjs';
import { calculateBiorythms } from '../calculation';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css'

function formatDate(isoString){
  return dayjs(isoString).format('DD MMM YYYY');
}
function BiorhythmCard({birthDate,targetDate}){
  const {physical,emotional,intellectual} = calculateBiorythms(birthDate,targetDate);
    return (
    <IonCard className="BiorhythmCard ion-text-center">
        <IonCardHeader>
          <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
          <p class="physical">Physical: {physical.toFixed(4)}</p>
          <p class="emotional">Emotional: {emotional.toFixed(4)}</p>
          <p class="intellectual">Intellecture: {intellectual.toFixed(4)}</p>
        </IonCardContent>
      </IonCard>
    );
}

export default BiorhythmCard;