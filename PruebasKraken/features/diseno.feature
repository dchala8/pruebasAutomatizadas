Feature: Escenarios que involucran cambios en el diseño del sitio

@user1 @web
Scenario: 47 - Como administrador me gustaria Ingresar a diseño del sitio, ingresar a brand, ingresar una descripcion de menos de 200 caracteres, salvar y verificar que los cambios persisten
Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select brand option
  And I wait for 5 seconds
  And I write valid value for description "$name_1" 
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  And I return to dashboard from settings
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I should see the new description with value "$$name_1"
  And I send a signal to user 2 containing "Finished 1"

@user2 @web
Scenario: 48 - Como administrador me gustaria Ingresar a diseño del sitio, ingresar a brand, dejar la decripcion vacia, salvar y verificar que los cambios persisten
Given I wait for a signal containing "Finished 1" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select brand option
  And I wait for 5 seconds
  And I delete value for description 
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  And I return to dashboard from settings
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I should see empty the description field text
  And I send a signal to user 3 containing "Finished 2"

@user3 @web
Scenario: 49 - Como administrador me gustaria Ingresar a diseño del sitio, ingresar a brand, ingresar una descripcion de mas de 200 caracteres e intentar salvar
Given I wait for a signal containing "Finished 2" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select brand option
  And I wait for 5 seconds
  And I define site description with "201" characters 
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should see error "Description is too long"
  And I send a signal to user 4 containing "Finished 3"

@user4 @web
Scenario: 50 - Ingresar a diseño del sitio, ingresar a brand, ingresar un accent color en hexadecimal, salvar y verificar que los cambios persiten
Given I wait for a signal containing "Finished 3" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select brand option
  And I wait for 5 seconds
  And I define accent color value
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  And I return to dashboard from settings
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  And I should see new accent color
  And I send a signal to user 5 containing "Finished 4"

@user5 @web
Scenario: 51 - Ingresar a diseño del sitio, ingresar a brand, ingresar en accent color caracteres que no correspondan a colores hexadecimal e intentar salvar
Given I wait for a signal containing "Finished 4" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select brand option
  And I wait for 5 seconds
  And I define accent color value "xj2375" 
  And I wait for 5 seconds
  Then I should see error "Please enter a color in hex format"
  And I send a signal to user 6 containing "Finished 5"

@user6 @web
Scenario: 52 - Ingresar a diseño del sitio, ingresar a brand, dejar accent color vacio e intentar salvar
Given I wait for a signal containing "Finished 5" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select brand option
  And I wait for 5 seconds
  And I delete value for accent color 
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should see error "Please select an accent color"
  And I send a signal to user 7 containing "Finished 6"

@user7 @web
Scenario: 53 - Ingresar a diseño del sitio, ingresar a site-wide, ingresar un header button background  en hexadecimal, salvar y verificar que los cambios persiten
Given I wait for a signal containing "Finished 6" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select site-wide option
  And I wait for 5 seconds
  And I define header button background value
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  And I return to dashboard from settings
  And I wait for 5 seconds
  Then I navigate to view site page "<GHOST_URL>"
  And I wait for 5 seconds
  Then I should see new header button background color
  And I wait for 5 seconds
  And I send a signal to user 8 containing "Finished 7"

@user8 @web
Scenario: 54 - Ingresar a diseño del sitio, ingresar a site-wide, ingresar en header button backround  caracteres que no correspondan a colores hexadecimal e intentar salvar
Given I wait for a signal containing "Finished 7" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select site-wide option
  And I wait for 5 seconds
  And I define header button background value "678x9n"
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should see color format error "Please enter a color in hex format"
  And I send a signal to user 9 containing "Finished 8"

@user9 @web
Scenario: 55 - Ingresar a diseño del sitio, ingresar a site-wide, dejar header button backround vacio e intentar salvar
Given I wait for a signal containing "Finished 8" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I click design settings
  And I wait for 5 seconds
  And I select site-wide option
  And I wait for 5 seconds
  And I delete header button background value
  And I wait for 5 seconds
  And I click button save
  And I wait for 5 seconds
  Then I should see color format error "Please enter a color in hex format"  
