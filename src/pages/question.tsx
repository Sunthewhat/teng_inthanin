import { Box, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { questions } from '../data/question';
import { useNavigate } from 'react-router-dom';

const QuestionPage: FC = () => {
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [selectedQ, setSelectedQ] = useState<number>(-1);
	const navigate = useNavigate();

	const handleSelectQuestion = (index: number) => {
		setSelectedQ(index);
	};

	const handleNextQuestion = () => {
		if (questionIndex === questions.length - 1) {
			navigate('/game/result');
			return;
		}
		setQuestionIndex((prev) => prev + 1);
		setSelectedQ(-1);
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
			<Box
				pos={'absolute'}
				bottom={'3dvh'}
				w={'25%'}
				h={'5dvh'}
				bgColor={'#EBEAD4'}
				borderRadius={'50'}
				border={'2px'}
				borderColor={'#A06254'}
				textAlign={'center'}
				onClick={handleNextQuestion}
			>
				<Text
					color={'white'}
					fontWeight={'600'}
					textColor={'#A06254'}
					mt={'1dvh'}
				>
					Next
				</Text>
			</Box>
			<Box
				w={'85%'}
				h={'70%'}
				bg={'#EBEAD4D0'}
				display={'flex'}
				flexDir={'column'}
				alignItems={'center'}
				justifyContent={'space-around'}
				borderRadius={'20'}
				border={'2px'}
				borderColor={'#A06254'}
				mt={'10dvh'}
			>
				<Box
					h={'25%'}
					textAlign={'center'}
					display={'flex'}
					alignItems={'center'}
				>
					<Text>{questions[questionIndex].question}</Text>
				</Box>
				<Box
					w={'100%'}
					h={'50%'}
					display={'flex'}
					flexDir={'column'}
					alignItems={'center'}
					justifyContent={'space-between'}
				>
					{questions[questionIndex].choices.map((q, index) => {
						return (
							<Box
								key={index}
								textAlign={'center'}
								w={'80%'}
								h={'20%'}
								borderColor={'#A06254'}
								borderWidth={'2px'}
								borderRadius={'10'}
								display={'flex'}
								alignItems={'center'}
								justifyContent={'center'}
								color={
									selectedQ === index ? '#A06254' : '#FFFFFF'
								}
								bg={
									selectedQ === index
										? '#FFFFFF99'
										: '#A0625466'
								}
								onClick={() => handleSelectQuestion(index)}
							>
								<Text> {q} </Text>
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
};

export { QuestionPage };
