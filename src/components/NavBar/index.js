import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'


const NavBar = ({ toggleNavbar, isActive }) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top is-primary'  aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong>Formal Flamingo</strong>
          </Link>
          <button
            className={`button navbar-burger  ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
           
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
            <Link className='navbar-item' to='/pricing'>
                            Pricing
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            
              
                  <Link
                    className=' navbar-item'
                    to='/contact'>
                            Contact Us
                  </Link>
              
            
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
