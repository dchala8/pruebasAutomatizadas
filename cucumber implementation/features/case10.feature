Feature: case10
	Scenario: create a page, publish it, unpublish it, validate if it was drafted
		Given User visits ghost for "case10"
		When User publishes a new page and then unpublishes it
		Then validate if the page was drafted