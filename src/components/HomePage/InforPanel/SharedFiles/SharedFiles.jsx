import React from 'react';
import List from '../../../../core/components/List/List';

const files = [
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
	{
		title: 'Dota 2',
		description: '112 GB Zipped File',
		image: 'chat',
		file: '',
	},
];

const SharedFiles = () => {
	const renderPersonalInfor = () => {
		return (
			<List>
				{files.map((item, index) => (
					<List.Item key={index}>
						<div className='shared-file flex items-center p-3 border rounded-md w-full'>
							<div className='shared-file__icon w-12 flex-none bg-contain relative bg-no-repeat bg-center block'>
								<div className='absolute m-auto top-0 left-0 right-0 bottom-0 flex items-center justify-center'>
									ZIP
								</div>
							</div>
							<div className='w-full ml-3'>
								<div className='shared-file__file-name w-4/5 whitespace-no-wrap font-medium truncate'>
									{item.title}
								</div>
								<div className='shared-file__info whitespace-no-wrap text-xs'>
									{item.description}
								</div>
							</div>
						</div>
					</List.Item>
				))}
			</List>
		);
	};
	return (
		<div className='intro-y personal-info box p-4 mt-3 bg-white rounded-lg'>
			<div className='text-base font-medium mb-4'>Shared Files</div>
			{renderPersonalInfor()}
		</div>
	);
};

export default SharedFiles;
