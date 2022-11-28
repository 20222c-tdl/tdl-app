import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { CommunityInterface } from 'types/community.types';
import { ProvidersInterface } from 'types/providers.types';
import { UserInterface } from '../types/user.types';
import { ClaimsState } from "../types/claims.types";
import { PlacesInterface } from '../types/places.types';

interface IRootState {
  user: UserInterface,
  community: CommunityInterface,
  providers: ProvidersInterface,
  claims: ClaimsState
  places: PlacesInterface,
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
