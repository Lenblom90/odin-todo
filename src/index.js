import { createNav } from './elements';
import homePage from './homePage';

// Initialize page
createNav(['Home'],[homePage])
const content = document.createElement('div');
content.id = 'content';
document.body.children[1].before(content);
homePage();