Feature: case22
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, ingresar un color con menos de 6 caracteres e intentar salvar
		Given User visits ghost for "case22"
		When User creates a new tag with less than six characters then saves it
		Then validate if the tag was allowed