import { SearchPhotos } from 'components';
import { useEffect, useState } from 'react';
import { fetchImages } from '../../services/pexelsAPI';

const Photos = () => {
	const [query, setQuery] = useState('');
	const [page, setPage] = useState(1);
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		if (!query) return;
		const fetchData = async () => {
			try {
				const res = await fetchImages(query, page);
				setPhotos(prev => [...prev, ...res.photos]);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [query, page]);

	const handleSearchSubmit = value => {
		setQuery(value);
	};

	return (
		<div>
			<SearchPhotos onSearchSubmit={handleSearchSubmit} />
		</div>
	);
};

export default Photos;
