import { createContext, useContext, type ReactNode } from 'react';

type ModalsContextValue = {
  openClient: () => void;
  openPartner: () => void;
};

const ModalsContext = createContext<ModalsContextValue | null>(null);

export function ModalsProvider({
  value,
  children,
}: {
  value: ModalsContextValue;
  children: ReactNode;
}) {
  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
}

export function useModals(): ModalsContextValue {
  const ctx = useContext(ModalsContext);
  if (!ctx) throw new Error('useModals must be used within ModalsProvider');
  return ctx;
}
