import logo from './logo.svg';
import './App.css';
import FillupBlanks from './FillupBlanks';
import QuestImageContent from './questContent';

function App() {
  return (
    <div>
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <FillupBlanks/>
        </p>
        <QuestImageContent />

    </div>
  );
}

export default App;
