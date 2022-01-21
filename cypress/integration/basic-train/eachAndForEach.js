it('ForEach', () => {
   const numeros = [1,23,44,55,66]
    numeros.forEach(num => {
        cy.get('a[value="'+num+'"').click()
    })
})

it('ForEach', () => {
    cy.get('#listValues').each($ls => {
        //especificar o que clicar
        if($ls !== 'Juca'){
            cy.wrap($ls).click()
        }
        
    })
     
 })