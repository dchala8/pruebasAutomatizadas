@case19
Feature: case19
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case19"
		When User creates post and modifies it
		Then validate modified post