import { all, call, takeEvery, put } from "redux-saga/effects";
import * as api from "./api";
import * as actions from "./slice";

export function* fetchPhotosRequest() {
	try {
		const photos = yield call(api.fetchPhotos);
		yield put(actions.fetchPhotosSuccess(photos));
	} catch (e) {
		yield put(actions.fetchPhotosError(e));
	}
}

export default function* rootSaga() {
	yield all([takeEvery(actions.fetchPhotos, fetchPhotosRequest)]);
}
