@case21
Feature: case21
	Scenario: Ingresar a tags, crear un nuevo tag, definir nombre, salvar y verificar que se haya creado
		Given User visits ghost for "case21"
		When User creates a new tag and then saves it
		Then validate if the tag was created