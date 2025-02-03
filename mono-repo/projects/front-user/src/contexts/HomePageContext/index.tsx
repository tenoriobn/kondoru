// context/HomePageContext.tsx
import React, { createContext, useContext } from 'react';
import { IHomeData } from 'src/interfaces/homePage/IHomePageData';

const HomePageContext = createContext<IHomeData | undefined>(undefined);

export const HomePageProvider: React.FC<{ 
  homeData: IHomeData; 
  children: React.ReactNode;
}> = ({ homeData, children }) => {
  return (
    <HomePageContext.Provider value={ homeData }>
      {children}
    </HomePageContext.Provider>
  );
};

export const useHomePageData = (): IHomeData => {
  const context = useContext(HomePageContext);

  if (!context) {
    throw new Error('useHomePageData deve ser utilizado dentro de um HomePageProvider');
  }

  return context;
};
