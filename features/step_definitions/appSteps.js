import { expect } from 'chai';
import World from '../support/world';

module.exports = function() {
    this.World = World;
    
    this.Given(/^I open the site$/, function() {
        return this.visit('/');
    });
    
    this.Then(/^I should see (.*) as the page title$/, function(title){
        this.browser.assert.text('title', title);
    });
}