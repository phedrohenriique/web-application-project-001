import React from 'react'
import './styles.css'
import logo from '../../assets/TVfit_logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import whatsapp from '../../assets/whatsapp.png'

export default function Footer() {
  return (
    <footer>
      <ul class="social">
        <li><img src={logo} class="footerlogo" /></li>
        <li>
          <a href="" class="icon"><img src={facebook} /></a>
          <a href="" class="icon"><img src={instagram} /></a>
          <a href="" class="icon"><img src={twitter} /></a>
          <a href="" class="icon"><img src={whatsapp} /></a>
        </li>
      </ul>
      <div>
        <hr />
        <ul class="finfo">
          <li>Tel: (00) 00000-0000</li>
          <li>Email: rawrlalala@lalala.com</li>
          <li>Salvador/BA</li>
          <li>Av. lalalka, rawr, ldaiofojoajiofjoif, 000</li>
        </ul>
      </div>
    </footer>
  )
}
