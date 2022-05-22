@case12
Feature: case12
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case12"
		When User creates a tag, a post with tag, publishes it and deletes the tag
		Then validate post with no tag