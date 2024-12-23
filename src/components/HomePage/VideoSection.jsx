import Container from "../container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import video from "../../assets/videos/video.mov";

const slides = [
    {
      id: 1,
      thumbnail: "https://i.ibb.co.com/cFLDfxG/Screenshot-3.png",
      video: `${video}`,
      title: "In Deep",
      description:
        "We know our obsession with snow outerwear is probably unhealthy, but when you’re constantly dreaming about wild peaks and bottomless powder, you can’t help but go over-the-dome deep.",
    },
    {
      id: 2,
      thumbnail: "https://i.ibb.co.com/cFLDfxG/Screenshot-3.png",
      video: `${video}`,
      title: "In Deep",
      description:
        "We know our obsession with snow outerwear is probably unhealthy, but when you’re constantly dreaming about wild peaks and bottomless powder, you can’t help but go over-the-dome deep.",
    },
  ];

function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  

  const handleWatch = (video) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedVideo(null);
  };

  return (
    <section className="pb-[100px] custom-xs:pb-[30px]" data-aos="fade-in">
      <Container>
        <div>
          <Swiper
            spaceBetween="20"
            slidesPerView={1}
            speed={1400}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop="true"
            modules={[Autoplay]}
            className="mySwiper"
          >
            {slides.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="video-slide bg-cover bg-center bg-no-repeat min-h-[720px] custom-2xl:min-h-[600px] custom-xl:min-h-[600px] max-md:min-h-[440px] custom-xs:!min-h-[330px] rounded-[32px] custom-xs:rounded-[14px] p-10 relative"
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                >
                  <div className="absolute bottom-10 left-10 w-[400px] custom-sm:w-[300px] custom-xs:w-[300px] custom-sm:left-5 custom-xs:left-6 custom-xs:bottom-6">
                    <h3 className="text-[56px] max-md:text-[36px] custom-xs:!text-[28px] max-md:mb-3 text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base text-white max-md:text-sm">
                      {item.description}
                    </p>
                    {/* Buttons */}
                    <div className="flex items-center gap-2 mt-4">
                      <Link to="/" className="video-slide-btn">
                        Explore
                      </Link>
                      <div
                        className="video-slide-btn cursor-pointer"
                        onClick={() => handleWatch(item.video)}
                      >
                        <p className="text-[20px]">
                          <IoIosPlay />
                        </p>
                        Watch
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         {/* Single Dialog Component */}
         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent
            className="max-w-[1200px] max-md:max-w-[90%] w-full"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <DialogHeader>
              {selectedVideo && (
                <div className="relative w-full">
                  <video
                    src={selectedVideo}
                    controls
                    autoPlay
                    className="w-full rounded-lg"
                  />
                </div>
              )}
            </DialogHeader>
            <DialogFooter>
              <button
                onClick={handleCloseDialog}
                className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all"
              >
                Close
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
}

export default VideoSection;
