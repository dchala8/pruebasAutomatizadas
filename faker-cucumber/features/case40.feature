Feature: case40
	Scenario: Ingresar a perfil de usuario, definir una biografía de más de 200 caractéres e intentar salvar
		Given User visits ghost for "case40"
		When User goes to his profile, defines a new biography of more than twohundred characters and saves.
		Then Validate if the new profile was allowed to save