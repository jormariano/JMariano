import './Footer.css'

const Footer = () => {

  const imgLogo = "../../img/logo-01.png"
  const imgGitHub = "../../img/footer-icono-github.png"
  const imgLinkedIn = "../../img/footer-icono-linkedin.png"
  const imgInstagram = "../../img/footer-icono-instagram.png"

  return (
    <>
      <div className='footer-socialnetworks'>
        <a href="https://github.com/jormariano" target="_blank"><img src={imgGitHub}
          alt="Enlace a GitHub" /></a>
        <a href="https://linkedin.com/in/jorgelina-mariano" target="_blank"><img src={imgLinkedIn}
          alt="Enlace a LinkedIn" /></a>
        <a href="https://www.instagram.com/" target="_blank"><img src={imgInstagram}
          alt="Enlace a Instagram" /></a>
      </div>
      <p className='footer-copyright'> Copyright © 2023 <img className="img-logo-footer" src={imgLogo} alt="logo de la empresa" /></p>
    </>
  )
}

export default Footer