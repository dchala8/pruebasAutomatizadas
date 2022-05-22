@case16
Feature: case16
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case16"
		When User modifies principal member
		Then validate principal member was updated