Feature: case26
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, ingresar una descripción con menos de 500 caracteres e intentar salvar
		Given User visits ghost for "case26"
		When User creates a new tag with less than fivehundred characters as a description, then saves it
		Then validate if the tag was allowed