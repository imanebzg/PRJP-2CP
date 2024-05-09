import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise";
import Notifications from "../../Componenets/Notifications/Notifications";
import Securiteform from "../../Componenets/Securite/Securitecomponent";
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
           <Securiteform/>
           <Supprimer/>
           </div>



        </div>
      );
}
 
export default second_page;