@case48
Feature: case48
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case48"
		When User updates site description empty
		Then validate updated description