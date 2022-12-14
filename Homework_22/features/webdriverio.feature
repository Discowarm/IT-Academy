
Feature: this test suite testing the site webdriver.io for different functionality
  Background:
    Given I navigate to "https://webdriver.io/" page
  
  Scenario: test should to click on button named "Get Started", next to click the "API", will do scroll the page and to click the button "next step",
  'and should checking url changed and containing the word "protocols"'
      When I click on the button named "Get started" 
      And I click the link "API"
      When I scrolling the page and to click the button "next step"
      Then I check url the page
  
  Scenario: test should to click on the button search,to inter the word "scroll" and to click first link
      When I click on the button named "search"
      Then I inter the word "scroll" and click first link

  Scenario: test should to click on the button-link microsoft, and to check, the browser is on a specific page.  
      When I scroll the page and click on the button-link named "microsoft" 
      When  I open window into browser another url 
      Then I check the browser is on the specific page 

Feature: this test suite testing the site webdriver.io if elem is clicable and make screenshot

  Background:
    Given I navigate to "https://webdriver.io/" page
  
  Scenario: this test should detect if an element is clickable'
      When I click the link "Blog" and to scroll the page
      When I get element,check is clicable and bring the result to the console
      Then I wait for element to be clickable

  Scenario: this test should return size for window and make screenshot
      When I get size for window
      When I make screenshot
      Then I click on the button "night mode" and switch to night mode