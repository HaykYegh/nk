import tuningImage from 'images/3dtuning.jpg';
import digiconnectImage from 'images/digiconnect.jpg';
import justhiveImage from 'images/justhive.jpg';
import lpmaImage from 'images/LPMA.jpg';
import recomazingImage from 'images/recomazing.jpg';

export const MAP_API_KEY: string = process.env[
  'REACT_APP_MAP_API_KEY'
] as string;
export const MapStyle = {
  height: '100%',
  width: '100%',
  background: 'transparent',
};

export const DefaultCenter = {
  lat: 40.712776,
  lng: -74.005974,
};

export const Zoom = 10;

export const GoogleMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#523735',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#c9b2a6',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#dcd2be',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#ae9e90',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#93817c',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#a5b076',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#447530',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f1e6',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fdfcf8',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f8c967',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#e9bc62',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e98d58',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#db8555',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#806b63',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8f7d77',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#ebe3cd',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dfd2ae',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#b9d3c2',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#92998d',
      },
    ],
  },
];

export const SliderData = [
  {
    imgUrl: recomazingImage,
    id: 1,
    activeImage: true,
  },

  {
    imgUrl: digiconnectImage,
    id: 2,
    activeImage: false,
  },

  {
    imgUrl: justhiveImage,
    id: 3,
    activeImage: false,
  },

  {
    imgUrl: lpmaImage,
    id: 4,
    activeImage: false,
  },

  {
    imgUrl: tuningImage,
    id: 5,
    activeImage: false,
  },
];
//urls
export const manDeveloperImg =
  'https://www.outbrain.com/case-studies/wp-content/uploads/2022/01/GettyImages-516895432-Smiling-Businessman-on-Tablet-min.jpg';
export const superPowerImg =
  'https://www.realmenrealstyle.com/wp-content/uploads/2023/06/Women-Like-A-Man-To-Show-Vulnerability.jpg';
export const oficeImg =
  'https://pix4free.org/assets/library/2021-01-12/originals/office_meeting_men_women_laptop_table.jpg';
export const matureImg =
  'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwaW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

export const dennisImg =
  'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1515591702915-SM4JMJU78OMO6KS047HI/Bryce+York?format=1500w';
export const volodymyrImg =
  'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1515591744281-83SFNC3CAJ7ZQLQPISCQ/Artboard+2.jpg?format=2500w';
export const bryceImg =
  'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1515591772961-IWKIF46WAJ3LTBXMTV7F/Volodymyr+Khokhlachov?format=2500w';

export const careerFirstUrl =
  'https://www.youtube.com/embed/UjaZVGBYW60?si=Yt2QiaDmzVFn4dF3';
export const careerSecondUrl =
  'https://www.youtube.com/embed/V84IycATdvA?si=564EZlDUjJMWyrg5';
export const videoUrl = 'https://www.youtube.com/embed/Yk1uCWWUl-4';
export const careerDetailsImg1 =
  'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/5b5bec5f-186d-492c-9447-3043d0c19db7/DSC07803.jpg?format=1500w';
