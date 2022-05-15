Feature: case2
	Scenario: create a post on ghost
		Given User visits ghost
		When User creates a new post and User deletes the new post
		Then Validate if the post was deleted