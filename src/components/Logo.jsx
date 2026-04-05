export default function Logo({ variant = 'nav', style = {} }) {
  const sizes = { nav: 56, hero: 120, footer: 48 };
  const size = sizes[variant] ?? 56;
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      boxShadow: variant === 'nav' ? '0 2px 8px rgba(26,10,6,0.15)' : 'none',
      ...style,
    }}>
      <img src="/images/donerfk.png" alt="First Kebap"
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%', display: 'block' }} />
    </div>
  );
}
