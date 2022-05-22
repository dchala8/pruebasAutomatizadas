@case45
Feature: case45
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case45"
		When User updates with different confirmation password
		Then validate password is not updated