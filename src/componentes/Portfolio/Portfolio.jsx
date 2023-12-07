import './Portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {

  const imgInuyasha = "../../img/portfolio-inuyasha-01.png"
  const imgExcel = "../../img/portfolio-excel-01.png"

  return (
    <>
      <div className='portfolio'>
        <Link target="_blank" to='https://inuyasha-fans.netlify.app'> <img className='portfolio-excel' src={imgInuyasha} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-excel' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-excel' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-excel' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-excel' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-excel' src={imgExcel} /> </Link>
      </div>
    </>
  )
}

export default Portfolio