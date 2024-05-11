
import ModifyBDD from '../../Componenets/Admin_bdd/modifyBDD';
import Credentials from '../../Componenets/Credentials_admin/credentials'
import InfoUsers from '../../Componenets/InfoUsers/infoUsers';
const adminPage = (props) => {
  
  
    return (

        <div > 
         
            <h2>Coucou Admin</h2>
            <Credentials/>
            <ModifyBDD />
            <InfoUsers />
            
            {/**params */}
                  
        </div>
      );
}
export default adminPage;
 