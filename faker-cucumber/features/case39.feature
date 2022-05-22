Feature: case39
	Scenario: Ingresar a perfil de usuario, definir una biografía de menos de 200 caractéres, salvar y verificar que los cambios persisten
		Given User visits ghost for "case39"
		When User goes to his profile, defines a new biography of less than twohundred characters and saves.
		Then Validate if the new profile was allowed to save