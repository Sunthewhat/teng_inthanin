import { Box, Button, Image, Text } from '@chakra-ui/react';
import { FC, useContext, useEffect } from 'react';
import {
	getResult,
	getGodDescription,
	getDrinkDescription,
} from '../data/result';
import { UserContext } from '../components/childRoot';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

const ResultPage: FC = () => {
	const Result = getResult();
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	const Data = {
		name: user.name,
		god: Result.god,
		drink: Result.drink,
		godPath: Result.godImage,
		drinkPath: Result.drinkImage,
		godDesc: getGodDescription(Result.god),
		drinkDesc: getDrinkDescription(Result.drink),
	};

	useEffect(() => {
		if (!user.name || user.name === '') {
			navigate('/');
		}
	}, [navigate, user.name]);

	return (
		<Box
			w={'100%'}
			h={'100%'}
			display={'flex'}
			flexDir={'column'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<Text> {Data.name ?? 'Placeholder'} </Text>
			<Text> คุณคือ {Data.drink} อินทนิล </Text>
			<Box
				mt={'2dvh'}
				p={'2'}
				w={'92dvw'}
				h={'92dvw'}
				bg={'#EBEAD4B5'}
				borderColor={'#A06254'}
				borderWidth={'2px'}
				borderRadius={'20'}
				display={'flex'}
				flexDir={'column'}
				alignItems={'center'}
				justifyContent={'space-around'}
			>
				<Box
					textAlign={'center'}
					display={'flex'}
					alignItems={'center'}
					justifyItems={'space-around'}
				>
					<Box
						w={'40dvw'}
						h={'40dvw'}
						display={'flex'}
						flexDir={'column'}
						justifyContent={'center'}
						mr={'2'}
					>
						<Text fontWeight={'bold'}> {Data.god} </Text>
						<Text fontSize={'12'}> {Data.godDesc} </Text>
					</Box>
					<Box w={'40dvw'} h={'40dvw'} bg={'white'} borderRadius={10}>
						<Image src={Data.godPath} />
					</Box>
				</Box>
				<Box w={'90%'} borderColor={'#A06254'} borderWidth={'1px'} />
				<Box
					textAlign={'center'}
					display={'flex'}
					alignItems={'center'}
					justifyItems={'space-around'}
				>
					<Box w={'40dvw'} h={'40dvw'} bg={'white'} borderRadius={10}>
						<Image src={Data.drinkPath} borderRadius={10} />
					</Box>
					<Box
						w={'40dvw'}
						h={'40dvw'}
						display={'flex'}
						flexDir={'column'}
						justifyContent={'center'}
						ml={'2'}
					>
						<Text fontWeight={'bold'}> {Data.drink} </Text>
						<Text fontSize={'12'}> {Data.drinkDesc} </Text>
					</Box>
				</Box>
			</Box>
			<Box
				pos={'absolute'}
				bottom={'3dvh'}
				w={'100%'}
				h={'5dvh'}
				display={'flex'}
				flexDir={'row'}
				justifyContent={'center'}
				gap={30}
				textAlign={'center'}
				mb={'10dvh'}
			>
				<Button
					alignSelf={'center'}
					borderRadius={'full'}
					border={'2px'}
					borderColor={'#A06254'}
					bgColor={'#EBEAD4 !important'}
					color={'#7A4E6A'}
					fontSize={'0.8rem'}
					leftIcon={<FaInstagram size={'2.5dvh'} />}
					onClick={() =>
						window.open(
							'https://www.instagram.com/inthanin.official?igsh=MTUyY25zczByM2FsdA=='
						)
					}
				>
					inthanin
				</Button>
				<Button
					alignSelf={'center'}
					borderRadius={'full'}
					border={'2px'}
					borderColor={'#A06254'}
					bgColor={'#EBEAD4 !important'}
					color={'#7A4E6A'}
					fontSize={'0.8rem'}
					leftIcon={<FaFacebookF size={'2.5dvh'} />}
					onClick={() =>
						window.open(
							'https://www.facebook.com/share/xCTv9Yk5qfWHwLeo/?mibextid=LQQJ4d'
						)
					}
				>
					inthanin
				</Button>
				<Button
					mt={'30%'}
					position={'absolute'}
					alignSelf={'center'}
					borderRadius={'full'}
					border={'2px'}
					borderColor={'#A06254'}
					bgColor={'#EBEAD4 !important'}
					color={'#7A4E6A'}
					fontSize={'0.8rem'}
					leftIcon={<FaTiktok size={'2.5dvh'} />}
					onClick={() =>
						window.open('https://www.tiktok.com/@inthaninofficial')
					}
				>
					inthanin
				</Button>
			</Box>
		</Box>
	);
};

export { ResultPage };
