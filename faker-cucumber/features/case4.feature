Feature: case4
	Scenario: create a post, schedule it, wait 5 minutes, validate if it published it self
		Given User visits ghost for "case4"
		When User creates a new post and shcedules it
		Then wait five minutes and validate if it was published