import Maps from './Maps';
import {
	MainContainer,
	Header,
	Text,
	MapContainer,
	InnerContainer,
	MainContainerMap,
	SecondText,
} from '../styles/styledPointSale';

const PointSale = ({ id = 'pointsale' }) => {
	const saleLocations = [
		{
			id: 1,
			lat: 42.3601,
			lon: -71.0589,
			name: '123 Main Street, Boston, MA 02111',
			title: 'Boston, Massachusetts',
		},
		{
			id: 2,
			lat: 39.1141,
			lon: -94.6275,
			name: '101 16th Street, Kansas City, KS 66101',
			title: 'Kansas City, Misuri',
		},
		{
			id: 3,
			lat: 43.0731,
			lon: -89.4012,
			name: '321 State Street, Madison, WI 53703',
			title: 'Madison, Wisconsin',
		},
	];

	return (
		<MainContainer id={id}>
			<InnerContainer>
				<Header>Point of Sale</Header>
				<Text>
					Do you want to purchase our products without incurring shipping costs?
					<SecondText>
						We share our active physical points of sale in North America
					</SecondText>
				</Text>
			</InnerContainer>
			<MainContainerMap>
				<MapContainer>
					{saleLocations.map(location => (
						<Maps
							key={location.id}
							lat={location.lat}
							lon={location.lon}
							name={location.name}
							title={location.title}
						/>
					))}
				</MapContainer>
			</MainContainerMap>
		</MainContainer>
	);
};

export default PointSale;
