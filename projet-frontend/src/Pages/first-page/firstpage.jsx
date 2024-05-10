import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise";
import Notifications from "../../Componenets/Notifications/Notifications";
import Supprimer from "../../Componenets/Supprimer/Supprimer";
import Sidbar from "../../Componenets/Sidebar/Sidebar"
import Securite from "../../Componenets/Securite/Securite";
import "./firstpage.css";
const Firstpage = (props) => {
   return (
        <div className="first"> 
            <Sidbar/> 
            <div className="content">
            <Info_entreprise/>
            <Notifications/>
            <Securite/>
            <Supprimer/>    
            </div>    
               
        </div>
      );
}
 
export default Firstpage;