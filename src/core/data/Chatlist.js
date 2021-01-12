export const chatList = Array.from({ length: 20 }, (_, i) => ({
	id: i + 1,
	image: 'https://topson.left4code.com/dist/images/profile-7.jpg',
	name: `User ${i + 1}`,
	message:
		'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20',
	date: new Date().toLocaleDateString(),
	active: i === 0 ? true : false
}))
