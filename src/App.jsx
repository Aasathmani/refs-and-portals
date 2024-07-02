import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges"></div>
      <TimerChallenge title='Easy' target targetTime={1}/>
      <TimerChallenge title='Not easy' target targetTime={2}/>
      <TimerChallenge title='Getting tough' target targetTime={5}/>
      <TimerChallenge title='Getting not tough' target targetTime={10}/>
    </>
  );
}

export default App;
