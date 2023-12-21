describe('Create new user', () => {
    it('Success create new user', () => {
        var user = {
            "name": "Ardiansyah",
            "job": "Quality Assurance"
        }
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201);
            expect(response.body).to.have.property('name', 'Ardiansyah');
            expect(response.body).to.have.property('job', 'Quality Assurance');
        });
    });
})