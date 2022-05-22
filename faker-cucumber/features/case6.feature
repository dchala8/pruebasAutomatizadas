Feature: case6
	Scenario: create a page on ghost
		Given User visits ghost for "case6"
		When User creates a new page
		Then validate if page was created