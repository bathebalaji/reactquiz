import logo from './logo.svg';
import './App.css';
import FillupBlanks from './FillupBlanks';
import QuestImageContent from './questContent';
import GumDropQuestContent from './gumDropQuestContent';
import CardSortQuiz from './cardsort_quiz';
import EmbedMedia from './EmbededMedia/media_quiz';
 import PgContainer from './EmbededMedia/PageContainer';
import DraftEditor from './EmbededMedia/customToolbarEditor'
// import CKEdit from './CKEdiReact5';
//import SampleMath from './TestMath'
import SVGDraw from './Drawing_Stamp';
import GridMap from './GridMap/grid_quiz';

let tempArr = [{"opt1":"Balaji"},{"opt2":"Kumar"} ]

function App() {
  return (

    <div>
  <h4> Grid Map</h4>
<GridMap />
  {/* <SampleMath /> */}
  {/* <DraftEditor/> */}
  {/* <SVGDraw />  */}
  {/* <CKEdit /> */}
  {/* <EmbedMedia />
  <PgContainer/> */}
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
