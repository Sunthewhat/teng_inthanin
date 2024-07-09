import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionPage: FC = () => {
	return (
		<Box
			w={'100%'}
			h={'100%'}
			display={'flex'}
			flexDir={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Box
				w={'85%'}
				h={'70%'}
				bg={'#EBEAD490'}
				display={'flex'}
				flexDir={'column'}
				alignItems={'center'}
				justifyContent={'center'}
				borderRadius={'20'}
				border={'2px'}
				borderColor={'#A06254'}
				mt={'10dvh'}
			></Box>
		</Box>
	);
};

export { QuestionPage };
