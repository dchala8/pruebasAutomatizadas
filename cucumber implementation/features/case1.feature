Feature: case1
	Scenario: create a post on ghost
		Given User visits ghost 
		When User creates a new post
		Then validate if post was created