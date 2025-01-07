// context/HomePageContext.tsx
import React, { createContext, useContext } from 'react';
import { IHomePageData } from 'src/interfaces/IHomePageData';

const HomePageContext = createContext<IHomePageData | undefined>(undefined);

export const HomePageProvider: React.FC<{ homeData: IHomePageData; children: React.ReactNode }> = ({ homeData, children }) => {
  return (
    <HomePageContext.Provider value={ homeData }>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageData = (): IHomePageData => {
  const context = useContext(HomePageContext);

  if (!context) {
    throw new Error('useHomePageData deve ser utilizado dentro de um HomePageProvider');
  }

  return context;
};
