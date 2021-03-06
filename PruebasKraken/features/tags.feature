Feature: Escenarios que involucran la creacion de tags

@user11 @web
Scenario: 11 - Como administrador me gustaria cear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag
  Given I navigate to edit page "<GHOST_URL>"  
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "2"
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "3"
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "4"
  Then I define tag name as "$name_1"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "5"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "11" and step number "6"
  And I select option posts
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "7"
  And I select New post
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "8"
  And I write a new post with random title "$name_2"
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "9"
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "10"
  Then I define tag name "$$name_1" into tags field
  And I wait for 3 seconds
  And I take a screenshot of scenario "11" and step number "11"
  #Validar que el post muestre el tag
  And I publish my new post
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "12"
  And I return to dashboard
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "13"
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "14"
  Then I found post "$$name_2" with tag "$$name_1" related
  And I wait for 5 seconds
  And I take a screenshot of scenario "11" and step number "15"
  And I send a signal to user 12 containing "Finished 11"
  
@user12 @web
Scenario: 12 - Como administrador me gustar??a crear tag, crear post con el tag creado y publicarlo, validar que el post muestre tag, eliminar el tag, verificar que el post ya no muestre el tag
Given I wait for a signal containing "Finished 11" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_3"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with random title "$name_4"
  And I wait for 3 seconds
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  Then I define tag name "$$name_3" into tags field
  And I wait for 3 seconds
  #Validar que el post muestre el tag
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "$$name_4" with tag "$$name_3" related
  #Eliminar el tag creado
  And I wait for 3 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 3 seconds
  Then I select a tag with name "$$name_3"
  And I wait for 3 seconds
  And I click view with selector "<DELETE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<DELETE_CONFIRMATION_BUTTON>"
  And I wait for 5 seconds
  #Validar que el post no muestre el tag
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I dont found post "$$name_4" with tag "$$name_3" related
  And I send a signal to user 13 containing "Finished 12"

@user13 @web
Scenario: 13 - Como administrador me gustar??a crear post con el tag creado y publicarlo, validar que el post muestre el tag, modificar el tag, verificar que el post muestre el tag actualizado
Given I wait for a signal containing "Finished 12" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_5"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with random title "$name_6"
  And I wait for 3 seconds
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  Then I define tag name "$$name_5" into tags field
  And I wait for 3 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  #Validar que el post muestre el tag
  And I wait for 3 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "$$name_6" with tag "$$name_5" related
  #Modificar el tag creado
  And I wait for 3 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 3 seconds
  Then I select a tag with name "$$name_5"
  And I wait for 3 seconds
  Then I define tag name as "$name_7"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  #Validar que el post no muestre el tag
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I found post "$$name_6" with tag "$$name_7" related
  And I send a signal to user 14 containing "Finished 13"

@user14 @web
Scenario: 14 - Como administrador me gustar??a crear tag, crear una pagina con el tag asociado, ir a la lista de paginas, filtrar por el tag creado y verificar que retorne la pagina creada
Given I wait for a signal containing "Finished 13" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "14" and step number "1"
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I take a screenshot of scenario "14" and step number "2"
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "3"
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "4"
  Then I define tag name as "$name_8"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "5"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "6"
  And I click view with selector "<PAGES_MENU>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "7"
  And I click view with selector "<NEW_PAGE_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "8"
  And I write a new page with title "$name_9"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "9"
  #Asociar tag al post
  And I click view with selector "<POST_SETTINGS_BUTTON>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "10"
  Then I define tag name "$$name_8" into tags field
  And I wait for 2 seconds
  And I take a screenshot of scenario "14" and step number "11"
  And I publish my new page
  And I wait for 5 seconds
  And I take a screenshot of scenario "14" and step number "12"
  #Validar que el post muestre el tag
  And I click view with selector "<RETURN_PAGES>"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "13"
  And I filter by tag "$$name_8"
  And I wait for 3 seconds
  And I take a screenshot of scenario "14" and step number "14"
  Then I found page "$$name_9"
  And I take a screenshot of scenario "14" and step number "15"
  And I send a signal to user 15 containing "Finished 14"

@user15 @web
Scenario: 21 - Como administrador me gustar??a crear tag, definir nombre, salvar y verificar que se haya creado
Given I wait for a signal containing "Finished 14" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  Then I should see the new tag with name "$$name_1" in tags list
  And I send a signal to user 16 containing "Finished 15"

@user16 @web
Scenario: 22 - Como administrador me gustar??a crear un nuevo tag, definir nombre, ingresar un color con menos de 6 caracteres e intentar salvar
Given I wait for a signal containing "Finished 15" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  Then I define tag color with "5" characters
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I should see the retry save button
  And I send a signal to user 17 containing "Finished 16"

@user17 @web
Scenario: 23 - Como administrador me gustar??a crear un nuevo tag, definir nombre, ingresar un color con m??s de 6 caracteres e intentar salvar
Given I wait for a signal containing "Finished 16" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  Then I define tag color with "7" characters
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  Then I should see the new tag with name "$$name_1" in tags list
  And I send a signal to user 18 containing "Finished 17"

@user18 @web
Scenario: 24 - Como administrador me gustar??a crear un nuevo tag, definir nombre, ingresar un color con 6 caracteres e intentar salvar
Given I wait for a signal containing "Finished 17" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  Then I define tag color with "6" characters
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  Then I should see the new tag with name "$$name_1" in tags list
  And I send a signal to user 19 containing "Finished 18"

@user19 @web
Scenario: 25 - Como administrador me gustar??a crear un nuevo tag, definir nombre, ingresar una descripci??n con mas de 500 caracteres e intentar salvar
Given I wait for a signal containing "Finished 18" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  Then I define description with "501" characters
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I should see the retry save button
  And I send a signal to user 20 containing "Finished 19"

@user20 @web
Scenario: 26 - Como administrador me gustar??a crear un nuevo tag, definir nombre, ingresar una descripci??n con menos de 500 caracteres e intentar salvar
Given I wait for a signal containing "Finished 19" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  Then I define description with "490" characters
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  Then I should see the new tag with name "$$name_1" in tags list
  And I send a signal to user 21 containing "Finished 20"

@user21 @web
Scenario: 27 - Como administrador me gustar??a crear un nuevo tag, definir nombre, ingresar una descripci??n con 500 caracteres, salvar y verificar que se haya creado
Given I wait for a signal containing "Finished 20" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  And I click view with selector "<NEW_TAG_BUTTON>"
  And I wait for 2 seconds
  Then I define tag name as "$name_1"
  Then I define description with "500" characters
  And I click view with selector "<SAVE_TAG_BUTTON>"
  And I wait for 2 seconds
  And I click view with selector "<TAG_MENU>"
  And I wait for 2 seconds
  Then I should see the new tag with name "$$name_1" in tags list
