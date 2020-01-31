import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import WitchIcon from "../assets/images/witch-icon.svg";
import WitchOtherIcon from "../assets/images/witch-other-icon.svg";

const mapStyles1 = [
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        saturation: "-100"
      }
    ]
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: 65
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        lightness: "50"
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: "-100"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        lightness: "30"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        lightness: "40"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        saturation: -100
      },
      {
        visibility: "simplified"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        hue: "#ffff00"
      },
      {
        lightness: -25
      },
      {
        saturation: -97
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        lightness: -25
      },
      {
        saturation: -100
      }
    ]
  }
];

const mapStyle2 = [
  {
    stylers: [
      {
        hue: "#ff1a00"
      },
      {
        invert_lightness: true
      },
      {
        saturation: -100
      },
      {
        lightness: 33
      },
      {
        gamma: 0.5
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#2D333C"
      }
    ]
  }
];

const MyMapComponent = compose(
  withStateHandlers(
    () => ({
      showInfo: false
    }),
    {
      onToggleShowInfo: ({ showInfo }) => () => ({
        showInfo: !showInfo
      })
    }
  ),
  withProps(props => ({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCtjBDJoDvG_KYxvH35y0xLHDKtjdyu8GU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  })),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    options={{
      styles: props.changeLayout ? mapStyle2 : mapStyles1
    }}
    zoom={18}
    center={{ lat: 20.9750042, lng: 105.7637664 }}
  >
    <Marker
      icon={props.changeLayout ? WitchOtherIcon : WitchIcon}
      position={{ lat: 20.974495, lng: 105.763339 }}
      onClick={props.onToggleShowInfo}
    >
      {props.showInfo && (
        <InfoWindow>
          <div>
            <strong
              style={{
                fontSize: "14px",
                color: "#000",
                fontFamily: "Pacifico"
              }}
            >
              Witch Tattoo & Yin Nails
            </strong>
            <br />
            <spa style={{ color: "#000", fontSize: "12px" }}>
              1104 CT2, New Vankhe, Hadong, Hanoi, Vietnam
            </spa>
          </div>
        </InfoWindow>
      )}
    </Marker>
  </GoogleMap>
));

class GoogleMaps extends React.PureComponent {
  render() {
    const { changeLayout } = this.props;
    return <MyMapComponent changeLayout={changeLayout} />;
  }
}

export default GoogleMaps;
