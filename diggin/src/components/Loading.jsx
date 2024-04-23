import React from "react";

const Loading = () => {
  return (
    <div>
      <script
        src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
        type="module"
      ></script>

      <dotlottie-player
        src="https://lottie.host/1b807730-d900-4163-9331-95e81ca274c2/WdYCsUnXVd.json"
        background="transparent"
        speed="1"
        style="width: 300px; height: 300px;"
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
};

export default Loading;
