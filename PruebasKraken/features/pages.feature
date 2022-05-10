Feature: Escenarios que involucran la creacion de páginas

@user6 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, modificarla y ver que se realice el cambio
  Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 6"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with text "This is a page for scenario 6"
  And I wait for 3 seconds
  And I modify the page writing "This page is modified for scenario 6"
  And I wait for 3 seconds
  And I publish my modified page
  And I wait for 3 seconds
  And I return to dashboard from pages
  And I wait for 3 seconds
  Then I should see the modified page with text "This page is modified for scenario 6"
  And I send a signal to user 7 containing "Finished 6"

@user7 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, y luego eliminarla
  Given I wait for a signal containing "Finished 6" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 7"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with text "This is a page for scenario 7"
  And I wait for 3 seconds
  And I delete the page
  And I wait for 5 seconds
  Then I shouldnt see the deleted page
  And I send a signal to user 8 containing "Finished 7"

 @user8 @web
 Scenario: Como administrador me gustaria crear una pagina, dejarla en draft, luego publicarla y validar que se publique
  Given I wait for a signal containing "Finished 7" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 8"  
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for draft pages with text "This is a page for scenario 8"
  And I wait for 3 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  Then I should see the published page with text "This is a page for scenario 8"  
  And I send a signal to user 9 containing "Finished 8"

 @user9 @web
 Scenario: Como administrador me gustaria crear una pagina, programarla y verificar que no se publique aún
  Given I wait for a signal containing "Finished 8" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a page for scenario 9"  
  And I wait for 5 seconds
  And I schedule page for a future date
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I select scheduled pages
  And I wait for 5 seconds
  Then I should see the scheduled page with text "This is a page for scenario 9"
  And I send a signal to user 10 containing "Finished 9"

@user10 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, verificar que se publique, cambiarla a draft y validar que ya no se publique
  Given I wait for a signal containing "Finished 9" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new page with text "This is a post for scenario 10"  
  And I wait for 5 seconds
  And I publish my new page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I search for published pages with text "This is a post for scenario 10"
  And I wait for 5 seconds
  And I unpublish the page
  And I wait for 5 seconds
  And I return to dashboard from pages
  And I wait for 5 seconds
  And I select draft pages
  And I wait for 3 seconds
  Then I should see draft page with text "This is a post for scenario 10"