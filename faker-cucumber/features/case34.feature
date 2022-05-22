Feature: case34
	Scenario: Ingresar a perfil de usuario, eliminar el nombre completo e intentar salvar
		Given User visits ghost for "case34"
		When User goes to his profile, deletes its name and tries to save
		Then validate if the new profile was allowed to save