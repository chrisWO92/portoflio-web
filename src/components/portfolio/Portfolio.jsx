import React from 'react';
import './portfolio.css';
import IMG from '../../assets/me.png'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'This is a Portfolio Item Title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: IMG,
    title: 'This is a Portfolio Item Title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG,
    title: 'This is a Portfolio Item Title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG,
    title: 'This is a Portfolio Item Title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 5,
    image: IMG,
    title: 'This is a Portfolio Item Title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG,
    title: 'This is a Portfolio Item Title',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item__image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item__cta">
                  <a href={github} className='btn' target="__blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="__blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;