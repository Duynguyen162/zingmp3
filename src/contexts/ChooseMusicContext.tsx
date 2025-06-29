import { createContext, useState } from 'react';
import { ReactNode } from 'react';
import { useContext } from 'react';

interface ChooseMusicContextType {
    chooseId: number;
    setChooseId: React.Dispatch<React.SetStateAction<number>>;
}
//khởi tạo giá trị mặc định cho context
const defaultContext: ChooseMusicContextType = {
    chooseId: 0,
    setChooseId: () => {},
};
//tạo context
const ChooseMusicContext = createContext<ChooseMusicContextType>(defaultContext);

//tạo custom hook để dùng context cho ngắn gọn
export const useChooseMusic = () => useContext(ChooseMusicContext);

export const ChooseMusicProvider = ({ children }: { children: ReactNode }) => {
    const [chooseId, setChooseId] = useState(0);
    return <ChooseMusicContext.Provider value={{ chooseId, setChooseId }}>{children}</ChooseMusicContext.Provider>;
};
