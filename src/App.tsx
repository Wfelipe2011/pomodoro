
import { ChallengeBox } from './components/Challenge/ChallengeBox';
import { CompletedChallenges } from './components/CompleteChallenge/CompletedChallenges';
import { Countdown } from './components/Count/Countdown';
import { ExperienceBar } from './components/ExperienceBar/ExperienceBar';
import { Profile } from './components/Profile/Profile';
import { ChallengesProvider } from './contexts/ChallengesContext';
import { CountdownProvider } from './contexts/CountdownContext';
import './styles/global.css';
import { Nav } from './components/Nav/Nav';
import { ContentProvider } from './contexts/Content';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={`themeDark && dark`}>
      <ContentProvider>
        <Nav></Nav>
        <div className="container">
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
      <Footer/>
    </div>

  );
}

export default App;
