import CircularGallery from './CircularGallery';

const items = [
  { image: '/images/fk3.png', text: 'Döner Gerichte' },
  { image: '/images/fk4.png', text: 'Frisch zubereitet' },
  { image: '/images/salat.png', text: 'Frischer Salat' },
  { image: '/images/fk1.png', text: 'First Kebap' },
  { image: '/images/fk2.png', text: 'Unsere Küche' },
];

export default function Gallery() {
  return (
    <section id="galerie" style={{ padding: '80px 0 0', background: '#F5EDD8' }}>
      <div style={{ padding: '0 5% 2.5rem' }}>
        <SectionLabel>Galerie</SectionLabel>
        <SectionTitle>Frisch aus unserer Küche</SectionTitle>
        <Divider />
      </div>
      <div style={{ width: '100%', height: '600px' }}>
        <CircularGallery
          items={items}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return <p style={{ fontSize:'0.72rem', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:'#C8960A', marginBottom:'0.5rem' }}>{children}</p>;
}

export function SectionTitle({ children }) {
  return <h2 style={{ fontFamily:"'Playfair Display SC','Playfair Display',Georgia,serif", fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:700, color:'#1A0A06', marginBottom:'0.8rem' }}>{children}</h2>;
}

export function Divider() {
  return <div style={{ width:40, height:3, background:'#C0322A', borderRadius:2, margin:'0.8rem 0 2.5rem' }} />;
}
