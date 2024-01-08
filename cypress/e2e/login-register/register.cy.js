describe('Create and Login on Tree-Nation', () => {
    let randomNumber = Math.floor(Math.random() * 100);
    let userDataCitizen = {
        first_name: `User${randomNumber}`,
        last_name: 'Test',
        email: `userTest.92+${randomNumber}@gmail.com`,
        password: 'TreeTest',
        type: 'citizen'
    };
    let userName = `${userDataCitizen.first_name} ${userDataCitizen.last_name}`;
        
    beforeEach(() => {
            cy.visit('/');
        });

    context('Create an account on Tree-Nation', () => {
        

        it(`I can create an account for citizen from the register button`, () => {
            cy.intercept('/register').as('register');
            cy.get('.main-nav__btn-register').should('be.visible').click().then(() => {
                cy.get('.register-process').should('be.visible');
            });
            cy.get('#reg_form_citizen').click();
            cy.get('input[placeholder="First and last name"]').should('be.visible').type(userName);
            cy.get('input[placeholder="E-mail"]').first().should('be.visible').type(userDataCitizen.email);
            cy.get('input[placeholder="Password"]').first().should('be.visible').type(userDataCitizen.password);
            cy.get('button[type=submit]').first().should('be.visible').click();
            /*cy.pause();
            //From here we cannot continue with the test because of a reCHAPTA.
            //Unless the dev team disable it on a local environment the only "fair" solution is to pause the test and complete it manually to continue the creation process.
            cy.wait('@register').then((registerInterception) => {
                expect(registerInterception.response.statusCode).to.eq(200);
                expect(registerInterception.response.body).to.include('status', 'ok');
                cy.url().should('eq', `https://tree-nation.com/profile/${userDataCitizen.first_name.toLowerCase()}-${userDataCitizen.last_name.toLowerCase()}`);
            });*/
        });
    });

    context('Login on Tree-Nation', () => {
        const url = 'https://tree-nation.com/register';
        const body = {
            full_name: `${userDataCitizen.first_name} ${userDataCitizen.last_name}`,
            email: userDataCitizen.email,
            password: userDataCitizen.password,
            type: userDataCitizen.type
        }
    
        it(`I can do the login for citizen from the register button`, () => {
            cy.intercept('/login').as('login');
            
            //Doubt: better a command (createUserByApi - there is an example in the command folder) or a function to create a user by API?
            //Issue: in both cases I'm getting an error 419 when calling the endpoint

           /* cy.getCookie('XSRF-TOKEN').then((cookie) => {
                const xsrfToken = cookie.value;
                //createUserByApi(body, xsrfToken);
                cy.request({
                    method: 'POST',
                    url: url,
                    headers: {
                        'X-Xsrf-Token': `${xsrfToken}`
                    },
                    body: body
                }).then((responsePost) => {
                    expect(responsePost.status).to.eq(200);
                    expect(responsePost.body).to.not.be.empty;
                    expect(responsePost.body.user).to.have.property('id').and.to.be.a('number');
                    expect(responsePost.body.user).to.have.property('firstname', body.first_name);
                    expect(responsePost.body.user).to.have.property('last_name', body.last_name);
                    expect(responsePost.body.user).to.have.property('email', body.email);
                    expect(responsePost.body.user).to.have.property('full_name', full_name);
                    expect(responsePost.body.user).to.have.property('type', body.type);
                });
            });

            cy.get('.main-nav__btn-login').should('be.visible').click().then(() => {
                cy.get('.register-process').should('be.visible');
            });
            cy.get('input[placeholder="E-mail"]').eq(1).should('be.visible').type(oldUserDataCitizen.email);
            cy.get('input[placeholder="Password"]').eq(1).should('be.visible').type(oldUserDataCitizen.password);
            cy.get('.login__main-btn').eq(1).should('be.visible').click();
            cy.wait('@login').then((loginInterception) => {
                expect(loginInterception.response.statusCode).to.eq(200);
                expect(loginInterception.response.body).to.include('status', 'ok');
                cy.url().should('eq', `https://tree-nation.com/es/perfil/${oldUserDataCitizen.firstName.toLowerCase()}-${oldUserDataCitizen.lastName.toLowerCase()}`);
            });*/
        });
    });
});

