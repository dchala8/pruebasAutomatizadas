@case7
Feature: case7
	Scenario: create a page on ghost
		Given User visits ghost for "case7"
		When User creates a new page and User deletes the new page
		Then Validate if the page was deleted