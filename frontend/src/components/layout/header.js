import { Fragment } from 'react'


const Header=() =>{
    return(
       <Fragment>
         <Fragment>
           <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
               <div className='col-12 col-md-3'>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                     </button>
                   
                   </div> 
                   
         <div className='col-12 col-md-3 mt-4 mt-md-0 text-center'>
             <button className='btn' id="login_btn">login</button>
         </div>
           </nav>
       </Fragment>





       </Fragment>
    )
}

export default Header