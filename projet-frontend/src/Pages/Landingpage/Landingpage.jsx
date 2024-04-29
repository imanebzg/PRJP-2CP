
import Home from "../../Componenets/home/home";
import Why from "../../Componenets/why_carbo/why";
import Blog from "../../Componenets/Blog/blog";
import About from "../../Componenets/About/about";
import Feedback from "../../Componenets/feedback/feedback";
import Navbar from "../../Componenets/navbar/Navbar";
import Footer from "../../Componenets/footer/footer";
import Contact from "../../Componenets/contact/contact";
import Background from "../../Componenets/backgroung/background";
import Signin from "../../Componenets/Signup/signup";
import Learn from "../../Componenets/learn_more/learn";
const LandingPage = (props) => {
  
  
    return (

        <div > 

           <Navbar/>
           <Home /> 
           <Background />
           <Why/>
           <Signin/>
           <Learn /> 
           <Blog/>
           <About/>
           <Feedback/>
           <Contact/>
           <Footer/>
          
         
        </div>
      );
}
 
export default LandingPage;