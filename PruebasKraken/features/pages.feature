Feature: Escenarios que involucran la creacion de páginas

@user6 @web
 Scenario: 6 - Como administrador me gustaria crear una pagina, publicarla, modificarla y ver que se realice el cambio
  Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with random text "$string_1"
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with random text "$$string_1"
  And I wait for 5 seconds
  And I modify the page writing random text "$string_2"
  And I wait for 5 seconds
  And I publish my modified page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  Then I should see the modified page with random text "$$string_2"
  And I send a signal to user 7 containing "Finished 6"

@user7 @web
 Scenario: 7 - Como administrador me gustaria crear una pagina, publicarla, y luego eliminarla
  Given I wait for a signal containing "Finished 6" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with random text "$string_1"
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with random text "$$string_1"
  And I wait for 5 seconds
  And I delete the page
  And I wait for 5 seconds
  Then I shouldnt see the deleted page
  And I send a signal to user 8 containing "Finished 7"

 @user8 @web
 Scenario: 8 - Como administrador me gustaria crear una pagina, dejarla en draft, luego publicarla y validar que se publique
  Given I wait for a signal containing "Finished 7" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with random text "$string_1"
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for draft pages with random text "$$string_1"
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  Then I should see the published page with random text "$$string_1"
  And I send a signal to user 9 containing "Finished 8"

 @user9 @web
 Scenario: 9 - Como administrador me gustaria crear una pagina, programarla y verificar que no se publique aún
  Given I wait for a signal containing "Finished 8" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with random text "$string_1"  
  And I wait for 5 seconds
  And I schedule page for a future date
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I select scheduled pages
  And I wait for 5 seconds
  Then I should see the scheduled page with random text "$$string_1"
  And I send a signal to user 10 containing "Finished 9"

@user10 @web
 Scenario: 10 - Como administrador me gustaria crear una pagina, publicarla, verificar que se publique, cambiarla a draft y validar que ya no se publique
  Given I wait for a signal containing "Finished 9" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with random text "$string_1"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with random text "$$string_1"
  And I wait for 5 seconds
  And I unpublish the page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I select draft pages
  And I wait for 5 seconds
  Then I should see draft page with random text "$$string_1"