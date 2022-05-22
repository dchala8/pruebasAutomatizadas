Feature: case23
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, ingresar un color con mas de 6 caracteres e intentar salvar
		Given User visits ghost for "case23"
		When User creates a new tag with more than six characters then saves it
		Then validate if the tag was allowed