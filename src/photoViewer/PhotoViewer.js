import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "./slice";

const PhotoViewer = () => {
	const dispatch = useDispatch();
	const photos = useSelector((state) => state.photoViewer.photos);
	const index = useSelector((state) => state.photoViewer.index);

	const handleNextPhoto = () => {
		dispatch(actions.next());
	};

	useEffect(() => {
		dispatch(actions.fetchPhotos());
	}, [dispatch]);

	return (
		<div>
			{photos.length ? (
				<img
					src={photos[index].download_url}
					alt={photos[index].title}
					width={200}
				/>
			) : (
				<div>No Photos </div>
			)}
			index: {index}
			<button onClick={handleNextPhoto}>next</button>
		</div>
	);
};

export default PhotoViewer;
