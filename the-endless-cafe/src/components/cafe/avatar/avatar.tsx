export default function Avatar({ name }: { name: string }) {
  return (
    <div className="avatar">
      <div className="sprite">🙂</div>
      <div className="name">{name}</div>
    </div>
  );
}