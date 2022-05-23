@case27
Feature: case27
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, ingresar una descripción con 500 caracteres e intentar salvar
		Given User visits ghost for "case27"
		When User creates a new tag with exactly five hundred characters as a description, then saves it
		Then validate if the tag was allowed