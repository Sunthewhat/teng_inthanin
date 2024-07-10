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
		'โอม พระลักษมี อิตถีเทวะ เมตตัญจะ มหาลาโภ ทุติยัมปิ พระลักษมี อิตถีเทวะ เมตตัญจะ มหาลาโภ ตะติยัมปิ พระลักษมี อิตถีเทวะ เมตตัญจะ มหาลาโภ',
	GANESHA:
		'โอม พระพิฆเณศวร สิทธิประสิทธิเม มหาลาโภ ทุติยัมปิ พระพิฆเณศวร สิทธิประสิทธิเม มหาลาโภ ตะติยัมปิ พระพิฆเณศวร สิทธิประสิทธิเม มหาลาโภ ',
	GARUDA: 'โอม คะรุทา โอม คะรุทา โอม คะรุทา ครุฑโธ ครุฑธา ปฏิเสวามิ (สวด 3 จบ)',
	NAKA: 'ตั้งนะโม 3 จบ กายะวาจาจิตตัง อะหังวันทา นาคาธิบดี ศรีสุทโธ วิสุทธิเทวา ปูเชมิ ( 3 ครั้ง )',
	TRIMURTI:
		'โอม ตัสสัต โอม ตัสสัต โอม ตัสสัต โอม สิทธิคเณศะ โอม พรหมา วิษณุ มเหศวาระ นะมะประสิทธิ ชัยยะ ลาภะ ฤทธิ สุวัตติ สวาหะ',
	VESSAVANA:
		'อิติ ปิ โส ภะคะวา ยมมะราชาโน ท้าวเวสสุวัณโณ มรณังสุขัง อะระหังสุคะโต นะโมพุทธายะฯ ท้าวเวสสุวรรณโณ จตุมหาราชิกา ยักขะพันตา ภัทภูริโต เวสสะ พุสะ พุทธัง อรหัง พุทโธ ท้าวเวสสุวรรณโณ นะโม พุทธายะฯ',
};

const drinksDescription = {
	โกโก้: 'โกโก้เป็นเครื่องดื่มที่จะทำให้อร่อยนั้นจะต้องใช้ความใส่ใจ คุณจึงเป็นคนที่มีความรอบคอบ และคุณยังเป็นคนที่มีความคิดสร้างสรรค์และชอบค้นหาสิ่งใหม่ๆอยู่เสมอ',
	อเมริกาโน่:
		'อเมริกาโน่เป็นเครื่องดื่มที่มีรสชาติตรงไปตรงมา คุณมักจะเป็นคนที่เรียบง่าย เปิดกว้างและยอมรับสิ่งอื่นๆอยู่เสมอ นอกจากนั้นยังเป็นคนรักสงบ',
	เอสเพรสโซ่:
		'เอสเพรสโซ่ที่มีรสชาติเข้ม เหมาะกับคุณที่เป็นคนมีความมุ่งมั่น แต่ก็ยังมีความยืดหยุ่น เหมือนเอสเพรสโซ่ที่ยังมีรสหวานและเปรี้ยมซ่อนอยู่',
	ชาเขียว:
		'ชาเขียวมีความละมุนกลมกล่อม คุณเป็นคนที่ใส่ใจรายละเอียด และอ่อนโยนต่อผู้คนรอบข้างคุณเสมอ',
	ชาไทย: 'รสชาติหวานของชาไทยช่วยเติมสีสันในวันนั้นให้คุณเป็นอย่างดี คุณเป็นคนสดใส และมีพลังงานดีๆให้คนอื่นๆที่ได้พบเจอคุณ',
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
