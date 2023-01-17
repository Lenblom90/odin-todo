import homePage from './homePage';

// expand todo

// Initialize page
const content = document.createElement('div');
content.id = 'content';
document.body.firstChild.before(content);
homePage();