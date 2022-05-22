@case44
Feature: case44
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case44"
		When User updates with empty confirmation password
		Then validate password is not updated