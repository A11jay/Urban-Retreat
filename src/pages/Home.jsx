import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';

gsap.registerPlugin(ScrollTrigger);

const units = [
  {
    id: 'blossom',
    title: 'Blossom',
    theme: 'Soft fades, floral motifs',
    color: '#FAD0C9',
    textColor: '#1A1A1A',
    image: '/assets/1000885391.jpg'
  },
  {
    id: 'leaf',
    title: 'Leaf',
    theme: 'Organic shapes, lush greenery',
    color: '#C1CFA1',
    textColor: '#1A1A1A',
    image: '/assets/1000885394.jpg'
  },
  {
    id: 'wood',
    title: 'Wood',
    theme: 'Architectural lines, earth tones',
    color: '#D4A373',
    textColor: '#1A1A1A',
    image: '/assets/1000885407.jpg'
  },
  {
    id: 'heaven',
    title: 'Heaven',
    theme: 'Airy whites, floating elements',
    color: '#E8EAED',
    textColor: '#1A1A1A',
    image: '/assets/1000885411.jpg'
  },
  {
    id: 'galaxy',
    title: 'Galaxy',
    theme: 'Glassmorphism, deep space',
    color: '#121212',
    textColor: '#F5F5F5',
    image: '/assets/1000885421.jpg'
  },
  {
    id: 'farmhouse',
    title: 'Farm House',
    theme: 'Luxury, comfort, and nature',
    color: '#90A955',
    textColor: '#F5F5F5',
    image: '/assets/1000885426.jpg'
  }
];

const Home = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax Hero
    gsap.to(heroRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Horizontal Scroll for Units
    const sections = gsap.utils.toArray(`.${styles.unitPanel}`);
    
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sliderRef.current.offsetWidth * sections.length
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className={styles.homeContainer} ref={containerRef}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Urban Retreat</h1>
          <p className={styles.heroSubtitle}>Discover your natural habitat in the heart of luxury.</p>
          <a href="#contact" className="btn btn-primary">Book Now</a>
        </div>
        
        <div className={styles.heroVideoWrapper}>
          <div className={styles.heroVideoInner} ref={heroRef}>
            <video 
              src="/assets/1000885425.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className={styles.heroVideo}
            ></video>
          </div>
        </div>
      </section>

      {/* Dynamic Unit Slider */}
      <section className={styles.sliderContainer} ref={sliderRef} id="units">
        <div className={styles.sliderWrapper}>
          {units.map((unit, index) => (
            <div 
              key={unit.id} 
              className={styles.unitPanel}
              style={{ backgroundColor: unit.color, color: unit.textColor }}
            >
              <div className={styles.unitContent}>
                <div className={styles.unitText}>
                  <p className={styles.unitNumber}>0{index + 1}</p>
                  <Link to={`/property/${unit.id}`}>
                    <h2>{unit.title}</h2>
                  </Link>
                  <p className={styles.unitTheme}>{unit.theme}</p>
                  <Link to={`/property/${unit.id}`} className="btn" style={{ borderColor: unit.textColor, color: unit.textColor }}>
                    Experience {unit.title}
                  </Link>
                </div>
                <div className={styles.unitImageWrapper}>
                  <div className={`hover-expand ${styles.unitImageInner}`}>
                    <img src={unit.image} alt={unit.title} className={styles.unitImage} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer / Contact Section */}
      <section className={styles.contactSection} id="contact">
        <div className="container">
          <h2>Your Sanctuary Awaits</h2>
          <p>Contact our concierge for exclusive high-ticket inquiries.</p>
          <a href="https://wa.me/918827231536" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '2rem' }}>Contact Concierge - Abhishek (+918827231536)</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
