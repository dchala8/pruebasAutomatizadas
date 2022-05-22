Feature: case29
	Scenario: Ingresar a miembros, definir nombre, no ingresar correo e intentar salvar
		Given User visits ghost for "case29"
		When User creates a new member, by defining a valid name and no email, and tried to save it
		Then validate if the new member was allowed