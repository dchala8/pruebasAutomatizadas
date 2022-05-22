@case61
Feature: case61
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case61"
		When User updates header code with incorrect information
		Then validate code was not updated