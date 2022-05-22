@case43
Feature: case43
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case43"
		When User updates with empty password
		Then validate password is not updated