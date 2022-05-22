@case46
Feature: case46
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case46"
		When User updates with out original password
		Then validate password is not updated