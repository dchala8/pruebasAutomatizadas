@case53
Feature: case53
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case53"
		When User updates header button background
		Then validate header button background updated