import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useTranslation } from 'react-i18next';

const Search = (props: any) => {
  const { t } = useTranslation();
  return (
    <IonPage>
      <IonContent>
        <main className="ion-padding">
          <IonHeader>
            <IonToolbar className="title">
              <IonTitle>{t('navbar.cart')}</IonTitle>
            </IonToolbar>
          </IonHeader>
        </main>
      </IonContent>
    </IonPage>
  )
}

export default Search