Feature: Login

  Background:
    Given I am on the login page

  Scenario: Login with valid credentials
    When I log in with username "Admin" and password "admin123"
    Then I should be redirected to the dashboard

  Scenario: Login with invalid credentials
    When I log in with username "Admin" and password "wrong-password"
    Then I should see an invalid credentials error
