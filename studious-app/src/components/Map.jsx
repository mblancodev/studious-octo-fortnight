import { useEffect, useRef, useLayoutEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import { getUserLocation } from '../helpers/getUserlocation';
import './Map.scss';
const MapContainer = ( Token ) => {

  const Tok = Token.Token;
  const dispatch = useDispatch();
  const mapDiv = useRef(null);
  const [lng, setLng] = useState(0); // Ajusta el estado según lo necesario
  const [lat, setLat] = useState(0); // Ajusta el estado según lo necesario
  const [zoom, setZoom] = useState(0); // Ajusta el estado según lo necesario

  const isloading = useSelector((state) => state.map.isLoadingMap);
  const userLocation = useSelector((state) => state.map.userLocation);
  
  // useEffect(() => {

  //   if (!map) {
  //     mapboxgl.accessToken = Tok;
  //     const mapInstance = new mapboxgl.Map({
  //       container: mapDiv.current,
  //       style: 'mapbox://styles/mapbox/streets-v12',
  //       center: userLocation,
  //       zoom: 9
  //     });

  //     dispatch({ type: 'INITIALIZE_MAP', payload:{mapInstance}  });
  //   }

  // }, [dispatch, map, userLocation, Tok]);


  useEffect(() => {
    if (!userLocation) {
      getUserLocation()
        .then(coordinates => {
            setLat(userLocation);
          setLng(userLocation);
          
          dispatch({ type: 'SET_USER_LOCATION', payload:  coordinates  });

        })
        .catch(error => {
          console.error('Error getting user location:', error);
        });
    }
  }, [dispatch, userLocation]);



  useLayoutEffect(() => {
    if (!isloading && userLocation){
      mapboxgl.accessToken = Tok;
      const mapInstance = new mapboxgl.Map({
        container: mapDiv.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [userLocation[0], userLocation[1]],
        zoom: 9
      });
  
      mapInstance.on('move', () => {
        setLng(mapInstance.getCenter().lng.toFixed(4));
        setLat(mapInstance.getCenter().lat.toFixed(4));
        setZoom(mapInstance.getZoom().toFixed(2));
      });
  
      console.log(mapInstance);
      
      return () => {
        if (mapInstance) {
          mapInstance.remove();
        }
      };
    }
  }, [ isloading,Tok, userLocation]);
  




  return (
    <div>
     
     <div className="sidebar">
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
     <div ref={mapDiv} style={{ marginTop: '50px', width: '100%', height: '800px' }} />;

    </div>
  )
  
};

export default MapContainer;


