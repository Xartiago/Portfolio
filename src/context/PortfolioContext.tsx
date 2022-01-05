import { createContext } from "react";
import { PortfolioGlobalState } from "../interfaces/interfaces";

export type PorfolioContextProps = {
    PortfolioState: PortfolioGlobalState;
    DMOn: () => void;
    DMOff: () => void;
}

export const PortfolioContext = createContext<PorfolioContextProps>({} as PorfolioContextProps)