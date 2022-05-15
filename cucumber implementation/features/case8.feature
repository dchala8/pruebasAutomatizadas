Feature: case8
	Scenario: create a page, not publish it, validate it isnt published, finally publish it
		Given User visits ghost for "case8"
		When User creates a new page as a draft
		Then publish the draft page and validate it was published