import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { useTranslation } from 'react-i18next';
import { cartOutline, homeSharp, newspaperSharp, searchSharp } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';
/* TailwindCSS */
import './styles/tailwind.css';

import Search from './pages/Search';
import Cart from './pages/Cart';
import Blog from './pages/Blog';


setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<string>('home');
  const [backup, setBackup] = useState<boolean>(false);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs onIonTabsDidChange={($event) => setSelectedTab($event.detail.tab)}>
          <IonRouterOutlet>
            <Route path="/home" component={Home} />
            <Route path="/search" component={Search} exact={true} />
            <Route path="/cart" component={Cart} exact={true} />
            <Route path="/blog" component={Blog} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              {selectedTab === 'home' ? (
                <IonIcon icon={homeSharp} />
              ) : (
                <IonIcon icon={homeSharp} />
              )}
              <IonLabel>
                {t('navbar.home')}
              </IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchSharp} />
              <IonLabel>
                {t('navbar.search')}
              </IonLabel>
            </IonTabButton>
            <IonTabButton tab="cart" href="/cart">
              <IonIcon icon={cartOutline} />
              <IonLabel>
                {t('navbar.cart')}
              </IonLabel>
            </IonTabButton>
            <IonTabButton tab="blog" href="/blog">
              <IonIcon icon={newspaperSharp} />
              <IonLabel>
                {t('navbar.blog')}
              </IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
