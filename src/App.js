import logo from './logo.svg';
import './App.css';
import FillupBlanks from './FillupBlanks';
import QuestImageContent from './questContent';
import GumDropQuestContent from './gumDropQuestContent';
import CardSortQuiz from './cardsort_quiz';


function App() {
  return (

    <div>
  
  <style>
    @import url('https://fonts.googleapis.com/css?family=Lato');
</style>
   <p>
        <FillupBlanks/>
        </p>
        <QuestImageContent />
        {/* <GumDropQuestContent /> */}

        <CardSortQuiz />

    </div>
  );
}

export default App;
