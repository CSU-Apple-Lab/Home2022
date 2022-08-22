import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/CSU-Apple-Lab/csu-apple-lab.github.io.git', // Update to point to your repository
		user: {
			name: 'devRickLin', // update to use your name
			email: '8208200137@csu.edu.cn' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
