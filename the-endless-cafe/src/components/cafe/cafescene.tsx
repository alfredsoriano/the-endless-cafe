import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { type Ref } from 'react';
import Avatar, { type AvatarData } from './avatar/avatar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cafe.css';

export default function CafeScene() {

    // Mock data for main user and others in the cafe *********************
    const mainUser: AvatarData = {
    name: "You",
    status: "working",
    task: "Building Endless Cafe",
    music: "Ambient",
    snack: "Coffee",
    openToChat: true,
    sessionStart: Date.now() - 1000 * 60 * 5,
  };

    const others: AvatarData[] = [
    {
      name: "Sam",
      status: "break",
      task: "Watching videos",
      music: "Jazz",
      snack: "Croissant",
      openToChat: false,
      sessionStart: Date.now() - 1000 * 60 * 10,
    },
    {
      name: "Jordan",
      status: "working",
      task: "Writing code",
      music: "Synthwave",
      snack: "Tea",
      openToChat: true,
      sessionStart: Date.now() - 1000 * 60 * 40,
    },
        {
      name: "Alfred",
      status: "working",
      task: "Reading",
      music: "R&B",
      snack: "Chips",
      openToChat: false,
      sessionStart: Date.now() - 1000 * 60 * 40,
    },
  ];
  // ***********************************************************************

  const renderTooltip = (avatar: AvatarData) => (
    <Tooltip id={`tooltip-${avatar.name}`}>
      <div>
        <strong>{avatar.name}</strong>
        <div>💻 {avatar.task}</div>
        <div>🎧 {avatar.music}</div>
        <div>🍪 {avatar.snack}</div>
        <div>⏱️ {Math.floor((Date.now() - avatar.sessionStart) / 60000)} min</div>
      </div>
    </Tooltip>
  );

  return (
    <div className="cafe">
      <div className="room">
        
        {/* LEFT: Main player */}
        <div className="left">
           <OverlayTrigger
            placement="top"
            overlay={renderTooltip(mainUser)}
            delay={{ show: 250, hide: 400 }}
          >
            {({ ref, ...triggerHandler }: { ref: Ref<HTMLDivElement> }) => (
              <div
                ref={ref}
                {...triggerHandler}
              >
                <Avatar data={mainUser} />
              </div>
            )}
          </OverlayTrigger>
        </div>

        {/* RIGHT: Other players */}
        <div className="right">
          {others.map((avatar) => (
            <OverlayTrigger
              key={avatar.name}
              placement="top"
              overlay={renderTooltip(avatar)}
              delay={{ show: 250, hide: 400 }}
            >
              {({ ref, ...triggerHandler }: { ref: Ref<HTMLDivElement> }) => (
                <div
                  ref={ref}
                  {...triggerHandler}
                >
                  <Avatar data={avatar} />
                </div>
              )}
            </OverlayTrigger>
          ))}
        </div>

      </div>

    </div>
  );
}