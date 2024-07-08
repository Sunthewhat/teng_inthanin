import { Box, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const FindingPage: FC = () => {
	const navigate = useNavigate();

	setTimeout(() => {
		navigate('/game/name');
	}, 3000);
	return (
		<Box
			h={'100vh'}
			textAlign={'center'}
			color={'#EBEAD4'}
			display={'flex'}
			flexDir={'column'}
			justifyContent={'center'}
			fontSize={'30'}
		>
			<Text>มาหา เทพที่แท้</Text>
			<Text>กาแฟที่โดนของคุณกันเลย</Text>
		</Box>
	);
};

export { FindingPage };
