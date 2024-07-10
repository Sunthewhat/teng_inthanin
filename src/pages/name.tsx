import { Box, Input, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const NamePage: FC = () => {
	const [name, setName] = useState('');
	const [, setCookie] = useCookies(['name']);

	const navigate = useNavigate();

	const handleNext = () => {
		if (!name) return;
		setCookie('name', name);
		navigate('/game/age');
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
			<Text fontSize={[20]}>ใส่ชื่อเลย</Text>
			<Input
				w={'70%'}
				bg={'#FFFFFF90'}
				color={'black'}
				placeholder='Type your name'
				textAlign={'center'}
				focusBorderColor='transparent'
				borderColor={'transparent'}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{name && (
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
					alignItems={'center'}
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

export { NamePage };
