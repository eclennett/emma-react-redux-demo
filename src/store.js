import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "./counter";
import { photoViewerReducer } from "./photoViewer";
import rootSaga from "./photoViewer/sagas";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
	reducer: {
		counter: counterReducer,
		photoViewer: photoViewerReducer,
	},
	devTools: true,
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
