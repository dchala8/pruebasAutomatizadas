Feature: case10
	Scenario: create a tag, create a post with tag, publish it and validate post with tag
		Given User visits ghost for "case10"
		When User creates a tag, a post with tag and publishes it
		Then validate post with tag