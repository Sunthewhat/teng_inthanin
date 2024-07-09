import { Box, Input, Text } from '@chakra-ui/react';
import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/childRoot';

const NamePage: FC = () => {
	const [name, setName] = useState('');
	const { setUser } = useContext(UserContext);

	const navigate = useNavigate();

	const handleNext = () => {
		if (!name) return;
		setUser({ name });
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

export { NamePage };
