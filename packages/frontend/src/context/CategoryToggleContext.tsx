import React, { useState } from 'react';

type ContextType = {
  categoryAppear: false | true;
  toggleCategory: () => void;
};

export const CategoryToggleContext = React.createContext<ContextType>({
  categoryAppear: false,
  toggleCategory: () => void 0,
});

export const CategoryToggleProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [categoryAppear, setCategoryAppear] = useState<false | true>(false);

  const toggleCategory = (): void => {
    setCategoryAppear((prev) => !prev);
  };

  console.log(categoryAppear);

  return (
    <CategoryToggleContext.Provider value={{ categoryAppear, toggleCategory }}>
      {children}
    </CategoryToggleContext.Provider>
  );
};
