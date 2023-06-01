## **How to setup Button-Mania**

#### **Prerequisites**  

Before you begin, ensure that you have the following installed on your machine:
- Node.js (version 14 or later)
- Git (optional but recommended)

#### **Forking the Repository**
1. Navigate to the Button-Mania repository on GitHub: [Button-Mania Repository](https://github.com/your-username/button-mania).
2. Click the "Fork" button located at the top right corner of the page.
3. A copy of the Button-Mania repository will now be created under your GitHub account.

#### **Cloning the Repository**
1. On your forked repository page, click the "Code" button.
2. Copy the HTTPS or SSH URL of your repository.
3. Open your terminal or command prompt.
4. Navigate to the directory where you want to clone the repository.
5. Run the following command, replacing `<repository-url>` with the URL you copied in step 2:

   ```
   git clone <repository-url>
   ```

   This will clone the Button-Mania repository to your local machine.

#### **React Setup using Vite**
1. Open your terminal or command prompt.
2. Navigate to the cloned Button-Mania project directory:

   ```
   cd button-mania
   ```

3. Install project dependencies by running the following command:

   ```
   npm install
   ```

   This command will install all the necessary dependencies specified in the `package.json` file.

4. Start the development server by running the following command:

   ```
   npm run dev
   ```

   This will start the Vite development server and compile the project. You should see the local development URL (e.g., `http://localhost:5173`) in the terminal.

5. Open your web browser and navigate to the URL provided in the previous step.  

    This will launch the Button-Mania application in your default browser.
  
  

### **Creating a Branch to Contribute**

1. After cloning the repository, navigate to the project's directory in your terminal or command prompt.
2. Before making any changes, create a new branch to work on. You can use the following command to create and switch to a new branch:
   ```
   git checkout -b new-feature
   ```
   Replace `new-feature` with an appropriate name for your branch. Make sure to use a descriptive name that reflects the changes you plan to make.
   
   Example: If you plan to add a new feature that allows users to customize button colors, you can name your branch `feature/customize-button-colors`.
3. Now you're ready to make your desired changes to the codebase.
4. Commit your changes using the following command:
   ```
   git commit -m "Your commit message"
   ```
   Replace `"Your commit message"` with a brief description of the changes you made in the present tense.
5. Push your branch to your forked repository on GitHub:
   ```
   git push origin new-feature
   ```
   Replace `new-feature` with the name of your branch.
   
   Example: `git push origin feature/customize-button-colors`.
6. Finally, open a pull request on the original Button-Mania repository. Your changes will be reviewed, and if everything looks good, they will be merged into the main project.
  
---