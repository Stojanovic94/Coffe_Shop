## Coffe_Shop

This project features a coffee ordering page where users can select from different coffee sizes (Tall, Grande, and Venti) and adjust the quantity. The page is fully functional, allowing users to add or subtract quantities with real-time updates and ensuring that negative values are not allowed.

### Key Features:
- **Quantity Adjustment**: Users can increase or decrease the quantity of each coffee size. The quantity field updates immediately, and negative values are prevented.
- **Tax Calculation**: The page automatically calculates the final price with a tax rate of 9.75%. This value is defined as a constant in JavaScript and used throughout the calculation process.
- **Order Summary**: When users complete their order, the total number of coffees ordered and the final price with tax included is displayed on the page.
- **Input Validation**: Before calculating the total price, the program checks if at least one coffee size (Tall, Grande, or Venti) is ordered. It ensures the integrity of the order by preventing invalid inputs.
- **Clear Functionality**: The "Clear" button resets all quantities and clears the price and tax fields, ensuring that no unwanted data remains after an order is completed.
- **Help Message**: A helpful message is displayed when the page is loaded, guiding users about the +/- options for coffee sizes.
- **UI Restrictions**: Input fields for price, tax rate, and total amount are disabled to prevent manual changes, ensuring they are only updated by the program.

### Additional Features:
- **Rounding**: Prices are rounded to two decimal places using `.toFixed(2)` for accuracy.
- **Constants**: Key values, such as the tax rate, are defined as constants for easy management and modifications.

This project is designed to be neat, functional, and user-friendly, providing a seamless coffee ordering experience.
