import Sidbar from "../../Componenets/Sidebar/Sidebar"
import HistoryTable from '../../Componenets/Table_historique/history'
import BilanForm from "../../Componenets/Datecomponent/BilanFom"
import './hist.css'
const Histpage = (props) => {
   return (
        <div className="hist"> 
       
            <Sidbar/> 
            <div className="contenue">    
            <HistoryTable />
            <BilanForm />
            </div>
            </div> 
      
      );
}
 
export default Histpage;