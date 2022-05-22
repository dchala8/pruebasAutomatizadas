Feature: case25
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, ingresar una descripción con mas de 500 caracteres e intentar salvar
		Given User visits ghost for "case25"
		When User creates a new tag with more than fivehundred characters as a description, then saves it
		Then validate if the tag was allowed