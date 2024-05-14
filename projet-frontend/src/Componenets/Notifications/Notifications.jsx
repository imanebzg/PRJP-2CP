import './Notifications.css';
import Sidebar from '../Sidebar/Sidebar'
import React from 'react';
const Notifications = () => {
    return (


      <>
      <Sidebar/>
        <div className="Notifications">
<div class="container">
            <div class="title">
                <p>Notifications</p>
            </div>
    
            <form action="#">
            <div class="user_details">
                <div class="container_check">
                  <div className='text_big_small'>
                    <div class="title_big">
                        <p>Email notifications :</p>
                    </div>
                    <div class="title_small">
                        
                    </div>
                    </div>
                    <div class="cheking">
                        <div class="checkbox-wrapper-4">
                            <input class="inp-cbx" id="morning" type="checkbox"/>
                            <label class="cbx" for="morning"><span>
                            <svg width="12px" height="10px">
                              
                            </svg></span><span>Nouveautées</span></label>
                            <svg class="inline-svg">
                              <symbol id="check-4" viewBox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                              </symbol>
                            </svg>
                            
                          </div>
                          <div class="title_small">
                          
                        </div>
                          
                          <div class="checkbox-wrapper-4">
                            <input class="inp-cbx" id="morning2" type="checkbox"/>
                            <label class="cbx" for="morning2"><span>
                            <svg width="12px" height="10px">
                              
                            </svg></span><span>Mise a jour</span></label>
                            <svg class="inline-svg">
                              <symbol id="check-4" viewBox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                              </symbol>
                            </svg>
                          </div>
                          <div class="title_small">
                           
                        </div>

                          <div class="checkbox-wrapper-4">
                            <input class="inp-cbx" id="morning3" type="checkbox"/>
                            <label class="cbx" for="morning3"><span>
                            <svg width="12px" height="10px">
                              
                            </svg></span><span>Rappels</span></label>
                            <svg class="inline-svg">
                              <symbol id="check-4" viewBox="0 0 12 10">
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                              </symbol>
                            </svg>
                          </div>
                        </div>

                    
                    
                </div>

                <div class="container_check">
                <div className='text_big_small'>
                    <div class="title_big">
                        <p>Push notifications :</p>
                    </div>
                   </div>
                    
                    <div class="cheking">
                        <div class="checkbox-wrapper-4">
                            <input class="inp-cbx" id="morning4" type="checkbox"/>
                            <label class="cbx" for="morning4"><span>
                            <svg width="12px" height="10px">
                              
                            </svg></span><span>Rappels</span></label>
                       
                            
                          </div>
                         
                          
        
                          
                        </div>

                    
                    
                </div>


                
                
                </div>
            </form>
            <br />
      
      <button className="btn1">Modifier</button>
      <br/>
        </div>
        </div></>
         );
        };
        export default Notifications;
