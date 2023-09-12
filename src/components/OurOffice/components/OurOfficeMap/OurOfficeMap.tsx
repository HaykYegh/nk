import { useEffect, useState } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import {
  DefaultCenter,
  MAP_API_KEY,
  MapStyle,
  Zoom,
  mapOptions,
} from '../../../../constants';
import { IMarkersPos } from './OurOfficeMapTypes';

import MapLoading from './components/MapLoading';

import styles from './OurOffice.module.scss';

const OurOfficeMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: MAP_API_KEY,
  });
  const [markers, setMarkers] = useState<IMarkersPos[]>([]);

  useEffect(() => {
    if (isLoaded) {
      setMarkers([DefaultCenter]);
    }
  }, [isLoaded]);

  return (
    <div className={styles.map_wrapper}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={MapStyle}
          center={DefaultCenter}
          zoom={Zoom}
          options={mapOptions}
        >
          {markers.map((marker, index) => {
            return (
              <Marker
                key={index}
                position={{ lat: marker.lat, lng: marker.lng }}
              />
            );
          })}
        </GoogleMap>
      ) : (
        <MapLoading />
      )}
    </div>
  );
};

export default OurOfficeMap;
