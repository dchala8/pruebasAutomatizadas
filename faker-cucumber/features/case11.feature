@case11
@case11
Feature: case11
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case11"
		When User creates a tag, a post with tag and publishes it
		Then validate post with tag