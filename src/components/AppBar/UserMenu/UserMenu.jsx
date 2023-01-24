import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserEmail } from 'redux/selectors';
import { UserBox, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const email = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  return (
    <UserBox>
      <p>{email}</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Btn>
    </UserBox>
  );
};
