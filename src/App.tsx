
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
