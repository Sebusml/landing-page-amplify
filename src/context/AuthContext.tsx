import {
  Dispatch,
  createContext,
  ReactElement,
  SetStateAction,
  useEffect,
  useContext,
  useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

interface LoggedUserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser | null>>;
}

const UserContext = createContext<LoggedUserContextType>(
  {} as LoggedUserContextType
);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  // At the start check the user
  useEffect(() => {
    checkUser();
  }, []);

  // Check user on authentification events
  useEffect(() => Hub.listen("auth", checkUser), []); // TODO: does it work? I removed tons of {} and arrow funcs

  async function checkUser() {
    Auth.currentAuthenticatedUser()
      .then((user) => setUser(user))
      .catch((error) => {
        setUser(null);
        console.log(error);
      });
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): LoggedUserContextType => useContext(UserContext);
