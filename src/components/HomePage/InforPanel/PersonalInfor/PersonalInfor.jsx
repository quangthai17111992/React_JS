import React from 'react';
import Card from '../../../../core/components/Card/Card';
import IconSvg from '../../../../core/components/Icon/Icon';
import List from '../../../../core/components/List/List';

const personalInfor = [
	{
		title: 'Conuntry',
		value: 'New York City, USA',
		icon: 'country',
	},
	{
		title: 'Phone',
		value: '+32 19 23 62 24 34',
		icon: 'phone',
	},
	{
		title: 'Email',
		value: 'robertdeniro@left4code.com',
		icon: 'email',
	},
];

const PersonalInfor = () => {
	const renderPersonalInfor = () => {
		return (
			<List>
				{personalInfor.map((item) => (
					<List.Item className='border-b' key={item.title}>
						<div>
							<div className='personal-info__list__title text-gray-400'>
								{item.title}
							</div>
							<div>{item.value}</div>
						</div>
						<IconSvg
							icon={item.icon}
							className='ml-auto w-4 h-4 text-gray-400'
						/>
					</List.Item>
				))}
			</List>
		);
	};
	return (
		<Card className='intro-y box mt-3'>
			<Card.Title>
				<div className='text-base font-medium mb-4'>Personal Information</div>
			</Card.Title>
			<Card.Body>{renderPersonalInfor()}</Card.Body>
		</Card>
	);
};
export default PersonalInfor;
