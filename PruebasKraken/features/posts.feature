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

 @user3 @web
 Scenario: Como administrador me gustaria crear post, dejarlo en draft, luego publicarlo y validar que se publique
  Given I navigate to page "<GHOST_URL>"
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
  
