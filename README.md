## Test Task Repository

This repository contains a test task for creating a web application that fetches mock user data from an API and displays it in a table. The table consists of 8 columns: Phone, Birth Date, Email, Age, Firstname, Lastname, ID, and Image. Users can sort and filter data based on any column. Clicking on a user's image opens a modal window displaying the image in a larger size. It's important to note that previous sorting and filtering selections persist even after reloading the page.

## Instructions

To run the application locally, follow these steps:
1. Clone this repository to your local machine using ```git clone https://github.com/nya2000/mui-test.git```
2. Navigate to the project directory.
3. Run the development server:
 ```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features
* Fetch mock user data from a mock API.
* Display user data in a table with 8 columns: Phone, Birth Date, Email, Age, Firstname, Lastname, ID, and Image.
* Sort data based on any column by clicking on the column header.
* Filter data based on any column using input fields.
* Click on a user's image to open a modal window displaying the image in a larger size.
* Preserve sorting and filtering selections even after page reload.
* Export document in CSV format
