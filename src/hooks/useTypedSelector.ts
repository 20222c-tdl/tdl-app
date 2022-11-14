import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { CommunityInterface } from 'types/community.types';
import { UserInterface } from '../types/user.types';
import { ClaimsState } from "../redux/reducers/claims.reducer";

interface IRootState {
    user: UserInterface,
    community: CommunityInterface,
    claims: ClaimsState
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
