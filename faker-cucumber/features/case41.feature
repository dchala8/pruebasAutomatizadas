@case41
Feature: case41
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case41"
		When User sets incorrect profile url
		Then validate url was not updated