@case18
Feature: case18
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case18"
		When User updates password to old one
		Then validate can login with old password