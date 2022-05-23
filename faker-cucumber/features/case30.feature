@case30
Feature: case30
	Scenario: Ingresar a miembros, definir nombre, ingresar correo con formato inválido e intentar salvar
		Given User visits ghost for "case30"
		When User creates a new member, by defining a valid name and a invalid email, and tried to save it
		Then validate if the new member was allowed