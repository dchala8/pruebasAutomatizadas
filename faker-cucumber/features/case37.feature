Feature: case37
	Scenario: Ingresar a perfil de usuario, definir un nuevo correo válido, salvar y verificar que el correo haya cambiado. Finalmente, dejar el correo original
		Given User visits ghost for "case37"
		When User goes to his profile, defines a new invalid Email saves.
		Then Validate if the new profile was allowed to save