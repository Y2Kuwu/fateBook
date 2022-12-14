import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import React from 'react';
import Clock from '../../components/Clock/Clock';


export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
        //if employee == super display my companies and user information
        //if employee !== super display track record and user information
       

    return (
        <nav>
            <Clock/>
            <Link to="/MyEnterprises" className = "allEnterprises">My Enterprises</Link>
            &nbsp; | &nbsp;
            <Link to="/AddEnterprise" className = "newEnterprise">Add New Enterprise</Link>
            &nbsp; | &nbsp;
            <Link to="/CreateEmployee" className = "createEmployee">Add New Employee</Link>
            &nbsp; | &nbsp;
            <Link to="/NewEmployees" className = "newEmployees">New Employees</Link>
            &nbsp; | &nbsp;
            
            {/* <Link to="/UpdateCompany" className = "updateCompany">Update Enterprise</Link>
            &nbsp; | &nbsp; */}
            <Link to={""} onClick={handleLogOut} className = "logOut">Logout</Link>
            <div>
            <span className = "welcome">Welcome, </span>
            <Link to= " " className = "userName">{user.name} </Link>
            </div>
            

            

        </nav>
        
            
            
    )
}
