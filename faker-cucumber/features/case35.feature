Feature: case35
	Scenario: Ingresar a perfil de usuario, definir un nuevo nombre, salvar y verificar que el nombre haya cambiado. Finalmente, dejar el nombre original
		Given User visits ghost for "case35"
		When User goes to his profile, defines a new UserName saves.
		Then returns to its original name and validate if the new profile was allowed to save