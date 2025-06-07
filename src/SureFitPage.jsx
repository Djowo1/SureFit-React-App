import React, { useState, useEffect } from 'react';
import './SureFitPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
  {
    image: '/fitness-images/sule-makaroglu-YFmvjO3TP_s-unsplash.jpg',
    title: 'Transform Your Body & Mind',
    text: 'Join our fitness programs and unleash your potential!',
    buttonText: 'Explore Programs',
    buttonLink: '#programs'
  },
  {
    image: '/fitness-images/danielle-cerullo-Oo-rHghLNhA-unsplash.jpg',
    title: 'Achieve Your Fitness Goals',
    text: 'Personalized training sessions with expert guidance.',
    buttonText: 'Meet Our Trainers',
    buttonLink: '#trainers'
  },
  {
    image: '/fitness-images/sam-moghadam-0sa8D74iodI-unsplash.jpg',
    title: 'Strength & Conditioning',
    text: 'Build muscle and endurance with our tailored plans.',
    buttonText: 'Learn More',
    buttonLink: '#strength'
  },
  {
    image: '/fitness-images/bruce-mars-ZXq7xoo98b0-unsplash.jpg',
    title: 'Mindful Yoga & Wellness',
    text: 'Experience tranquility and improve your flexibility.',
    buttonText: 'Join Now',
    buttonLink: '#yoga'
  }
];

const SureFitPage = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
  AOS.init({ duration: 1500, once: true });
}, []);

  const changeSlide = direction => {
    setCurrentSlide(prev => (prev + direction + slides.length) % slides.length);
  };

  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <div className="surefitpage" >
      <header className="header" id="home">
        <nav className="navbar">
          <div className="logo">
            <img src="/fitness-images/Preview.png" alt="Logo" className="logo-img"  />
            <h1 >SureFit</h1>
          </div>

          <ul className={`nav-links ${menuActive ? 'active' : ''}`} >
            <li><a href="#home" onClick={() => setMenuActive(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuActive(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuActive(false)}>Services</a></li>
            <li><a href="#programs" onClick={() => setMenuActive(false)}>Programs</a></li>
            <li><a href="#trainers" onClick={() => setMenuActive(false)}>Trainers</a></li>
            <li><a href="#blog" onClick={() => setMenuActive(false)}>Blog</a></li>
            <li><a href="#contact" onClick={() => setMenuActive(false)}>Contact</a></li>
          </ul>

          <div className="menu-toggle" data-aos="fade-right" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>

       
        <div className="header-section">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="header-content" data-aos="fade-right">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>
                  <a href={slide.buttonLink} className="btn">{slide.buttonText}</a>
                </div>
              </div>
            ))}

            <button className="prev" onClick={() => changeSlide(-1)}>&#10094;</button>
            <button className="next" onClick={() => changeSlide(1)}>&#10095;</button>
          </div>
        </div>
      </header>
   

      <section className="about" id="about">
        <h2 data-aos="fade-right">About Us</h2>
        <p data-aos="fade-right">Welcome to SureFit, where fitness meets inspiration. We empower individuals to transform their lives through holistic wellness, expert training, and a supportive community. Whether you're a beginner or a pro, our programs are designed to elevate your journey.</p>
      </section>

      <section className="services" id="services">
        <h2 data-aos="fade-right">Our Services</h2>
        <div className="service-cards">
          <div className="service-card1">
            <h3>Personal Training</h3>
            <p>Get One-on-one sessions tailored to your goals.</p>
             <a href="#personal-training" class="btn">Learn More</a>
          </div>
          <div className="service-card2">
            <h3>Group Classes</h3>
            <p>Stay motivated and have fun with our dynamic group classes.</p>
             <a href="#group-classes" class="btn">Join Now</a>
          </div>
          <div className="service-card3">
            <h3>Nutrition Plans</h3>
            <p>Custom meal guidance for optimal results.</p>
            <a href="#nutrition-plans" class="btn">Get Started</a>
          </div>
          <div className="service-card4">
            <h3>Yoga & Pilates</h3>
            <p>Relax and rejuvenate with mindful movement.</p>
             <a href="#yoga-pilates" class="btn">Explore More</a>
          </div>
        </div>
      </section>

      <section className="programs-section" id="programs" >
         <h2 data-aos="fade-right">Our Fitness Programs</h2>
    <p data-aos="fade-right">Discover a variety of fitness programs designed for all fitness levels.</p>

        <div className="programs-container" data-aos="fade-right">
          <div className="program-card" >
            <img src="/fitness-images/alora-griffiths-WiKEnlt6Z3U-unsplash.jpg" alt="Strength Training"/>
             <div className="program-content">
            <h3>Strength Training</h3>
            <p>Build muscle and strength with targeted routines.</p>
            <a href="#" class="btn">Learn More</a>
          </div>
          </div>
          <div className="program-card">
            <img src="/fitness-images/alexander-red-d3bYmnZ0ank-unsplash.jpg" alt="Cardio Fitness"/>
            <div className="program-content">
            <h3>Cardio Fitness</h3>
            <p>Boost endurance and heart health with fun cardio.</p>
            <a href="#" class="btn">Get Started</a>
            </div>
          </div>
          <div className="program-card">
            <img src="/fitness-images/carl-barcelo-nqUHQkuVj3c-unsplash.jpg" alt="Yoga & Wellness"/>
            <div className="program-content">
            <h3>Yoga & Wellness</h3>
            <p>Increase flexibility and mindfulness through yoga.</p>
            <a href="#" class="btn">Join Now</a>
          </div>
          </div>
          <div className="program-card">
             <img src="/fitness-images/karsten-winegeart-0Wra5YYVQJE-unsplash.jpg" alt="High-Intensity Training"/>
            <div className="program-content">
            <h3>HIIT</h3>
            <p>High-Intensity Interval Training for quick results.</p>
            <a href="#" class="btn">Start Today</a>
          </div>
        </div>
        </div>
      </section>

      <section className="trainers-section" id="trainers">
        <h2 data-aos="fade-right">Meet Our Trainers</h2>
          <p data-aos="fade-right">Our certified trainers are here to help you achieve your fitness goals.</p>
    
        <div className="trainers-container" data-aos="fade-right" >
          <div className="trainer-card">
            <div className="trainer-image">
                <img src="/fitness-images/john-fornander-TAZoUmDqzXk-unsplash.jpg" alt="John Doe"/>
            </div>
            <h3>John Doe</h3>
            <p>Strength & Conditioning Specialist</p>
            <a href="tel:+234 8135566001" class="contact-info">📞 +234 8135566001</a>
          </div>
          <div className="trainer-card">
             <div className="trainer-image">
                <img src="/fitness-images/IMG-20250209-WA0002.jpg" alt="Jane Smith"/>
            </div>
            <h3>Olowogoke Ayodeji</h3>
            <p>Yoga & Wellness Coach</p>
             <a href="tel:+234 7022388021" class="contact-info">📞 +234 7022388021</a>
          </div>
          <div className="trainer-card">
             <div className="trainer-image">
                <img src="/fitness-images/osarodion-amenze-lyKYUOdvsEs-unsplash.jpg" alt="Mike Johnson"/>
            </div>
            <h3>Jane Smith</h3>
            <p>Cardio & HIIT Trainer</p>
               <a href="tel:+234 8023488654" class="contact-info">📞 +234 8023488654</a>
          </div>
          <div className="trainer-card">
            <div className="trainer-image">
                <img src="/fitness-images/valery-sysoev-LDAirERNzew-unsplash.jpg" alt="Emily Davis"/>
            </div>
            <h3>Mike Johnson</h3>
            <p>Nutrition & Fitness Coach</p>
            <a href="tel:+234 8138422068" class="contact-info">📞 +234 8138422068</a>
          </div>
        </div>
      </section>

      <section className="blog-section" id="blog">
        <h2 data-aos="fade-right">Latest from Our Blog</h2>
        <p data-aos="fade-right">Stay updated with the latest trends and tips in fitness and health.</p>
        <div className="blog-container"  data-aos="fade-right">
          <div className="blog-card">
              <div class="blog-image">
                <img src="/fitness-images/wikisleep-app-qvIrI4ueqzY-unsplash.jpg" alt="5 Tips for a Healthier Lifestyle"/>
            </div>
            <h3>5 Tips for a Healthier Lifestyle</h3>
            <p>Simple ways to boost your well-being and maintain health.</p>
             <a href="#" class="btn-read-more">Read More</a>
          </div>
          <div className="blog-card">
             <div class="blog-image">
                <img src="/fitness-images/scott-webb-Vn39uEkX00s-unsplash.jpg" alt="The Benefits of Strength Training"/>
            </div>
            <h3>The Benefits of Strength Training</h3>
            <p>Discover how lifting weights helps your mind and body.</p>
             <a href="#" class="btn-read-more">Read More</a>
          </div>
          <div className="blog-card">
             <div class="blog-image">
                <img src="/fitness-images/anastase-maragos-7kEpUPB8vNk-unsplash.jpg" alt="Cardio vs. Weight Training: Which is Better?"/>
            </div>
            <h3>Cardio vs. Weight Training</h3>
            <p>Which workout is right for your fitness journey?</p>
            <a href="#" class="btn-read-more">Read More</a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <h2 data-aos="fade-right">Contact Us</h2>
        <p data-aos="fade-right">Have questions? Reach out and we’ll be happy to assist you!</p>
        <form className="contact-form" data-aos="fade-right">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-container" data-aos="fade-right">
          <div className="footer-about">
            <h3 data-aos="fade-right">About SureFit</h3>
            <p data-aos="fade-right">Your ultimate fitness partner—helping you live stronger, healthier, and happier.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social" data-aos="fade-right">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><img src="/fitness-images/alexander-shatov-_qsuER9xYOY-unsplash.jpg" alt="Facebook"/></a>
                <a href="#"><img src="/fitness-images/alexander-shatov-k1xf2D7jWUs-unsplash.jpg" alt="Twitter"/></a>
                <a href="#"><img src="/fitness-images/alexander-shatov-71Qk8ODIBko-unsplash.jpg" alt="Instagram"/></a>
                <a href="#"><img src="/fitness-images/alexander-shatov-9Zjd7PE_FRM-unsplash.jpg" alt="LinkedIn"/></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p data-aos="fade-right">&copy; 2025 SureFit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  
        
  );
};

export default SureFitPage;
