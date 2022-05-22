Feature: case32
	Scenario: Ingresar a miembros, definir nombre, definir correo válido, definir nota con 500 caractéres, salvar y verificar que se haya creado
		Given User visits ghost for "case32"
		When User creates a new member, by defining a valid name and email, set a note with exactly fivehundred characters and try to save it
		Then validate if the new member was allowed