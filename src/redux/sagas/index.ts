import { all } from 'redux-saga/effects';
import { watchUsers } from './user.sagas';

export default function* rootSagas(): Generator {
    yield all([
        watchUsers()
    ]);
}