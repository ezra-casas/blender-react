import './navbar.css'

export default function Navbar(){
    return(
        <nav className='navbar container is-fixed-top' role="navigation">
            
            <div className='navbar-brand'>
                <a className='navbar-item' href='https://www.blender.org'>
                  <img src='https://download.blender.org/branding/blender_logo.png' width="140" height="200" />
                </a>
            </div>

            <div className='navbar-menu'>
                <div className='navbar-end'>
                    <a className='navbar-item'>Features</a>
                    <a className='navbar-item'>Download</a>
                    <a className='navbar-item'>Support</a>
                    <a className='navbar-item'>Get Involved</a>
                    <a className='navbar-item'>About</a>
                    <a className='navbar-item'>Jobs</a>
                    <a className='navbar-item'>Store</a>
                    <a className='navbar-item'>
                    <div className='button is-info'>Donate</div>
                    </a>
                </div>
                
            </div>
        </nav>
    )
}