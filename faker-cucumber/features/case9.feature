@case9
Feature: case9
	Scenario: create a page, schedule it, wait 5 minutes, validate if it published it self
		Given User visits ghost for "case9"
		When User creates a new page and shcedules it
		Then wait five minutes and validate if the page was published