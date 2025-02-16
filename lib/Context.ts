
import { createContext } from "react";


interface AuthState {
    username: string;
    id: number;
    isAdmin: number;
    status: boolean;
}

interface AuthContextType {
    authState: AuthState;
    setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}


export const AuthContext = createContext<AuthContextType>({
    authState: {
        username: "",
        id: 0,
        isAdmin: 0,
        status: false,
    },
    setAuthState: () => {},
});

export const ProductContext = createContext([]);

export const SidebarContext = createContext(false);
