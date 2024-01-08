Cypress.Commands.add('createUserByApi', (body, xsrfToken) => {
    cy.request({
      method: 'POST',
      url: 'https://tree-nation.com/register',
    }).then(() => {
      cy.request({
        method: 'POST',
        url: 'https://tree-nation.com/register',
        headers: { 'X-Xsrf-Token': `${xsrfToken}` },
        body: body,
      })
    })
  })