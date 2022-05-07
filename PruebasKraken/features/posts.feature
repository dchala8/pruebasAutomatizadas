Feature: Escenarios que involucran la creacion de posts

@user1 @web
Scenario: Como administrador me gustaria crear post, publicarlo, y luego modificarlo
  Given I navigate to page "<GHOST_URL>"
  And I wait for 3 seconds
  When I enter correo "<USER>"
  And I wait for 3 seconds
  And I enter clave "<PASSWORD>"
  And I wait for 3 seconds
  And I click sign in
  And I wait for 3 seconds
  And I select option posts
  And I wait for 3 seconds
  And I select New post
  And I wait for 3 seconds
  And I write a new post with title "This is a new post"
  And I wait for 3 seconds
  And I publish my new post
  And I wait for 3 seconds
  And I return to dashboard
  And I wait for 3 seconds
  And I search for published posts with text "This is a new post"
  And I wait for 3 seconds
  And I modify the post writing "This post is modified"
  And I wait for 3 seconds
  And I publish my modified post
  And I wait for 3 seconds
  And I return to dashboard
  And I wait for 3 seconds
  Then I should see the modified post with text "This post is modified"

