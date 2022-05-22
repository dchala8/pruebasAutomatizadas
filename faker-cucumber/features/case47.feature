@case47
Feature: case47
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case47"
		When User updates site description short
		Then validate updated description