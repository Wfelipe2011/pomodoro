
import { ChallengeBox } from './components/ChallengeBox';
import { CompletedChallenges } from './components/CompletedChallenges';
import { Countdown } from './components/Countdown';
import { ExperienceBar } from './components/ExperienceBar';
import { Profile } from './components/Profile';
import { ChallengesProvider } from './contexts/ChallengesContext';
import {CountdownProvider} from './contexts/CountdownContext';
import './styles/global.css';


function App() {
  return (
    <div className="container">
      <ChallengesProvider>
        <CountdownProvider>
          <ExperienceBar />
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown time={0.1} isActive={false} />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </ChallengesProvider>
    </div>

  );
}

export default App;
