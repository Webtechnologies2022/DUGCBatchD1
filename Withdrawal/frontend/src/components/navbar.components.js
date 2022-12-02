
import React, {Component} from "react"; 
import { Link } from 'react-router-dom'; 
 
export default class Navbar extends Component{ 
    render(){ 
        return( 
            <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg"> 
                <Link to = "/" className="navbar-brand">Withdrawal</Link> 
                <div className="collpase navbar-collapse"> 
                    <ul className="navbar-nav mr-auto"> 
                        <li className="navbar-item"> 
                            <Link to='/' className="nav-link">Application</Link> 
                        </li> 
                        <li>
                            <Link to='/update' className="nav-link">Approve</Link>
                        </li>
                        <li>
                            <Link to='/Print' className="nav-link">Display</Link>
                        </li>
                        <li>
                        {/* <img style={{height:40,marginleft:60}} src={require('../kle.png')}></img> */}
                        </li>
                    </ul> 
                </div> 
            </nav> 
            </div>
        ); 
    } 
}