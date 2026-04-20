type Props = {
  name: string;
};

export default function Avatar({ name }: Props) {
  return (
    <div className="avatar">
      <div className="sprite">🙂</div>
      <div className="name">{name}</div>
    </div>
  );
}