import { Box, Image } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import background from '../assets/background.png';
import Logo from '../assets/inthanin.png';
import {
	Dispatch,
	SetStateAction,
	createContext,
	useState,
} from 'react';

type IUser = {
	name?: string;
	age?: number;
};

type IUserContext = {
	user: IUser;
	setUser: Dispatch<SetStateAction<IUser>> | (() => void);
};

const UserContext = createContext<IUserContext>({
	user: {},
	setUser: () => {},
});

const ChildRootLayout = () => {
	const [user, setUser] = useState<IUser>({});
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<Box
				w={'100vw'}
				h={'100vh'}
				fontFamily={'Noto Sans Thai Variable'}
			>
				<Image
					src={background}
					pos={'absolute'}
					zIndex={-1}
					w={'100%'}
					h={'100%'}
				/>
				<Box
					pos={'absolute'}
					w={'100%'}
					top={'4dvh'}
					zIndex={-1}
					display={'flex'}
					justifyContent={'center'}
				>
					<Image src={Logo} w={'50%'} />
				</Box>
				<Outlet />
			</Box>
		</UserContext.Provider>
	);
};

export { ChildRootLayout, UserContext };
