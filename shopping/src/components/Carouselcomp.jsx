import { Carousel } from "@material-tailwind/react";

export default function Carouselcomp() {
  return (
    <div>
      <div className="flex justify-center m-5">
        <Carousel autoplay loop autoplayDelay={3000}
        className="rounded-lg w-lg max-w-4xl"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-3 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/4021868/pexels-photo-4021868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
      </div>
    </div>
  )
}
