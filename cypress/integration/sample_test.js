// 2 blocks

// describe('')
// it

const $ = document.querySelector

describe('Login form', function() {
  it('submit action', function() {
    cy.visit('https://google.com')

    cy.get('#tsf input[name="q"]').then(function($text) {
      $text.val('Judy hopps')
      expect($text.val()).to.equal('Judy hopps')
    })
  })
})
