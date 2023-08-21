import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {
  DefaultCenter,
  MAP_API_KEY,
  MapStyle,
  Zoom,
  GoogleMapStyle,
} from '../../../../constants';

import { MapLoading } from './components/MapLoading';

import styles from './OurOffice.module.scss';

const OurOfficeMap = () => {
  return (
    <div className={styles.map_wrapper}>
      <LoadScript
        googleMapsApiKey={MAP_API_KEY}
        loadingElement={<MapLoading />}
      >
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
      </LoadScript>
    </div>
  );
};

export default OurOfficeMap;
