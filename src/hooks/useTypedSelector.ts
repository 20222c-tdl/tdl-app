import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { CommunityInterface } from 'types/community.types';
import { UserInterface } from '../types/user.types';

interface IRootState {
  user: UserInterface,
  community: CommunityInterface
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
