import { useRef, useState } from 'react';
import { PauseButtonSvg, PlayButtonSvg } from '../SvgContainer/SvgContainer';

const VideoGalleryContainer = ({video,idx}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  return (
    <div data-aos="fade-up"
    data-aos-delay={100*idx}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[300px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] flex items-end relative"
    >
      {/* Play/Pause button container */}

      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-4 rounded-full cursor-pointer z-20">
        <div
          className={`size-16 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm ${
            isPlaying ? 'hidden' : 'block'
          }`}
          onClick={() => {
            setIsPlaying(true);
            videoRef.current.loop = true;
            videoRef.current.play();
          }}
        >
          <PlayButtonSvg />
        </div>
        <div
          className={`size-16 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isPlaying && hovered ? 'block' : 'hidden'
          }`}
          onClick={() => {
            setIsPlaying(false);
            videoRef.current.pause();
          }}
        >
          <PauseButtonSvg />
        </div>
      </div>

      {/* Video container */}
      <div className="h-full w-full border border-white rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={video}
        ></video>
      </div>
    </div>
  );
};

export default VideoGalleryContainer;
