import React, {createContext, useState, useContext, ReactNode} from 'react';

interface AsideHookProps {
  isActive: boolean
  setActive: () => void;
}

interface AsideChildren {
  children: ReactNode;
}

const AsideHook = createContext<AsideHookProps>({} as AsideHookProps)

export function AsideProvider({ children }: AsideChildren) {
  const [active, setActive] = useState<boolean>(false);

  function setActiveAside() {    
    setActive(!active);
  }

  return (
    <AsideHook.Provider value={{ isActive: active, setActive: setActiveAside }}>
      {children}
    </AsideHook.Provider>
  )
}

export function useAside() {
  const context = useContext(AsideHook);

  return context;
}