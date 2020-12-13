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
import GraphOrg from './graphicorgnaizer_quiz'
import ClaimER from './claim_quiz';
import EnggQuiz from './engg_quiz';
import MultiChoice from './multichoice/MultiChoice';
import MathSym from './finalMath';
import MathEdit from './EditMath';
 import Qeditor from './quillEditor';
 import Chk from './ChooseChkBox/MultiChoice';
 import {Symbols} from './Symbols';


let tempArr = [{"opt1":"Balaji"},{"opt2":"Kumar"} ]



function App() {
  // componentDidMount(){
  //   const script=document.createElement("script");
  //   script.src = "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML";
  //   script.async = true;
  //   document.body.appendChild(script);
  // }

  return (

    <div>
  {/* <h4> Grid Map</h4> */}
{/* <GridMap /> */}
{/* <Qeditor />
<MathEdit /> */}
{/* <Symbols/> */}
<MathSym />
  {/* <SampleMath /> */}
  {/* <MultiChoice /> */}
  {/* <Chk/> */}
  {/* <GraphOrg/> */}
  {/* <ClaimER /> */}
  {/* <EnggQuiz/> */}
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
