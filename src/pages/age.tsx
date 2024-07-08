import { Box, Input, Text } from '@chakra-ui/react';
import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/childRoot';

const AgePage: FC = () => {
	const [age, setage] = useState('');
	const { setUser } = useContext(UserContext);
	const navigate = useNavigate();

	const handleNext = () => {
		if (!age) return;
		setUser({ age: parseInt(age) });
		navigate('/game/finding');
	};
	return (
		<Box
			w={'100%'}
			h={'100%'}
			display={'flex'}
			flexDir={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Text fontSize={[20]}>ใส่อายุหน่อย</Text>
			<Input
				w={'70%'}
				bg={'#FFFFFF60'}
				color={'black'}
				placeholder='Type your age'
				textAlign={'center'}
				focusBorderColor='transparent'
				borderColor={'transparent'}
				value={age}
				onChange={(e) => setage(e.target.value)}
			/>
			{age && (
				<Box
					onClick={handleNext}
					pos={'fixed'}
					bottom={'3dvh'}
					w={'100%'}
				>
					<Text
						textAlign={'center'}
						fontWeight={'400'}
						color={'#EBEAD4'}
						fontSize={[15]}
					>
						Next
					</Text>
				</Box>
			)}
		</Box>
	);
};

export { AgePage };
