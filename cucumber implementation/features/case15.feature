@case15
Feature: case15
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case15"
		When User creates a member and modifies the member
		Then validate member was updated