import { publish } from 'gh-pages';

publish(
 'build', 
 {
  branch: 'gh-pages',
  repo: 'https://github.com/jtrangel/DevPortfolio.git',
  user: {
   name: 'Jerico Rangel', 
   email: 'jerico.miggy.rangel@gmail.com' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);