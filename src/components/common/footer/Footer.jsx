import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className=''>
              <img className='logo-f' src='../images/CH2.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Send</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Cloth Hanger. Designd By Subekti Bimo WIicaksono.</span>
      </div>
    </>
  )
}

export default Footer
