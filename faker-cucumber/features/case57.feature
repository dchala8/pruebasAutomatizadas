@case57
Feature: case57
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case57"
		When User updates publication language INcorrectly
		Then validate publication language was NOT updated