# student-regisration-app
FOLLOW THIS GUID TO HOST YOUR APPLICATION USING AZURE FUNCTION APP, AZURE MYSQL DATABASE AND AZURE BLOB STORAGE

**Azure Blob Storage Configuration:**
Create a Blob Storage account and configure it to store any uploaded files.
Azure MySQL Database Configuration:
Create an Azure MySQL Database and configure it. You will need to set up a database, tables, and provide connection strings.
**GitHub Repository:**
Create a GitHub repository and push the above code files to the repository.

**Azure Functions Deployment:**
In the Azure portal, create a new Azure Functions App.
Configure Continuous Deployment from your GitHub repository.

DATABASE SETTINGS:
---------------------------------------------
Certainly! Here are the commands you can use to create an Azure MySQL Database, set up a database, and create tables:

Azure CLI Commands:

1. **Create Resource Group:**
   ```bash
   az group create --name YourResourceGroupName --location YourLocation
   ```

2. **Create MySQL Server:**
   ```bash
   az mysql server create --resource-group YourResourceGroupName --name YourMySQLServerName --location YourLocation --admin-user YourAdminUsername --admin-password YourAdminPassword --sku-name B_Gen5_1 --version 5.7
   ```

3. **Configure Firewall Rules:**
   ```bash
   az mysql server firewall-rule create --resource-group YourResourceGroupName --server YourMySQLServerName --name AllowAll --start-ip-address 0.0.0.0 --end-ip-address 255.255.255.255
   ```

4. **Create a Database:**
   ```bash
   az mysql db create --resource-group YourResourceGroupName --server YourMySQLServerName --name YourDatabaseName --charset utf8 --collation utf8_general_ci
   ```

5. **Create Tables:**
   - Connect to the MySQL server:
     ```bash
     mysql -h YourMySQLServerName.mysql.database.azure.com -u YourAdminUsername@YourMySQLServerName -p
     ```
   - Enter the admin password when prompted.
   - Create tables (replace with your table structure):
     ```sql
     USE YourDatabaseName;

     CREATE TABLE Users (
         UserID INT PRIMARY KEY AUTO_INCREMENT,
         Username VARCHAR(255) NOT NULL,
         Password VARCHAR(255) NOT NULL
     );

     CREATE TABLE Feedback (
         FeedbackID INT PRIMARY KEY AUTO_INCREMENT,
         FeedbackText TEXT NOT NULL
     );
     ```

6. **Get Connection String:**
   ```bash
   az mysql server show --resource-group YourResourceGroupName --name YourMySQLServerName --query connectionStrings
   ```

   Copy the connection string from the output and replace placeholders in the Azure Functions code with the actual connection string.

Remember to replace placeholders such as `YourResourceGroupName`, `YourLocation`, `YourMySQLServerName`, `YourAdminUsername`, `YourAdminPassword`, `YourDatabaseName`, etc., with your desired values.

---------------------------------------------
**CREATING AZURE FUNCTION APP**
Certainly! Here are step-by-step instructions on how to create an Azure Functions App and configure Continuous Deployment from your GitHub repository:

### Step 1: Create a Function App

1. **Navigate to the Azure Portal:**
   Open [Azure Portal](https://portal.azure.com/) and log in to your Azure account.

2. **Create a new Function App:**
   - Click on the "+ Create a resource" button.
   - Search for "Function App" in the Azure Marketplace.
   - Click on "Function App" in the results.
   - Click the "Create" button.

3. **Fill in the Function App details:**
   - **Subscription:** Choose your subscription.
   - **Resource Group:** Create a new one or use an existing resource group.
   - **Function App name:** Unique name for your Function App.
   - **Publish:** Choose "Code".
   - **Runtime stack:** Choose the runtime stack based on your preference (Python, JavaScript, Node.js, etc.).
   - **Region:** Choose the region closest to you.
   - **Operating System:** Choose "Windows" or "Linux" based on your preference.
   - **Plan:** Choose the hosting plan (Consumption Plan is usually suitable for testing).

4. **Configure other settings:**
   - **Storage Account:** Create a new one or use an existing storage account.
   - **Application Insights:** Enable if needed.
   - **Monitoring:** Enable if needed.
   - Click the "Review + create" button.

5. **Review and Create:**
   - Review your settings.
   - Click the "Create" button.

6. **Wait for Deployment:**
   - It may take a few minutes for the deployment to complete. Once done, go to your Function App.

### Step 2: Configure Continuous Deployment from GitHub

1. **Navigate to your Function App:**
   - In the Azure Portal, go to your newly created Function App.

2. **Configure Continuous Deployment:**
   - In the left-hand menu, under "Settings," click on "Deployment Center."

3. **Choose Source:**
   - Select GitHub as the source control.
   - Click "Continue."

4. **Authorize GitHub:**
   - If not already authorized, sign in to your GitHub account and authorize Azure to access your repositories.
   - Select your repository.

5. **Configure Build Provider:**
   - Select the build provider based on your application (Azure Pipelines, GitHub Actions, or App Service Build Service).
   - Configure the build provider according to your needs.

6. **Configure Deployment Options:**
   - Choose the branch you want to deploy.
   - Configure other deployment options as needed.

7. **Review and Finish:**
   - Review your settings.
   - Click "Finish" to start the initial deployment.

8. **Wait for Deployment:**
   - The initial deployment may take some time.
   - Once completed, any subsequent changes pushed to the configured branch on GitHub will trigger automatic deployments to your Azure Functions App.

Now, your Function App is set up with Continuous Deployment from your GitHub repository. Any updates you push to the configured branch will automatically be deployed to your Azure Function.
