

import MyForm from "../../Componenets/CalcForm/MyForm";
import P1 from "../../Componenets/page1/page11/page11"
import P2 from "../../Componenets/page1/page12/page12"
import Tableau from "../../Componenets/tableau/tableau"

const Firstpage = (props) => {
   return (
        <div > 
                 <P1/>
                 <P2/>
                 <MyForm />
                 <Tableau />
               
        </div>
      );
}
 
export default Firstpage;