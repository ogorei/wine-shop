import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useTranslation } from 'react-i18next';

const Cart = (props: any) => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonContent>
        <main className="ion-padding">
          <IonHeader>
            <IonToolbar className="title">
              <IonTitle>{t('navbar.search')}</IonTitle>
            </IonToolbar>
          </IonHeader>
        </main>
      </IonContent>
    </IonPage>
  )
}

export default Cart