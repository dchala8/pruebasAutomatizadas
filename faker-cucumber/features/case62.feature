@case62
Feature: case62
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case62"
		When User updates footer code with incorrect information
		Then validate code was not updated