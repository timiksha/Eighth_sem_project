import React from "react";
import {ListGroup } from "reactstrap";
import {Link } from "react-router-dom";

const Menus=({adminLoggedIn,setAdminLoggedIn})=>
{
    const handleLogout = () => {
         localStorage.setItem('adminLoggedIn','false')
         setAdminLoggedIn('false')
     }

    return (
        <ListGroup>

            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
            Home
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/courses-offered" action>
            Courses Offered
            </Link>

           {/*conditional rendering*/}
           {adminLoggedIn==='true' && 
           <>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-courses" action>
            Add Courses (For Admin)
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/view-all-courses" action>
            View All Courses (For Admin)
            </Link>
            
            {/* <Link className="list-group-item list-group-item-action" tag="a" to="/add-albums-to-gallery" action>
            Add Albums To Gallery (For Admin)
            </Link> */}

            <Link className="list-group-item list-group-item-action" tag="a" to="/queries" action>
            User Queries (For Admin)
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/follow-up" action>
            Follow Up (For Admin)
            </Link>

            
            </>}

            <Link className="list-group-item list-group-item-action" tag="a" to="/gallery" action>
            Gallery
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/aboutus" action>
            About Us
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/contactus" action>
            Contact Us
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/admin" action>
            Admin
            </Link>

            <Link className="list-group-item list-group-item-action" tag="a" to="/register" action>
            Register
            </Link>
            
            {adminLoggedIn==='true' &&
            <button className="list-group-item list-group-item-action" onClick={handleLogout}>Logout</button> 
            }
        </ListGroup>
    );
};
export default Menus;
