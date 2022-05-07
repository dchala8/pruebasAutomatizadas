Feature: Tags

@user1 @web
Scenario: 11 - Como administrador me gustaria cear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag
  Given I navigate to page "<GHOST_URL>"
  And I wait for 20 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BOTON>"
  And I wait for 2 seconds
  Then I enter text "$string_1" into field with id "name"
  And I click view with selector "<SAVE_TAG_BOTON>"
  And I wait for 2 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a new post"
  And I wait for 3 seconds
  #Asociar tag al post
  And I publish my new post
  And I wait for 3 seconds
  #Validar que el post muestre el tag


#@user1 @web
#Scenario: Escenario 15
#  Given I navigate to page "http://localhost:2369/ghost"


#@user1 @web
#Scenario: Escenario 16
#  Given I navigate to page "http://localhost:2369/ghost"

#@user1 @web
#Scenario: Escenario 20
#  Given I navigate to page "http://localhost:2369/ghost"

#@user1 @web
#Scenario: Escenario 17
#  Given I navigate to page "http://localhost:2369/ghost"


#@user1 @web
#Scenario: Escenario 18
#  Given I navigate to page "http://localhost:2369/ghost"