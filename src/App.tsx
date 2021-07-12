
import { ChallengeBox } from './components/ChallengeBox';
import { CompletedChallenges } from './components/CompletedChallenges';
import { Countdown } from './components/Countdown';
import { ExperienceBar } from './components/ExperienceBar';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { ChallengesProvider } from './contexts/ChallengesContext';
import { CountdownProvider } from './contexts/CountdownContext';
import './styles/global.css';
import { Nav } from './components/Nav';
import {  ContentProvider } from './contexts/Content';

function App() {
  if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
      console.log(
        "[PWA Builder] active service worker found, no need to register"
      );
    } else {
      // Register the service worker
      navigator.serviceWorker
        .register("pwabuilder-sw.js", {
          scope: "../public/pwabuilder-sw.js",
        })
        .then(function (reg) {
          console.log(
            "[PWA Builder] Service worker has been registered for scope: " +
              reg.scope
          );
        });
    }
  }
  return (
    <div className={`themeDark && dark`}>
      <ContentProvider>
      <div className="container">
        <Nav></Nav>
        <ChallengesProvider>
          <CountdownProvider>
            <ExperienceBar />
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div className={`themeDark && dark`}>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </ChallengesProvider>
      </div>
      </ContentProvider>
    </div>

  );
}

export default App;
