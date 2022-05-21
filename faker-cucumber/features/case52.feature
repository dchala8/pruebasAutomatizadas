@case52
Feature: case52
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case52"
		When User updates accent color as empty
		Then validate accent color is not updated