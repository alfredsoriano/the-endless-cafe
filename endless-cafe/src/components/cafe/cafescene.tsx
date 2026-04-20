import Avatar from './avatar/avatar.tsx';
import './cafe.css';

export default function CafeScene() {
  return (
    <div className="cafe">
      <div className="room">
        
        {/* LEFT: Main player */}
        <div className="left">
          <Avatar name="You" />
        </div>

        {/* RIGHT: Other players */}
        <div className="right">
          <Avatar name="Alex" />
          <Avatar name="Sam" />
          <Avatar name="Jordan" />
        </div>

      </div>
    </div>
  );
}