import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
//pages
import AuthPage from '../AuthPage/AuthPage';

import MyEnterprise from '../../pages/MyEnterprises/MyEnterprises';


// Import the following components
import NavBar from '../../components/NavBar/NavBar';
// import AddEnterprise from '../AddEnterprise/AddEnterprise';
import { AddEnterprise } from '../../components/AddEnterprise/AddEnterprise';
import { CreateEmployee } from '../../components/CreateEmployee/CreateEmployee';
import {getUser} from '../../utilities/users-service';


function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    // const [company, setCompany] = useState(getCompany());
    // const [employee, setEmployee] = useState(getEmployee());
    // const [record, setRecord] = useState(getRecord());


    return (
      
        < main className="App">
            {user ?
                <>
                   
                    <NavBar user={user} setUser={setUser}/>
                   
                    <Routes>
                
                        <Route path="/AddEnterprise" element={<AddEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/MyEnterprise" element={<MyEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/CreateEmployee" element={<CreateEmployee user={user} setUser={setUser}/>}/>
                    </Routes>
                    
                    {/* <CompanyList company={company} setCompany={setCompany}/>
                    <EmployeeList employee={employee} setEmployee={setEmployee}/>
                    <RecordList record={record} setRecord={setRecord}/> */}
                </>
                
                :
                <AuthPage setUser={setUser}/>}
        
        </main>
    );
}

export default App;