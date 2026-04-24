export type AvatarData = {
  name: string;
  status: string;
  task: string;
  music: string;
  snack: string;
  openToChat: boolean;
  sessionStart: number;
}

interface AvatarProps {
  data?: AvatarData;
  name?: string;
}

export default function Avatar({ data, name }: AvatarProps) {
  const displayName = data?.name || name || 'Unknown';
  
  return (
    <div className="avatar">
      <div className="sprite">🙂</div>
      <div className="name">{displayName}</div>
    </div>
  );
}