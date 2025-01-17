
import { When, Given } from "@badeball/cypress-cucumber-preprocessor";
import '@shelex/cypress-allure-plugin';
const EmployeeTreeGridPO = require('../page_objects/Employee/employee_tree_gridpo.js');
const employeeTreeGridPage = new EmployeeTreeGridPO();
const qs = require("qs");
 
 


 
When('check Header', function() { 
  employeeTreeGridPage.getColumnFirstName().should('exist');
  employeeTreeGridPage.getColumnFirstName().should('contain','FirstName');
  employeeTreeGridPage.getColumnLastName().should('exist');
  employeeTreeGridPage.getColumnLastName().should('contain','LastName')
  employeeTreeGridPage.getColumnTitle().should('exist');
  employeeTreeGridPage.getColumnTitle().should('contain','Title');
  employeeTreeGridPage.getColumnCity().should('exist');
  employeeTreeGridPage.getColumnCity().should('contain','City');
});



When('check checkbox element', function() {
  employeeTreeGridPage.ButtonGrid().click();
  for (let i = 0; i <= 8; i++) {
      // Use cy.get() to select the checkbox element within the row
      const checkboxElement = employeeTreeGridPage.getCheckboxFromRow(i);
      checkboxElement.should('exist');
  }
});
When('check if elements empty', function() {
 
  // Iterate through rows 0 to 8
  for (let i = 0; i <= 8; i++) {
      const rowId = `#row${i}treeGrid`;

      // Use cy.get() to select all cells within the row
      const cellsInRow = employeeTreeGridPage.getCellsElement(rowId);

      // Ensure that cells in the row exist
      cellsInRow.should('exist');

      // Wait for cells in the row to be visible
      cellsInRow.should('be.visible');

      // Check if the text of any cell in the row is empty
      cellsInRow.each((cell) => {
          cy.wrap(cell).invoke('text').should('not.be.empty');
      });
  }
});



 
  

