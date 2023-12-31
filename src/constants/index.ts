import tuningImage from 'images/3dtuning.jpg';
import digiconnectImage from 'images/digiconnect.jpg';
import justhiveImage from 'images/justhive.jpg';
import lpmaImage from 'images/LPMA.jpg';
import recomazingImage from 'images/recomazing.jpg';
import { ToastOptions } from 'react-toastify';

export const MAP_API_KEY: string = process.env[
  'REACT_APP_MAP_API_KEY'
] as string;
export const MapStyle = {
  height: '100%',
  width: '100%',
  background: 'transparent',
};

export const DefaultCenter = {
  lat: 40.1788741345399,
  lng: 44.52203759550231,
};

export const markerPosition = {};

export const Zoom = 15;

export const GoogleMapStyle = [
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#d3d3d3',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        color: '#808080',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b3b3b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        weight: 1.8,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#d7d7d7',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ebebeb',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a7a7a7',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#efefef',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#696969',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#737373',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#d6d6d6',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
];

export const ServicesPathNames = {
  web: '/web-applications',
  desktop: '/desktop-applications',
  chrome: '/chrome-extensions',
};
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

export const formTypes = {
  global: {
    btnTitle: 'Request a Quote',
    formTitle: 'Tell Us About Your Project',
  },
  webApp: {
    btnTitle: 'Need a Web Application?',
    formTitle: 'TELL US ABOUT YOUR WEB APPLICATION',
  },
  chrome: {
    btnTitle: 'Get Your Extension Project Quote',
    formTitle: 'Get Your Extension Project Quote',
  },
  desktop: {
    btnTitle: 'Need a Desktop Application?',
    formTitle: 'TELL US ABOUT YOUR Desktop APPLICATION',
  },
  approach: {
    btnTitle: 'TELL US ABOUT YOUR PROJECT',
    formTitle: 'New Form',
  },
};

//urls
export const manDeveloperImg =
  'https://www.outbrain.com/case-studies/wp-content/uploads/2022/01/GettyImages-516895432-Smiling-Businessman-on-Tablet-min.jpg';
export const superPowerImg =
  'https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1659634209/BestColleges.com/BC_Bootcamps_Resources_How-to-Decide-If-Coding-is-Right-for-Me_3.7.22_FTR_24718e35be/BC_Bootcamps_Resources_How-to-Decide-If-Coding-is-Right-for-Me_3.7.22_FTR-1024x683.jpg';
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
export const videoUrl =
  'https://www.youtube.com/embed/sMIohOq4lkU?si=fZTxk9oL_p-68zku';
export const careerDetailsImg1 =
  'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/5b5bec5f-186d-492c-9447-3043d0c19db7/DSC07803.jpg?format=1500w';

export const homeUrl =
  'https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg';

export const webUrl =
  'https://images.unsplash.com/photo-1539689007727-bf17b6198946?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80';

export const chromeUrl =
  'https://www.codefuel.com/wp-content/uploads/2022/02/How-to-make-a-chrome-extention.jpg';

export const desktopUrl =
  'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';

export const approachUrl =
  'https://www.accountability.org/static/dd2a3fb09c6d5a28be81ed7ae8cc03e9/89218/AccountAbility_Careers.webp';

export const aboutUrl =
  'https://d7fi61gsgzcz4.cloudfront.net/assets/page-hero-images/istock-493171547_2500.jpg/dynamic:1-aspect:2.5-fit:cover-strategy:entropy/istock-493171547_2500--1400.webp';

export const mapOptions = {
  styles: GoogleMapStyle,
  disableDefaultUI: true,
};
// servicesUrl
export const postUrlForm = 'https://nk-it-company-068381af881c.herokuapp.com';
//tost
export const toastDefaultValue = (): ToastOptions => {
  return {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
};
