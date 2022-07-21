import {Link, useNavigate } from "react-router-dom"



const Navbar = () => {
    const navigate = useNavigate();
    const currentUser = false
  return (
    
        <nav className="navbar navbar-expand-lg navbar-expand-sm   bg-primary d-flex justify-content-around p-3 ">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-white">
                    <h4>React Movie App</h4>
                </Link>
            </div>

            <div className="d-flex align-item-center gap-2 ">
                {currentUser ? (
                    <>
                    <h5 className="text-white mb-0 text-capitalize">{currentUser.displayName}</h5>
                    <button className="btn text-light border fw-bold m-3">Logout</button>
                    </>
                    
                ) : (
                    <>
                    <button 
                    className="btn text-light border fw-bold" 
                    onClick={() => navigate("/login")}>Login</button>

                    <button 
                    className="btn text-light border fw-bold" 
                    onClick={() => navigate("/register")}>Register</button>
                    </>
                    
                )}

                
            </div>

        </nav>
    
   
   
  );
}

export default Navbar;