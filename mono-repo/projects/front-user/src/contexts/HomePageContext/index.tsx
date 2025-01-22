// context/HomePageContext.tsx
import React, { createContext, useContext } from 'react';
import { IHomePageStaticData } from 'src/interfaces/header/IHomePageStaticData';

const HomePageContext = createContext<IHomePageStaticData | undefined>(undefined);

export const HomePageProvider: React.FC<{ 
  homeData: IHomePageStaticData; 
  children: React.ReactNode;
}> = ({ homeData, children }) => {
  return (
    <HomePageContext.Provider value={ homeData }>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageData = (): IHomePageStaticData => {
  const context = useContext(HomePageContext);

  if (!context) {
    throw new Error('useHomePageData deve ser utilizado dentro de um HomePageProvider');
  }

  return context;
};
