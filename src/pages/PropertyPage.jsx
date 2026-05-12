import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Wind, Coffee, Wifi, Tv, Bath, Waves } from 'lucide-react';
import styles from './PropertyPage.module.css';

const unitsData = {
  blossom: {
    title: 'Blossom',
    theme: 'Soft fades, floral motifs',
    color: '#FAD0C9',
    description: 'Experience modern comfort in this chic, well-designed apartment. Featuring contemporary decor, premium amenities, and a prime location near top attractions, it’s perfect for business or leisure travelers seeking style and convenience.',
    heroImage: '/assets/blossom_1.png',
    gallery: ['/assets/blossom_2.png', '/assets/blossom_3.png', '/assets/blossom_4.jpeg', '/assets/blossom_5.png'],
    price: '₹1999',
    type: '1BHK',
    guests: 2,
    bedrooms: 1,
    baths: 1
  },
  galaxy: {
    title: 'Galaxy',
    theme: 'Glassmorphism, deep space',
    color: '#121212',
    description: 'Urban Retreat Galaxy is a modern, thoughtfully designed stay perfect for both short and extended visits. Enjoy a clean, stylish space with comfortable bedding, high-speed WiFi, and all essential amenities for a relaxing experience. Conveniently located, it offers easy access to key spots while giving you a peaceful retreat after a busy day. Ideal for solo travelers, couples, or business guests seeking comfort, convenience, and a premium stay. ✨',
    heroImage: '/assets/galaxy_1.jpg',
    gallery: ['/assets/galaxy_2.jpg', '/assets/galaxy_3.jpg', '/assets/galaxy_4.jpg', '/assets/galaxy_5.jpg'],
    price: '₹1599',
    type: '1 RK Penthouse',
    guests: 2,
    bedrooms: 1,
    baths: 1
  },
  heaven: {
    title: 'Heaven',
    theme: 'Airy whites, floating elements',
    color: '#E8EAED',
    description: '✨ Urban Retreat Heaven ✨\n\nWelcome to your perfect escape in the city – where comfort meets elegance. Urban Retreat Heaven is designed to give you a peaceful stay with modern interiors, stylish décor, and all the essentials for a hassle-free experience. Whether you’re here for business or leisure, you’ll enjoy a cozy ambiance, uninterrupted amenities, and excellent connectivity to the heart of the city.\n\nRelax, recharge, and feel at home in your own little heaven away from home. 🌿🏙️',
    heroImage: '/assets/heaven_2.png',
    gallery: ['/assets/heaven_1.png', '/assets/heaven_3.png', '/assets/heaven_4.png', '/assets/heaven_5.png'],
    price: '₹1599',
    type: '1 RK Penthouse',
    guests: 2,
    bedrooms: 1,
    baths: 1
  },
  leaf: {
    title: 'Leaf',
    theme: 'Organic shapes, lush greenery',
    color: '#C1CFA1',
    description: 'Leaf – A Peaceful Urban Retreat 🌿\n\nWelcome to Leaf, a cozy and refreshing stay designed for comfort and relaxation. This well-lit space offers modern amenities, a comfortable bed, clean washroom, WiFi, AC, and a smart TV for a smooth stay. Perfect for couples, solo travelers, or business guests. Located in a convenient area with easy access to cafes and markets. Relax, unwind, and feel at home at Leaf.',
    heroImage: '/assets/leaf_1.jpg',
    gallery: ['/assets/leaf_2.jpg', '/assets/leaf_3.jpg', '/assets/leaf_4.jpg', '/assets/leaf_5.jpg'],
    price: '₹1999',
    type: '1BHK',
    guests: 2,
    bedrooms: 1,
    baths: 1
  },
  wood: {
    title: 'Wood',
    theme: 'Architectural lines, earth tones',
    color: '#D4A373',
    description: 'Escape into warmth and elegance at Urban Retreat – Wood, a thoughtfully designed stay where nature meets luxury. Crafted with rich wooden interiors and soothing earthy tones, this space offers a cozy yet upscale experience perfect for relaxation.\n\nWhether you’re planning a peaceful getaway, a romantic stay, or a refreshing break from city life, UR – Wood surrounds you with comfort, calm vibes, and modern amenities. Every corner is curated to give you a homely feel with a touch of sophistication.',
    heroImage: '/assets/wood_1.png',
    gallery: ['/assets/wood_2.png', '/assets/wood_3.jpeg', '/assets/wood_4.png', '/assets/wood_5.png'],
    price: '₹1999',
    type: '1BHK',
    guests: 2,
    bedrooms: 1,
    baths: 1
  },
  farmhouse: {
    title: 'Farm House',
    theme: 'Luxury, comfort, and nature',
    color: '#90A955',
    description: 'Experience the perfect blend of luxury, comfort, and nature in this beautifully designed 3BHK farmhouse, created for families who value peaceful living with modern amenities. Surrounded by lush greenery and open landscapes, this farmhouse is not just a home — it is a symbol of your lifestyle, success, and legacy.\n\nThe farmhouse features three spacious bedrooms, including two elegant standard bedrooms and one luxurious master bedroom designed for ultimate comfort and privacy. Each room is thoughtfully planned with ample ventilation, natural lighting, and stylish interiors that create a warm and welcoming atmosphere. The master bedroom offers a premium living experience with sophisticated finishes, spacious storage, and a beautifully designed attached bathroom that adds a touch of luxury to everyday life.\n\nAt the center of the home is a fully equipped and well-set-up kitchen crafted for modern living. Designed with quality fittings, spacious countertops, organized storage, and functional utility space, the kitchen combines style with convenience. Whether preparing daily meals or hosting family gatherings, this kitchen becomes a place where memories are made.\n\nThe living and dining spaces are designed to provide openness and elegance, making them ideal for spending quality time with family and entertaining guests. Large windows allow natural light to brighten every corner while offering beautiful views of the surrounding greenery, creating a peaceful and refreshing environment throughout the home.\n\nThis farmhouse offers a range of premium amenities that enhance your lifestyle and provide the perfect balance of relaxation, recreation, and wellness. A beautifully designed clubhouse serves as the social center of the community where residents can relax, celebrate occasions, and connect with family and friends. It creates a vibrant atmosphere for gatherings and leisure activities.\n\nFor sports and fitness enthusiasts, the property includes indoor activity spaces along with professionally maintained badminton and basketball courts. These facilities encourage an active and energetic lifestyle for both children and adults. A modern gymnasium equipped with essential fitness equipment allows residents to maintain their health and wellness without leaving the comfort of the community.\n\nThe luxurious swimming pool offers the perfect place to unwind and refresh. Surrounded by landscaped greenery and peaceful surroundings, it creates an ideal setting for relaxation and family enjoyment. Beautifully developed gardens throughout the property add natural beauty and serenity, providing open spaces for morning walks, meditation, and peaceful evenings with loved ones.\n\nAdding spiritual harmony to the environment, the farmhouse also features a well-maintained temple within the premises. This peaceful space allows residents to experience calmness, positivity, and spiritual connection in their daily lives.\n\nEvery detail of this farmhouse has been carefully designed to create a lifestyle that reflects elegance, comfort, and timeless value. From modern interiors and premium amenities to natural surroundings and recreational facilities, this property offers everything needed for a fulfilling and luxurious life.\n\nMore than just a residence, this 3BHK farmhouse is a place where memories are created, celebrations are shared, and your legacy continues for generations. It is the perfect destination for those seeking privacy, peace, and premium living in the lap of nature while enjoying all the comforts of modern life.',
    heroImage: '/assets/1000885426.jpg',
    gallery: ['/assets/1000885394.jpg', '/assets/1000885408.jpg', '/assets/1000885418.jpg', '/assets/1000885422.jpg', '/assets/1000885391.jpg', '/assets/1000885412.jpg'],
    price: '₹16999',
    type: '3BHK',
    guests: 8,
    bedrooms: 3,
    baths: 3
  },
  crystal: {
    title: 'Crystal',
    theme: 'Elegance, peace, and modern living',
    color: '#D8E2DC',
    description: 'Experience luxury and comfort at Urban Retreat Crystal, a beautifully designed 2 BHK stay crafted for travelers who love elegance, peace, and modern living. Located in a prime and peaceful area, this stylish apartment offers spacious bedrooms, a cozy living area, a fully equipped kitchen, and aesthetically designed interiors that create a perfect blend of comfort and sophistication. Whether you’re planning a family vacation, a weekend getaway, a business trip, or a long stay, Urban Retreat Crystal provides everything you need for a relaxing experience.\n\nWake up to bright, refreshing spaces and enjoy premium amenities including high-speed WiFi, smart TV, air conditioning, comfortable bedding, modern washrooms, and a serene ambiance that instantly feels like home. Every corner of the property is thoughtfully curated to give guests a luxurious yet homely experience.',
    heroImage: '/assets/crystal_1.jpg',
    gallery: ['/assets/crystal_2.jpg', '/assets/crystal_3.jpg', '/assets/crystal_4.jpg', '/assets/crystal_1.jpg'],
    price: '₹3499',
    type: '2BHK',
    guests: 4,
    bedrooms: 2,
    baths: 2
  }
};

const amenities = [
  { icon: <Wifi size={24} />, label: 'High-Speed WiFi' },
  { icon: <Coffee size={24} />, label: 'Artisan Coffee' },
  { icon: <Wind size={24} />, label: 'Climate Control' },
  { icon: <Bath size={24} />, label: 'Spa Bathroom' },
  { icon: <Tv size={24} />, label: 'Smart Entertainment' },
  { icon: <Waves size={24} />, label: 'Private Pool Access' }
];

const PropertyPage = () => {
  const { id } = useParams();
  const unit = unitsData[id] || unitsData.blossom;
  
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      // Show sticky bar after scrolling past 500px
      if (window.scrollY > 500) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make the background white for Galaxy page
  const isDark = false;
  const textColor = '#1A1A1A';
  const bgColor = unit.title === 'Galaxy' ? '#FFFFFF' : '#F5F5F5';

  return (
    <div className={styles.propertyContainer} style={{ backgroundColor: bgColor, color: textColor }}>
      
      {/* Hero */}
      <section className={styles.hero} style={{ backgroundImage: `url(${unit.heroImage})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>{unit.title}</h1>
          <p>{unit.theme}</p>
        </div>
      </section>

      <div className="container">
        {/* Intro */}
        <section className={styles.intro}>
          <div className={styles.introText}>
            <h2>Experience {unit.title}</h2>
            {unit.description.split('\n').map((paragraph, index) => (
              paragraph.trim() ? <p key={index}>{paragraph}</p> : <br key={index} />
            ))}
          </div>
          <div className={styles.introStats}>
            <div>
              <h3>{unit.guests}</h3>
              <span>Guests</span>
            </div>
            <div>
              <h3>{unit.bedrooms}</h3>
              <span>{unit.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}</span>
            </div>
            <div>
              <h3>{unit.baths}</h3>
              <span>{unit.baths > 1 ? 'Baths' : 'Bath'}</span>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className={styles.experience}>
          <h2>Curated Amenities</h2>
          <div className={styles.amenitiesGrid}>
            {amenities.map((item, index) => (
              <div key={index} className={styles.amenityItem} style={{ borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Gallery */}
        <section className={styles.gallery}>
          <h2>Gallery</h2>
          <div className={styles.masonryGrid}>
            {unit.gallery.map((img, index) => (
              <div key={index} className={`hover-expand ${styles.galleryItem}`}>
                <img src={img} alt={`${unit.title} gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* Live Availability Form */}
        <section className={styles.availability}>
          <div className={styles.availabilityCard} style={{ backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF' }}>
            <h2>Reserve Your Stay</h2>
            <form className={styles.bookingForm}>
              <div className={styles.formGroup}>
                <label>Check-In</label>
                <input type="date" style={{ color: textColor, backgroundColor: isDark ? '#2D2D2D' : '#F5F5F5', border: 'none' }} />
              </div>
              <div className={styles.formGroup}>
                <label>Check-Out</label>
                <input type="date" style={{ color: textColor, backgroundColor: isDark ? '#2D2D2D' : '#F5F5F5', border: 'none' }} />
              </div>
              <div className={styles.formGroup}>
                <label>Guests</label>
                <select style={{ color: textColor, backgroundColor: isDark ? '#2D2D2D' : '#F5F5F5', border: 'none' }} defaultValue={`${unit.guests} Guests`}>
                  {[...Array(unit.guests)].map((_, i) => (
                    <option key={i}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <a 
                href="https://wa.me/918827231536" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`btn ${isDark ? '' : 'btn-primary'}`} 
                style={{ width: '100%', borderColor: textColor, color: isDark ? textColor : '', textAlign: 'center', textDecoration: 'none' }}
              >
                Check Availability
              </a>
            </form>
          </div>
        </section>
      </div>

      {/* Sticky Booking Bar */}
      <div className={`${styles.stickyBar} ${showStickyBar ? styles.stickyBarVisible : ''}`} style={{ backgroundColor: isDark ? '#1E1E1E' : '#FFFFFF', color: textColor, borderTop: `1px solid ${isDark ? '#333' : '#EEE'}` }}>
        <div className={styles.stickyContent}>
          <div className={styles.stickyInfo}>
            <h4>{unit.title} <span style={{ fontSize: '0.8rem', opacity: 0.7, fontWeight: 'normal' }}>({unit.type})</span></h4>
            <p>{unit.price} / night</p>
          </div>
          <a 
            href="https://wa.me/918827231536" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`btn ${isDark ? '' : 'btn-primary'}`} 
            style={{ padding: '0.75rem 2rem', borderColor: textColor, color: isDark ? textColor : '', textDecoration: 'none' }}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
