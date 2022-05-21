@case58
Feature: case58
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case58"
		When User updates publication language as empty
		Then validate publication language was NOT updated