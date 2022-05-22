@case20
Feature: case20
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case20"
		When User updates site name
		Then validate modified site name