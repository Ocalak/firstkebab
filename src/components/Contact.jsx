import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SectionLabel, SectionTitle, Divider } from './Gallery';

const HOURS = [
  { day:'Montag',     time:'11:00 – 22:00' },
  { day:'Dienstag',   time:'11:00 – 22:00' },
  { day:'Mittwoch',   time:'11:00 – 22:00' },
  { day:'Donnerstag', time:'11:00 – 22:00' },
  { day:'Freitag',    time:'11:00 – 22:00' },
  { day:'Samstag',    time:'11:00 – 22:00' },
  { day:'Sonntag',    time:'12:00 – 21:00' },
];

const jsDay = new Date().getDay();
const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

const cardV = { hidden:{ opacity:0, y:36 }, show:{ opacity:1, y:0, transition:{ duration:0.6, ease:[0.16,1,0.3,1] } } };
const card = { background:'#fff', border:'1px solid #E8D9C0', borderRadius:8, padding:'2rem', boxShadow:'0 2px 16px rgba(26,10,6,0.06)' };

export default function Contact() {
  return (
    <section id="kontakt" style={{ padding:'80px 5%', background:'var(--bg)' }}>
      <span className="planetono-kicker" style={{ textAlign: 'center' }}>Kontakt</span>
      <h2 className="planetono-headline" style={{ 
        fontSize: 'clamp(3rem, 7vw, 5rem)', 
        textAlign: 'center', 
        marginBottom: '1.5rem', 
        textShadow: '3px 3px 0 var(--secondary)' 
      }}>
        SO FINDEST DU <span style={{ color: 'var(--primary)' }}>UNS</span>
      </h2>
      <div style={{ width: 60, height: 4, background: 'var(--primary)', borderRadius: 2, margin: '0 auto 3rem' }} />

      <motion.div
        initial="hidden" whileInView="show" viewport={{ once:true, margin:'-60px' }}
        variants={{ hidden:{}, show:{ transition:{ staggerChildren:0.12 } } }}
        style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.5rem' }}
      >
        {/* Hours */}
        <motion.div variants={cardV} className="brutal-card" style={{ padding: '2rem' }}>
          <CardTitle>ÖFFNUNGSZEITEN</CardTitle>
          {HOURS.map(({ day, time }, i) => {
            const isToday = i === todayIndex;
            return (
              <div key={day} style={{ display:'flex', justifyContent:'space-between', padding:'0.6rem 0', borderBottom: i<HOURS.length-1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                <span style={{ fontSize:'0.9rem', color: isToday ? 'var(--primary)' : 'var(--black)', fontWeight: isToday ? 800 : 600 }}>{day}</span>
                <span style={{ fontFamily:'var(--head)', fontSize:'1rem', color: isToday ? 'var(--primary)' : 'var(--black)', fontWeight: 700, letterSpacing: '1px' }}>{time}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Info */}
        <motion.div variants={cardV} className="brutal-card" style={{ padding: '2rem' }}>
          <CardTitle>KONTAKT & ADRESSE</CardTitle>
          <Row Icon={MapPin} label="Adresse">Atroper Str. 16<br />47226 Duisburg</Row>
          <Row Icon={Phone} label="Telefon">
            <a href="tel:01632364246" style={{ color:'var(--primary)', textDecoration:'none', fontWeight:700, fontFamily: 'var(--head)', fontSize: '1.1rem', letterSpacing: '1px' }}>0163 2364246</a>
          </Row>
          <Row Icon={Clock} label="Heute geöffnet">{HOURS[todayIndex].time}</Row>
        </motion.div>

        {/* Map */}
        <motion.div variants={cardV} className="brutal-card" style={{ padding:0, overflow:'hidden', gridColumn:'1 / -1' }}>
          <div style={{ padding:'1.5rem 2rem 1rem' }}>
            <CardTitle>STANDORT</CardTitle>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487!2d6.7317!3d51.4108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c3a1234!2sAtroper+Str.+16%2C+47226+Duisburg!5e0!3m2!1sde!2sde!4v1"
            width="100%" height="320" style={{ display:'block', border:0 }}
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="First Kebap Standort"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function CardTitle({ children }) {
  return <h3 style={{ fontFamily:"var(--head)", fontSize:'1.4rem', fontWeight:700, color:'var(--primary)', marginBottom:'1.3rem', letterSpacing: '1px' }}>{children}</h3>;
}

function Row({ Icon, label, children }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'1rem 0', borderBottom:'1px solid rgba(0,0,0,0.05)' }}>
      <div style={{ background: 'var(--bg2)', padding: '0.6rem', borderRadius: 8, border: '1.5px solid var(--black)', display: 'flex' }}>
        <Icon size={18} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink:0 }} />
      </div>
      <div>
        <div style={{ fontSize:'0.75rem', fontWeight:800, textTransform:'uppercase', letterSpacing:'2px', color:'var(--primary)', marginBottom:4, fontFamily: 'var(--head)' }}>{label}</div>
        <div style={{ fontSize:'0.95rem', color:'var(--black)', lineHeight:1.5, fontWeight: 600 }}>{children}</div>
      </div>
    </div>
  );
}
