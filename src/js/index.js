import { Library } from './modules/Library.js';
import '../css/style.css';

class App {
    static init() {
        const libraryApp = new Library();
        libraryApp.render();
        libraryApp.clearUserInputs();
    }
}
  
App.init();