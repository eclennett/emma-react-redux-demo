import Counter from "./counter";
import PhotoViewer from "./photoViewer";

function App() {
	return (
		<div>
			<header>Counter App</header>
			<Counter name="Grad Counter" />
			<header>Photo Viewer</header>
			<PhotoViewer />
		</div>
	);
}

export default App;
