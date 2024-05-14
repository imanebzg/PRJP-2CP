import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise";
import Notifications from "../../Componenets/Notifications/Notifications";
import Supprimer from "../../Componenets/Supprimer/Supprimer";
import Sidbar from "../../Componenets/Sidebar/Sidebar"
import Securite from "../../Componenets/Securite-admin/Securite";
import "./firstpage.css";
const Firstpage = (props) => {
   return (
        <div className="first"> 
       
            <Sidbar/>   
            
            <Info_entreprise/>
            <Notifications/>
            <Securite/>
            <Supprimer/>    
            </div>
               
      
      );
}
 
export default Firstpage;