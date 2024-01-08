Feature: Header functionality

    Background: Given am I on tree-nation homepage

        Scenario Outline: I can validate the login and register buttons are clicable and workable
        When I click on <button_type> button
        Then I verify this button is clicable
        And I verify the proper pop up is opened
        Examples:
            | button_type |
            | Register    |
            | Login       |

    Scenario Outline: I can validate all the header sections are clicable and workable
        When I click on <header_section> button
        Then I verify this section is clicable
        And I verify I am redirected to the proper page
        Examples:
            | header_section              |
            | Plant & Offset              |
            | Trees                       |
            | Projects > Projects List    |
            | Projects > Projects Updates |
            | About > About Us            |
            | About > Our Blog            |
            | About > Why Plant Trees     |
            | About > Learn More          |
            | About > Knowlenge Base      |
            | Community > Forum           |
            | Community > Seeds Game      |
            | Community > Explore         |
