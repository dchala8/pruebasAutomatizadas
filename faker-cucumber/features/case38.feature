@case38
Feature: case38
	Scenario: Ingresar a perfil de usuario, definir una biografía de twohundred caractéres, salvar y verificar que los cambios persisten
		Given User visits ghost for "case38"
		When User goes to his profile, defines a new biography of twohundred characters and saves.
		Then Validate if the new profile was allowed to save