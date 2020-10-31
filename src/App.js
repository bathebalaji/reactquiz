import logo from './logo.svg';
import './App.css';
import FillupBlanks from './FillupBlanks';
import QuestImageContent from './questContent';
import GumDropQuestContent from './gumDropQuestContent';

function App() {
  return (
    <div>
  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <FillupBlanks/>
        </p>
        <QuestImageContent />
        <GumDropQuestContent />

    </div>
  );
}

export default App;
