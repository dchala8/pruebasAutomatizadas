@case36
Feature: case36
	Scenario: Ingresar a perfil de usuario, definir un nuevo correo válido, salvar y verificar que el correo haya cambiado. Finalmente, dejar el correo original
		Given User visits ghost for "case36"
		When User goes to his profile, defines a new Email saves.
		Then returns to its original email and validate if the new profile was allowed to save