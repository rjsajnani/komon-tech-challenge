import { createContext, useState } from 'react';
import { ResponseData } from './api/getUserInfo';

// The main reason to use context was the LatestPost wasn't getting passed as params as it was too long

const defaultValues: {
  data: ResponseData;
  updateData: (newData) => void;
} = {
  data: {
    avatar_url: '',
    bio: '',
    followers: '',
    id: 0,
    name: '',
    lastestPost: [],
  },
  updateData: (data) => data,
};

const AppContext = createContext(defaultValues);

const AppProvider = ({ children }) => {
  const [data, setData] = useState<ResponseData>({
    avatar_url: '',
    bio: '',
    followers: '',
    id: 0,
    name: '',
    lastestPost: [],
  });

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <AppContext.Provider value={{ data, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
