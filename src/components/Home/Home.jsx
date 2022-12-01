import React from 'react'
import heroImg from '../../assets/images/hero.png'
import { Link } from 'react-router-dom'
import './Home.scss'
import testimonials from '../../assets/images/testimonials.png'
import partners from '../../assets/images/partners.png'
import feature1 from '../../assets/images/feature1.png'
import feature2 from '../../assets/images/feature2.png'
import feature3 from '../../assets/images/feature3.png'
import blog from '../../assets/images/blog.png'
import footer from '../../assets/images/footer.png'

function Home() {
    return (
        <div className="home-page">
            <section className="hero">
                <div className='hero__text'>
                    <h1 className='hero__header'>You run your business. We will handle your finances.</h1>
                    <p className='hero__par'>From bookkeeping to tax filing bench is the all in one financial toolkit your business can count on.</p>
                    <div className='hero__buttons'>
                        <Link to="/demo/dashboard" className="hero__explore">Find Out More</Link>
                        <Link to="" className='hero__book'>Book a Call</Link>
                    </div>
                </div>
                <img className="hero__img" alt="hero_bunner" src={heroImg}/>
            </section>
            <section className="dimmieSite">
                <img src={testimonials} className="dummie" alt="dummie"/>
                <img src={partners} className="dummie" alt="dummie"/>
                <img src={feature1} className="dummie" alt="dummie"/>
                <img src={feature2} className="dummie" alt="dummie"/>
                <img src={feature3} className="dummie" alt="dummie"/>
                <h2 className="dimmieSite__header">Explore over 600 resourses for managing small business finances</h2>
                <img src={blog} className="dummie" alt="dummie"/>
                <img src={footer} className="dummie" alt="dummie"/>
            </section>
        </div>

    )
}

export default Home