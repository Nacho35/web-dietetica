import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapProps } from '../interfaces/interfaceMap';
import { MainMap, MapTitle, ContainerTitle } from '../styles/styledPointSale';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const Maps = ({ lat, lon, name, title }: MapProps) => {
	const mapRef = useRef<HTMLDivElement | null>(null);
	const map = useRef<L.Map | null>(null);

	useEffect(() => {
		if (mapRef.current && !map.current) {
			map.current = L.map(mapRef.current).setView([lat, lon], 13);
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© OpenStreetMap contributors',
			}).addTo(map.current);

			if (map.current) {
				L.marker([lat, lon]).addTo(map.current).bindPopup(name).openPopup();
			}
		}
	}, [lat, lon, name]);

	return (
		<div>
			<ContainerTitle>
				<MapTitle>{title}</MapTitle>
			</ContainerTitle>
			<MainMap
				ref={mapRef}
				style={{ width: '100%', height: '200px' }}
			></MainMap>
		</div>
	);
};

export default Maps;
