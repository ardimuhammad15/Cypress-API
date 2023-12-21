describe('Update user data', () => {
    it('Successfully update user data', () => {
        var user = {
            "name": "Ardiansyah",
            "job": "Quality Assurance"
        }
        cy.request('PUT', 'https://reqres.in/api/users/2', user).then((response) => {
            expect(response.status).equal(200);
            expect(response.body.name).to.eq(user.name);
            expect(response.body).to.have.property('job', 'Quality Assurance');
        });
    });
})