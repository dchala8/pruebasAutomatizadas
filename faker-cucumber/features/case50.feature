@case50
Feature: case50
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case50"
		When User updates accent color
		Then validate accent color updated