import { Box, Input, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const AgePage: FC = () => {
	const [age, setage] = useState('');
	const navigate = useNavigate();
	const [, setCookies] = useCookies(['age']);

	const handleNext = () => {
		if (!age) return;
		setCookies('age', age);
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
				bg={'#FFFFFF90'}
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
					w={'25%'}
					h={'5dvh'}
					bgColor={'#EBEAD4'}
					borderRadius={'50'}
					border={'2px'}
					borderColor={'#A06254'}
				>
					<Text
						mt={'1dvh'}
						textAlign={'center'}
						fontWeight={'400'}
						color={'#A06254'}
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
