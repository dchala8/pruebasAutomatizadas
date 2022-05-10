Feature: Escenarios que involucran la creacion de posts

@user1 @web
Scenario: Como administrador me gustaria crear post, publicarlo, y luego modificarlo
  Given I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a new post for scenario 1"  
  And I wait for 5 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for published posts with text "This is a new post"
  And I wait for 3 seconds
  And I modify the post writing "This post is modified for scenario 1"
  And I wait for 3 seconds
  And I publish my modified post
  And I wait for 3 seconds
  And I return to dashboard
  And I wait for 3 seconds
  Then I should see the modified post with text "This post is modified for scenario 1"
  And I send a signal to user 2 containing "Finished 1"

 @user2 @web
 Scenario: Como administrador me gustaria crear post, publicarlo, y luego eliminarlo
  Given I wait for a signal containing "Finished 1" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 2"  
  And I wait for 5 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for published posts with text "This is a post for scenario 2"
  And I wait for 3 seconds
  And I delete the post
  And I wait for 5 seconds
  Then I shouldnt see the deleted post
  And I send a signal to user 3 containing "Finished 2"

 @user3 @web
 Scenario: Como administrador me gustaria crear post, dejarlo en draft, luego publicarlo y validar que se publique
  Given I wait for a signal containing "Finished 2" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 3"  
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for draft posts with text "This is a post for scenario 3"
  And I wait for 3 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  Then I should see the published post with text "This is a post for scenario 3"
  And I send a signal to user 4 containing "Finished 3"

 @user4 @web
 Scenario: Como administrador me gustaria crear post, programarlo y verificar que no se publique 
  Given I wait for a signal containing "Finished 3" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 4"  
  And I wait for 5 seconds
  And I schedule post for a future date
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I select scheduled from Dashboard
  And I wait for 5 seconds
  Then I should see the scheduled post with text "This is a post for scenario 4"
  And I send a signal to user 5 containing "Finished 4"

@user5 @web
 Scenario: Como administrador me gustaria crear post, publicarlo, verificar que se publique, cambiarlo a draft y validar que ya no se publique
  Given I wait for a signal containing "Finished 4" for 9999999 seconds
  And I navigate to edit page "<GHOST_URL>"
  And I wait for 5 seconds
  When I make login with "<USER>" and "<PASSWORD>"
  And I wait for 5 seconds
  And I create a new post with text "This is a post for scenario 5"  
  And I wait for 5 seconds
  And I publish my new post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I search for published posts with text "This is a post for scenario 5"
  And I wait for 5 seconds
  And I unpublish the post
  And I wait for 5 seconds
  And I return to dashboard
  And I wait for 5 seconds
  And I select drafted from Dashboard
  And I wait for 3 seconds
  Then I should see drafted post with text "This is a post for scenario 5"
  