import React from "react";
import ImageSlider from "../components/ImageSlider";
import ProductSlider from "../components/ProductSlider";
import GoogleMaps from "../components/GoogleMaps";
import "./Styles.css";

const avatar1 = `url('https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/45108068_556030164849803_8053402810617692160_n.jpg?_nc_cat=110&_nc_oc=AQnObtij37NgT5qjWMcyHIwHtj6h3HiyVDK1k1V2voy_EAxtf6fg7Pdfzy-oIE2A5Ss&_nc_ht=scontent.fhan2-4.fna&oh=b4ff64e6096fbb4f9f8c38c031f9db36&oe=5CF22F94')`;
const avatar2 = `url('https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/42674324_1174379399378736_1842145210222510080_n.jpg?_nc_cat=106&_nc_oc=AQnlRiZpOr-3jmY8zWUm21JfbzgMlGC3v6_tIKS2Z03wtqP1v7AMkg1ATOFowvCtLao&_nc_ht=scontent.fhan2-1.fna&oh=844181b1f15b891b34a64006da8730a9&oe=5CEFFD52')`;

class Home extends React.PureComponent {
  render() {
    const { changeLayout } = this.props;
    return (
      <div className={changeLayout ? "main-page-other" : "main-page"}>
        <ImageSlider changeLayout={changeLayout} />
        <div
          className={"wrapper-align-center"}
          style={{
            flexDirection: "column",
            padding: "30px 300px",
            marginTop: "-10px",
            backgroundColor: changeLayout ? "#fff" : "#000"
          }}
        >
          <div
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              color: changeLayout ? "#fd79a8" : "#cf8f2a"
            }}
          >
            Introduction
          </div>
          <div
            className={"introduction"}
            style={{
              color: changeLayout ? "#fd79a8" : "#cf8f2a",
              fontWeight: "normal"
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div
            className={"introduction"}
            style={{
              color: changeLayout ? "#fd79a8" : "#cf8f2a",
              fontWeight: "normal"
            }}
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </div>
        </div>
        <div
          className={"wrapper-align-center"}
          style={{
            flexDirection: "column",
            padding: "30px",
            backgroundColor: changeLayout ? "#fd79a8" : "#cf8f2a"
          }}
        >
          <div
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              color: changeLayout ? "#fff" : "#000"
            }}
          >
            Our Tattoo & Nail Artists
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <a
              href={"https://www.instagram.com/dinhtuan_nghia"}
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <div className={"wrapper-avatar"}>
                <div
                  className={"avatar-artist"}
                  style={{ backgroundImage: avatar1 }}
                />
                <div className={"name-artist"} style={{ color: "#fff" }}>
                  Tuan Nghia Dinh <br />
                  <span className={"type-artist"}>Tattoo Artist</span>
                </div>
              </div>
            </a>
            <a
              href={"https://www.instagram.com/haiiyenn4280"}
              target={"_blank"}
              style={{ textDecoration: "none" }}
            >
              <div className={"wrapper-avatar"}>
                <div
                  className={"avatar-artist"}
                  style={{ backgroundImage: avatar2 }}
                />
                <div className={"name-artist"} style={{ color: "#fff" }}>
                  Hai Yen Do Thi <br />
                  <span className={"type-artist"}>Nail Artist</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div
          className={"wrapper-align-center"}
          style={{
            flexDirection: "column",
            padding: "30px 30px 50px",
            backgroundColor: changeLayout ? "#fff" : "#19191a"
          }}
        >
          <div
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              color: changeLayout ? "#fd79a8" : "#cf8f2a"
            }}
          >
            Our Products
          </div>
          <div style={{ width: "100%" }}>
            <ProductSlider changeLayout={changeLayout}/>
          </div>
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <GoogleMaps changeLayout={changeLayout} />
        </div>
      </div>
    );
  }
}

export default Home;
