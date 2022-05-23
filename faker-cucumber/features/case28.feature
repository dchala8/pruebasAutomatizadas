@case28
Feature: case28
	Scenario: Ingresar a miembros, definir nombre, definir correo válido, salvar y verificar que se haya creado
		Given User visits ghost for "case28"
		When User creates a new member, by defining a valid name and email, and tried to save it
		Then validate if the new member was allowed