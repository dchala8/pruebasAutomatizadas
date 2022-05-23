@case31
Feature: case31
	Scenario: Ingresar a miembros, definir nombre, definir correo válido, definir nota con menos de 500 caractéres, salvar y verificar que se haya creado
		Given User visits ghost for "case31"
		When User creates a new member, by defining a valid name and email, set a note with less than fivehundred characters and try to save it
		Then validate if the new member was allowed