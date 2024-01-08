Feature: Plant and offer trees - Purchase flow

    Background: Given am I a logged user

    Scenario Outline: I can choose to plant or offer trees
        When I as a <user_type> click on <button_type> button on <page_type>
        Then I verify I'm redirected to the checkout configuration and preview page
        Examples:
            | user_type | button_type | page_type           |
            | citizen   | plant trees | homepage            |
            | citizen   | plant trees | Plant & Offset page |
            | citizen   | plant trees | private area        |
            | citizen   | offer trees | Plant & Offset page |
            | citizen   | offer trees | homepage            |
            | citizen   | offer trees | private area        |
            | company   | plant trees | Plant & Offset page |
            | company   | offer trees | Plant & Offset page |
            | company   | plant trees | private area        |
            | company   | offer trees | private area        |

    Scenario: I can configure my purchase for planting a tree
        When I am on the checkout configuration and preview page
        And I select a plantation project
        And I choose the type of tree I want to plant
        And I choose the number of trees I want to plant
        And I click on Plant your trees button
        Then I am redirected to the checkout page

    Scenario: I can configure my purchase for offering a tree
        When I am on the checkout configuration and preview page
        And I select a plantation project
        And I choose the type of tree I want to offer
        And I choose the number of trees I want to offer
        And I add a message/image to dedicate the tree
        And I fill the recipient info
        And I click on Plant your trees button
        Then I am redirected to the gift detail page

    Scenario: I can see the checkout page for offering a tree
        When I am on the gift detail page
        And I choose the sending date
        And I choose the language of the gift email
        And I click on the continue button
        Then I the payment form is shown

    Scenario: I can make a purchase for planting/offering a tree
        When I am on the checkout page
        And I select the frequency with which the trees are planted
        And I add the correct credit card info
        And I click on Pay & Plant button
        Then I verify I can make a purchase





Feature: Net Zero User

    Background: Given am I a logged user

    Scenario Outline: I can see different plans to be a Net Zero user
        When I as a <user_type> click on <button_type> button on <page_type>
        Then I verify I'm redirected to the <landing_page> page
        Examples:
            | user_type | button_type      | page_type           | landing_page                     |
            | citizen   | Net Zero Citizen | homepage            | Choose the Net Zero Citizen Plan |
            | citizen   | plant trees      | Plant & Offset page | Choose the Net Zero Citizen Plan |
            | company   | Net Zero Team    | homepage            | Net Zero Team Plan               |

    Scenario: I can choose a plan to be a Net Zero user
        When I choose a plan to be a Net Zero user
        Then I verify I'm redirected to the checkout page

    Scenario: I can make a purchase for a Net Zero Plan
        When I am on the checkout page
        And I fill the requested fields with correct info
        And I click on Pay & Plant button
        Then I verify I can make a purchase