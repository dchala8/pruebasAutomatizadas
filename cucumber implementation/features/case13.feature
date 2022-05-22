@case13
Feature: case13
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case13"
		When User creates a tag, a post with tag, publishes it and modifies the tag
		Then validate post with modified tag