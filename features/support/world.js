import { default as Browser } from 'zombie';

export default function World() {
    this.browser = new Browser({site: 'http://localhost:3333', silent: true});
    
    this.visit = function(url) {
        return this.browser.visit(url);
    }
}