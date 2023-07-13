import React from 'react'

const Footer = () => {
    const footer_links=["home","privacy","policy","legal disclaimer","DMCA","about us","contact us"];
  return (
    <div id='footer_container'>
      <div id='footer_links'>
        {
            footer_links.map((link,index)=>(
                <a href='#' key={index}>{link} | </a>
            ))
        }
      </div>
      <small id='copyright_rule'>
      The use of the manga and other promotional materials are allowed under the fair use clause of the Copyright Law and copyrights and trademarks are held by their respective owners © 2020 mangatx.com
      </small>
    </div>
  )
}

export default Footer
