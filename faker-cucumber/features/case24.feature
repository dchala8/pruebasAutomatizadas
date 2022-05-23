@case24
Feature: case24
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, ingresar un color con exactamente 6 caracteres e intentar salvar
		Given User visits ghost for "case24"
		When User creates a new tag with exactly six characters then saves it
		Then validate if the tag was allowed