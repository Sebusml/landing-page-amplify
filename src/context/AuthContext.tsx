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
import { HubCapsule } from "@aws-amplify/core";

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

  // TODO: this callback is not being executed on successful signups.
  // Check docs https://docs.amplify.aws/guides/authentication/listening-for-auth-events/q/platform/js/
  useEffect(() => Hub.listen("auth", authCallback), []);

  async function authCallback(data: HubCapsule) {
    switch (data.payload.event) {
      case "signIn":
        console.log("user signed in");
        break;
      case "signUp":
        console.log("user signed up");
        break;
      case "signOut":
        console.log("user signed out");
        break;
      case "signIn_failure":
        console.log("user sign in failed");
        break;
      case "configured":
        console.log("the Auth module is configured");
        break;
      default:
        console.log("Not recognized auth event: ", data.payload.event);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): LoggedUserContextType => useContext(UserContext);
