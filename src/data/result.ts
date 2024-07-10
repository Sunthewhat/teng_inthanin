import GANESHA from '../assets/gods/GANESHA.png';
import GARUDA from '../assets/gods/GARUDA.png';
import LAKSAMI from '../assets/gods/LAKSAMI.png';
import NAKA from '../assets/gods/NAKA.png';
import TRIMURTI from '../assets/gods/TRIMURTI.png';
import VESSAVANA from '../assets/gods/VESSAVANA.png';

import Americano from '../assets/drinks/Americano.png';
import Cocoa from '../assets/drinks/Cocoa.png';
import Espresso from '../assets/drinks/Espresso.png';
import GreenTea from '../assets/drinks/GreenTea.png';
import ThaiTea from '../assets/drinks/ThaiTea.png';

const godsDescription = {
	LAKSAMI:
		'LAKSAMI Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	GANESHA:
		'GANESHA Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	GARUDA: 'GARUDA Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	NAKA: 'NAKA Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	TRIMURTI:
		'TRIMURTI Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	VESSAVANA:
		'VESSAVANA Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv',
};

const drinksDescription = {
	โกโก้: 'โกโก Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	อเมริกาโน่:
		'อเมริกาโน Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	เอสเพรสโซ่:
		'เอสเพรสโซ Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	ชาเขียว:
		'ชาเขียว Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
	ชาไทย: 'ชาไทย Ipsum asouhfa avn,cxpir ufiaghjvn dghoieufjdvnv ajfdgiareughfvdn nvbearugfjvndfjv ',
};

const drinks: string[] = [
	'โกโก้',
	'อเมริกาโน่',
	'เอสเพรสโซ่',
	'ชาเขียว',
	'ชาไทย',
];

const gods: string[] = [
	'GANESHA',
	'GARUDA',
	'LAKSAMI',
	'NAKA',
	'TRIMURTI',
	'VESSAVANA',
];

type IResult = {
	drink: string;
	god: string;
	drinkImage: string;
	godImage: string;
};

const getResult = (): IResult => {
	const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
	const randomGod = gods[Math.floor(Math.random() * gods.length)];
	return {
		drink: randomDrink,
		god: randomGod,
		drinkImage: getDrinkImage(randomDrink),
		godImage: getGodImage(randomGod),
	};
};

const getGodDescription = (god: string): string => {
	return godsDescription[god as keyof typeof godsDescription];
};

const getDrinkDescription = (drink: string): string => {
	return drinksDescription[drink as keyof typeof drinksDescription];
};

const getGodImage = (god: string): string => {
	switch (god) {
		case 'GANESHA':
			return GANESHA;
		case 'GARUDA':
			return GARUDA;
		case 'LAKSAMI':
			return LAKSAMI;
		case 'NAKA':
			return NAKA;
		case 'TRIMURTI':
			return TRIMURTI;
		case 'VESSAVANA':
			return VESSAVANA;
		default:
			return '';
	}
};

const getDrinkImage = (drink: string): string => {
	switch (drink) {
		case 'โกโก้':
			return Cocoa;
		case 'อเมริกาโน่':
			return Americano;
		case 'เอสเพรสโซ่':
			return Espresso;
		case 'ชาเขียว':
			return GreenTea;
		case 'ชาไทย':
			return ThaiTea;
		default:
			return '';
	}
};

export { getResult, getGodDescription, getDrinkDescription };
