import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { CommunityInterface } from 'types/community.types';
import { ProvidersInterface } from 'types/providers.types';
import { UserInterface } from '../types/user.types';
import { ClaimsState } from "../redux/reducers/claims.reducer";

interface IRootState {
  user: UserInterface,
  community: CommunityInterface,
  providers: ProvidersInterface,
  claims: ClaimsState
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
