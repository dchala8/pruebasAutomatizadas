@case42
Feature: case42
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case42"
		When User sets correct profile url
		Then validate url updated