Feature: Escenarios que involucran la creacion de posts

# @user1 @web
# Scenario: Como administrador me gustaria crear post, publicarlo, y luego modificarlo
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new post with text "This is a new post for scenario 1"  
#   And I wait for 5 seconds
#   And I publish my new post
#   And I wait for 5 seconds
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I search for published posts with text "This is a new post"
#   And I wait for 3 seconds
#   And I modify the post writing "This post is modified for scenario 1"
#   And I wait for 3 seconds
#   And I publish my modified post
#   And I wait for 3 seconds
#   And I return to dashboard
#   And I wait for 3 seconds
#   Then I should see the modified post with text "This post is modified for scenario 1"


#  @user2 @web
#  Scenario: Como administrador me gustaria crear post, publicarlo, y luego eliminarlo
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new post with text "This is a post for scenario 2"  
#   And I wait for 5 seconds
#   And I publish my new post
#   And I wait for 5 seconds
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I search for published posts with text "This is a post for scenario 2"
#   And I wait for 3 seconds
#   And I delete the post
#   And I wait for 5 seconds
#   Then I shouldnt see the deleted post

#  @user3 @web
#  Scenario: Como administrador me gustaria crear post, dejarlo en draft, luego publicarlo y validar que se publique
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new post with text "This is a post for scenario 3"  
#   And I wait for 5 seconds
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I search for draft posts with text "This is a post for scenario 3"
#   And I wait for 3 seconds
#   And I publish my new post
#   And I wait for 5 seconds
#   And I return to dashboard
#   Then I should see the published post with text "This is a post for scenario 3"

#  @user4 @web
#  Scenario: Como administrador me gustaria crear post, programarlo y verificar que no se publique 
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new post with text "This is a post for scenario 4"  
#   And I wait for 5 seconds
#   And I schedule post for a future date
#   And I wait for 5 seconds
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I select scheduled from Dashboard
#   And I wait for 5 seconds
#   Then I should see the scheduled post with text "This is a post for scenario 4"

# @user5 @web
#  Scenario: Como administrador me gustaria crear post, publicarlo, verificar que se publique, cambiarlo a draft y validar que ya no se publique
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new post with text "This is a post for scenario 5"  
#   And I wait for 5 seconds
#   And I publish my new post
#   And I wait for 5 seconds
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I search for published posts with text "This is a post for scenario 5"
#   And I wait for 5 seconds
#   And I unpublish the post
#   And I wait for 5 seconds
#   And I return to dashboard
#   And I wait for 5 seconds
#   And I select drafted from Dashboard
#   And I wait for 3 seconds
#   Then I should see drafted post with text "This is a post for scenario 5"
  
# @user6 @web
#  Scenario: Como administrador me gustaria crear una pagina, publicarla, modificarla y ver que se realice el cambio
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new page with text "This is a page for scenario 6"  
#   And I wait for 5 seconds
#   And I publish my new page
#   And I wait for 5 seconds
#   And I return to dashboard from pages
#   And I wait for 5 seconds
#   And I search for published pages with text "This is a page for scenario 6"
#   And I wait for 3 seconds
#   And I modify the page writing "This page is modified for scenario 6"
#   And I wait for 3 seconds
#   And I publish my modified page
#   And I wait for 3 seconds
#   And I return to dashboard from pages
#   And I wait for 3 seconds
#   Then I should see the modified page with text "This page is modified for scenario 6"

# @user7 @web
#  Scenario: Como administrador me gustaria crear una pagina, publicarla, y luego eliminarla
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new page with text "This is a page for scenario 7"  
#   And I wait for 5 seconds
#   And I publish my new page
#   And I wait for 5 seconds
#   And I return to dashboard from pages
#   And I wait for 5 seconds
#   And I search for published pages with text "This is a page for scenario 7"
#   And I wait for 3 seconds
#   And I delete the page
#   And I wait for 5 seconds
#   Then I shouldnt see the deleted page

#  @user8 @web
#  Scenario: Como administrador me gustaria crear una pagina, dejarla en draft, luego publicarla y validar que se publique
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new page with text "This is a page for scenario 8"  
#   And I wait for 5 seconds
#   And I return to dashboard from pages
#   And I wait for 5 seconds
#   And I search for draft pages with text "This is a page for scenario 8"
#   And I wait for 3 seconds
#   And I publish my new page
#   And I wait for 5 seconds
#   And I return to dashboard from pages
#   Then I should see the published page with text "This is a page for scenario 8"  

#  @user9 @web
#  Scenario: Como administrador me gustaria crear una pagina, programarla y verificar que no se publique aún
#   Given I navigate to page "<GHOST_URL>"
#   And I wait for 5 seconds
#   When I make login with "<USER>" and "<PASSWORD>"
#   And I wait for 5 seconds
#   And I create a new page with text "This is a page for scenario 9"  
#   And I wait for 5 seconds
#   And I schedule page for a future date
#   And I wait for 5 seconds
#   And I return to dashboard from pages
#   And I wait for 5 seconds
#   And I select scheduled pages
#   And I wait for 5 seconds
#   Then I should see the scheduled page with text "This is a page for scenario 9"

@user10 @web
 Scenario: Como administrador me gustaria crear una pagina, publicarla, verificar que se publique, cambiarla a draft y validar que ya no se publique
  Given I navigate to page "<GHOST_URL>"
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