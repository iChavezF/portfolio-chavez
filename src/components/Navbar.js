import React from 'react'

export const Navbar = () => {
    const { active } = useState(true);
    const activeClass = () => active ? 'active' : undefined
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink style={activeClass} to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink style={activeClass} to="/about" className="nav-item nav-link" >About</NavLink>
                        <NavLink style={activeClass} to="/login" className="nav-item nav-link">Login</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
