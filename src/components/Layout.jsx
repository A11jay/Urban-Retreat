import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Map, Calendar, MessageSquare, Phone } from 'lucide-react';
import styles from './Layout.module.css';
import { useState, useEffect, useRef } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUnitsOpen, setIsUnitsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <div className={styles.layout}>
      {/* Desktop Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/assets/logo.png" alt="Urban Retreat" className={styles.logoImage} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
              <span style={{ display: 'none' }}>Urban Retreat</span>
            </Link>
          </div>
          
          <nav className={styles.desktopNav}>
            <div className={styles.navDropdown}>
              <button className={styles.dropdownToggle} onClick={() => setIsUnitsOpen(!isUnitsOpen)}>The Units</button>
              <div className={`${styles.dropdownMenu} ${isUnitsOpen ? styles.dropdownMenuVisible : ''}`}>
                <Link to="/property/blossom" onClick={() => setIsUnitsOpen(false)}>Blossom</Link>
                <Link to="/property/leaf" onClick={() => setIsUnitsOpen(false)}>Leaf</Link>
                <Link to="/property/wood" onClick={() => setIsUnitsOpen(false)}>Wood</Link>
                <Link to="/property/heaven" onClick={() => setIsUnitsOpen(false)}>Heaven</Link>
                <Link to="/property/galaxy" onClick={() => setIsUnitsOpen(false)}>Galaxy</Link>
                <Link to="/property/farmhouse" onClick={() => setIsUnitsOpen(false)}>Farm House</Link>
                <Link to="/property/crystal" onClick={() => setIsUnitsOpen(false)}>Crystal</Link>
              </div>
            </div>
            <Link to="/#units">Experiences</Link>
            <Link to="/#location">Location</Link>
          </nav>
          
          <div className={styles.headerActions}>
            <Link to="/#contact" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.8rem' }}>
              Book Now
            </Link>
            <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        {children}
      </main>



      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuVisible : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <button className={styles.closeButton} onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
        </div>
        <nav className={styles.mobileNavLinks}>
          <Link to="/" className={styles.mobileNavLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Home</Link>
          
          <div className={styles.mobileNavLinks} style={{ gap: '0.5rem' }}>
            <button className={styles.mobileNavLink} onClick={() => setIsUnitsOpen(!isUnitsOpen)}>Units</button>
            <div className={`${styles.mobileSubLinks} ${isUnitsOpen ? styles.mobileSubLinksVisible : ''}`}>
              <Link to="/property/blossom" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Blossom</Link>
              <Link to="/property/leaf" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Leaf</Link>
              <Link to="/property/wood" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Wood</Link>
              <Link to="/property/heaven" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Heaven</Link>
              <Link to="/property/galaxy" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Galaxy</Link>
              <Link to="/property/farmhouse" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Farm House</Link>
              <Link to="/property/crystal" className={styles.mobileSubLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Crystal</Link>
            </div>
          </div>

          <Link to="/#units" className={styles.mobileNavLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Experiences</Link>
          <Link to="/#location" className={styles.mobileNavLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Location</Link>
          <Link to="/#contact" className={styles.mobileNavLink} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>Contact</Link>
          
          <Link to="/#contact" className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => { setIsMenuOpen(false); setIsUnitsOpen(false); }}>
            Book Your Stay
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
