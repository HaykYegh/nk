import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {
  DefaultCenter,
  MAP_API_KEY,
  MapStyle,
  Zoom,
  GoogleMapStyle,
} from '../../../../constants';

import MapLoading from './components/MapLoading';

import styles from './OurOffice.module.scss';

const OurOfficeMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
  });

  return (
    <div className={styles.map_wrapper}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={MapStyle}
          center={DefaultCenter}
          zoom={Zoom}
          options={{
            styles: GoogleMapStyle,
          }}
        >
          <Marker position={DefaultCenter} />
        </GoogleMap>
      ) : (
        <MapLoading />
      )}
    </div>
  );
};

export default OurOfficeMap;
