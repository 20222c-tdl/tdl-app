import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { UserInterface } from '../types/user.types';

interface IRootState {
  user: UserInterface
}

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
