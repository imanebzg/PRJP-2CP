import Avancement from "../../Componenets/Avancement_exmp/Avancement_exmp"
import Info_entreprise from "../../Componenets/Info_entreprise/Info_entreprise"
import Notif from "../../Componenets/Notifications/Notifications"
import Postes from "../../Componenets/Postes/Postes"
import Rapport from "../../Componenets/Rapport_det/Rapport_det"
import Security from "../../Componenets/Securite-admin/Securite"
import Supprimer from "../../Componenets/Supprimer/Supprimer"
import Histogrm_s from "../../Componenets/histogrm/histogrm"
import Histogrm_T from "../../Componenets/histogrm-total/TOTAL"
import Sdb from "../../Componenets/Sidebar/Sidebar"
import Tableau from "../../Componenets/tableau/tableau"
import CompanyProfilePage from "../../Componenets/Info_entreprise/Info_entreprise"
import SecuritePage from "../../Componenets/Securite-admin/Securitecomponent"
import DeleteAccount from "../../Componenets/Supprimer/Supprimer" 

const Thirdpage = (props) => {
  
  
    return (

        <div > 
          {/*<Sdb/>

           <Avancement/>
         
           <Postes/>
           <Rapport/>   <Histogrm_s/> 
           <Histogrm_T/>  <Info_entreprise/>
           <Notif/>
           <Security/>
           <Supprimer/>*/}
          <CompanyProfilePage/>
          <SecuritePage/>
          <DeleteAccount />
          
                  
        </div>
      );
}
export default Thirdpage;
 