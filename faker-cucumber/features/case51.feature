@case51
Feature: case51
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case51"
		When User updates accent color incorrectly
		Then validate accent color is not updated