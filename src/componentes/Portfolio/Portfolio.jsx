import './Portfolio.css'
import { Link } from 'react-router-dom'

const Portfolio = () => {

  const imgInuyasha = "../../img/portfolio-inuyasha-01.png"
  const imgExcel = "../../img/portfolio-excel-01.png"
  const imgMyTools = "../../img/portfolio-mytools-01.png"
  const imgBookshop = "../../img/portfolio-bookshop-01.png"

  return (
    <>
      <div className='portfolio'>
        <Link target="_blank" to='https://inuyasha-fans.netlify.app'> <img className='portfolio-img' src={imgInuyasha} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-img' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://my-tools-jmariano.netlify.app'> <img className='portfolio-img' src={imgMyTools} /> </Link>
        <Link target="_blank" to='https://mybookshop2023.netlify.app'> <img className='portfolio-img' src={imgBookshop} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-img' src={imgExcel} /> </Link>
        <Link target="_blank" to='https://excelarq.netlify.app'> <img className='portfolio-img' src={imgExcel} /> </Link>
      </div>
    </>
  )
}

export default Portfolio