
import ModifyBDD from '../../Componenets/Admin_bdd/modifyBDD';
import Credentials from '../../Componenets/Credentials_admin/credentials'
import InfoUsers from '../../Componenets/InfoUsers/infoUsers';
import Sideba from '../../Componenets/sidebaradmin/side'
const adminPage = (props) => {
  
  
    return (
        <div className='adminpage' > 
        <Sideba/>
     
         
            <Credentials/>
            <ModifyBDD />
            <InfoUsers />
            
      
                  
       
        </div>
      );
}
export default adminPage;
 