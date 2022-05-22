@case56
Feature: case56
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case56"
		When User updates publication language correctly
		Then validate publication language updated