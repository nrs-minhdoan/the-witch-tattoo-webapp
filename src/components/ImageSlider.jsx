import React from "react";
import Slider from "react-slick";
import "./imageSlider.css";

const images = [
  "https://wallpapercave.com/wp/wp2888460.jpg",
  "https://wallpapercave.com/wp/FInTVx9.jpg",
  "https://images.wallpaperscraft.com/image/graffiti_art_bright_120714_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/graffiti_art_wall_117213_1920x1080.jpg",
  "https://wallpaperaccess.com/full/512763.jpg",
  "https://images.wallpaperscraft.com/image/graffiti_octopus_street_art_122657_1920x1080.jpg"
];

class ImageSlider extends React.PureComponent {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      centerPadding: "0px",
      autoplaySpeed: 3000,
      speed: 500,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { changeLayout } = this.props;
    return (
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} style={{ cursor: "default" }}>
              <img
                src={item}
                alt={""}
                style={{ width: "100%", height: "50vh", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
        <div className={changeLayout ? "card-visit-other" : "card-visit"}>
          <div style={{ fontFamily: "Pacifico", fontSize: "33px" }}>
            Witch Tattoo & Yin Nails
          </div>
          <div
            style={{
              fontSize: "18px",
              color: changeLayout ? "#fd79a8" : "#cf8f2a"
            }}
          >
            1104 CT2, New Vankhe, Hadong, Hanoi, Vietnam
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
