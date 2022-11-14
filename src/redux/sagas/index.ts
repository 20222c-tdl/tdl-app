import { all } from 'redux-saga/effects';
import { watchUsers } from './user.sagas';
import { watchCommunity } from './community.sagas';
import { watchClaims } from "./claims.sagas";

export default function* rootSagas(): Generator {
    yield all([
        watchUsers(),
        watchCommunity(),
        watchClaims()
    ]);
}
