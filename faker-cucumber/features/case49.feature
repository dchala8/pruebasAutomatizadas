@case49
Feature: case49
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case49"
		When User updates site description over 200 char
		Then validate description not updated