@case14
Feature: case14
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User is visiting ghost for "case14"
		When User creates a tag, a post with tag,and filter posts with tag
		Then validate post with tag on list