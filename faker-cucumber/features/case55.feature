@case55
Feature: case55
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case55"
		When User incorrectly updates header button background as empty
		Then validate header button background NOT updated