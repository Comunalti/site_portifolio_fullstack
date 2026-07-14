export function Marquee({ skills }: { skills: string[] }) {
  if (skills.length === 0) return null;
  const track = (
    <div className="marquee-track" aria-hidden="true">
      {skills.map((s) => (
        <span key={s}>{s}</span>
      ))}
    </div>
  );
  return (
    <div className="marquee" role="presentation">
      {track}
      {track}
    </div>
  );
}
