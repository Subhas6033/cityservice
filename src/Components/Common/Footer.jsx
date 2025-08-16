import React from 'react'
import {useNavigate} from "react-router-dom"


const Footer = () => {

  const footerItems = [
    {
      name: "Support",
      navUrl : "/support"
    }, {
      name: "About us",
      navUrl : "/about"
    }, {
      name: "Contact us",
      navUrl : "/contact"
    }, {
      name: "Carrers",
      navUrl : "/carers"
    }, {
      name: "Payments",
      navUrl : "/payment"
    }
  ]

  const navigate = useNavigate()
  return (
    <footer>
      <ul>
        {
          footerItems.map((footer) => (
            <li key={footer.name}>
              <button
              onClick={() => navigate(footer.navUrl)}
              >
                {
                  footer.name
                }
              </button>
            </li>
          ))
        }
      </ul>
    </footer>
  )
}

export default Footer
