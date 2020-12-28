export const listUser = Array.from({ length: 10 }, (_, i) => ({
	id: i + 1,
	avatar: 'https://topson.left4code.com/dist/images/profile-7.jpg',
	name: `User ${i + 1}`,
	active: false
}))
