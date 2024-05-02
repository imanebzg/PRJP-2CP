import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise";
import Notifications from "../../Componenets/Notifications/Notifications";
import Securite from "../../Componenets/Securite/Securite";
import Supprimer from "../../Componenets/Supprimer/Supprimer";
import Error from "../../Componenets/error/error"
import "./second_page.css";
import Sidbar from "../../Componenets/Sidebar/Sidebar"
const second_page = (props) => {
       return (

        <div className="second"> 
          <Sidbar/>
          <div className="content">
          <Error/>
           <Info_entreprise/>
           <Notifications/>
           <Securite/>
           <Supprimer/>
           </div>



        </div>
      );
}
 
export default second_page;