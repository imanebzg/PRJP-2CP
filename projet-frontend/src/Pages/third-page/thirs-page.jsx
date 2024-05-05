
import Avancement from "../../Componenets/Avancement_exmp/Avancement_exmp"
import CalcForm from "../../Componenets/CalcForm/MyForm"
import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise"
import Notif from "../../Componenets/Notifications/Notifications"
import Postes from "../../Componenets/Postes/Postes"
import Rapport from "../../Componenets/Rapport_det/Rapport_det"
import Security from "../../Componenets/Securite/Securite"
import Supprimer from "../../Componenets/Supprimer/Supprimer"
import Histogrm_s from "../../Componenets/histogrm/Histogram"
import Histogrm_T from "../../Componenets/histogrm-total/TOTAL"
import Sdb from "../../Componenets/Sidebar/Sidebar"
import Tableau from "../../Componenets/tableau/tableau"


const Thirdpage = (props) => {
  
  
    return (

        <div > 
 <Sdb/>

           <Avancement/>
            <CalcForm/>
           <Postes/>
           <Rapport/>   <Histogrm_s/> 
           <Histogrm_T/>  <Info_entreprise/>

           <Notif/>
           <Security/>

           <Supprimer/>
          
                  
        </div>
      );
}
export default Thirdpage;
 