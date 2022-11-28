import { all } from 'redux-saga/effects';
import { watchUsers } from './user.sagas';
import { watchCommunity } from './community.sagas';
import { watchProviders } from './providers.sagas';
import { watchClaims } from "./claims.sagas";
import { watchPlaces } from "./places.sagas";

export default function* rootSagas(): Generator {
    yield all([
        watchUsers(),
        watchCommunity(),
        watchProviders(),
        watchClaims(),
        watchPlaces()
    ]);
}
