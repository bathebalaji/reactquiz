import logo from './logo.svg';
import './App.css';
import FillupBlanks from './FillupBlanks';
import QuestImageContent from './questContent';
import GumDropQuestContent from './gumDropQuestContent';
import CardSortQuiz from './cardsort_quiz';
import EmbedMedia from './EmbededMedia/media_quiz';
// import PgContainer from './EmbededMedia/PageContainer';

// import CKEdit from './CKEdiReact5';

import SVGDraw from './Drawing_Stamp';


function App() {
  return (

    <div>
  <h4> Drawing and Stamps</h4>
  <SVGDraw /> 
  {/* <CKEdit /> */}
  <EmbedMedia />
  {/* <PgContainer/> */}
  <style>
    @import url('https://fonts.googleapis.com/css?family=Lato');
</style>
   <p>
        {/* <FillupBlanks/>*/}
       
       
        {/* <QuestImageContent /> */} 
        {/* <GumDropQuestContent /> */}
        </p>
        {/* <CardSortQuiz /> */}

    </div>
  );
}

export default App;
