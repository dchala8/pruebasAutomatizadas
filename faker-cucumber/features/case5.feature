Feature: case5
	Scenario: create a post, publish it, unpublish it, validate if it was drafted
		Given User visits ghost for "case5"
		When User publishes a new post and then unpublishes it
		Then validate if the post was drafted