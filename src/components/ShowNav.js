import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';


const ShowNav = ({ children }) => {

      const location = useLocation();
      const [showNavbar, setShowNavbar] = useState(true)
      useEffect(() => {

            switch (true) {
                  case location.pathname === '/admin':
                        return (
                              setShowNavbar(false)
                        )
                  case location.pathname === '/dashboard/admin/category' || '/dashboard/admin/subCategory':
                        return (
                              setShowNavbar(false)
                        )
                  case location.pathname === '/dashboard/admin/subCategory':
                        return (
                              setShowNavbar(false)
                        )
                  case location.pathname === '/dashboard/admin/brands':
                        return (
                              setShowNavbar(false)
                        )
                  case location.pathname === '/dashboard/admin/createProduct':
                        return (
                              setShowNavbar(false)
                        )
                  case location.pathname === '/dashboard/admin/products':
                        return (
                              setShowNavbar(false)
                        )
                  default:
            }

      }, [location])

      return (
            <div>{showNavbar && children}</div>
      )
}

export default ShowNav;