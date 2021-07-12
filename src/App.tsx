
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


function App() {
  let themeDark = true
  return (
    <div className={`themeDark && dark`}>
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
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </ChallengesProvider>
      </div>
    </div>

  );
}

export default App;
