@case3
Feature: case3
	Scenario: create a post, not publish it, validate it isnt published, finally publish it
		Given User visits ghost for "case3"
		When User creates a new post as a draft
		Then publish the draft and validate it was published