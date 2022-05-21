@case17
Feature: case17
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case17"
		When User updates password
		Then validate can not login