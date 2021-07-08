
import { ChallengeBox } from './components/ChallengeBox';
import { CompletedChallenges } from './components/CompletedChallenges';
import { Countdown } from './components/Countdown';
import { ExperienceBar } from './components/ExperienceBar';
import { Profile } from './components/Profile';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown time={0.2} isActive={false} />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>

  );
}

export default App;
