# Role-Based Navigator

I have attached the current `index.html` prototype file, the latest data, the latest scope document, and the logo.

Please analyze the **entire existing prototype first**, including the current UI, navigation, roles, modules, interactions, and functionality. Then update the prototype based strictly on the requirements below.

### 1. Replace Existing Data
- Replace the existing/mock data in the prototype with the **data I have attached**.
- Use only the attached data where applicable.
- Do not invent, generate, or add unrelated data.
- Make sure the attached data is mapped correctly to the appropriate screens, tables, cards, charts, reports, and modules.
- Preserve the existing design and overall look and feel unless the latest scope specifically requires a change.

### 2. Sign-In Page – Three Predefined Roles
Create a simple role switcher on the Sign-In page with exactly these three roles:

- **Admin**
- **Payer**
- **Provider**

Each role should have predefined login credentials/fields.

The user should simply:
1. Select a role from the role switcher.
2. Click the **Login** button.
3. Be logged in directly using the predefined credentials.

Requirements:
- Remove the existing names and role options.
- Remove any other roles currently available.
- Keep only **Admin, Payer, and Provider**.
- Do not require the user to manually enter credentials for these predefined demo roles.
- Make sure each role redirects to the correct role-specific dashboard/workspace after login.
- Ensure there are no blank pages or broken routes after logging in.

### 3. Roles
Throughout the prototype, only these three roles should exist:

- **Admin**
- **Payer**
- **Provider**

Remove any other roles, names, or role-specific references currently present in the prototype.

Make sure role-based navigation and functionality are consistent across the entire application.

### 4. Latest Scope
I have attached the **latest scope document**.

Review the scope carefully and update the prototype accordingly.

- Add any newly required modules, screens, fields, workflows, or functionality mentioned in the scope.
- Remove or update anything that conflicts with the latest scope.
- Keep the implementation consistent with the existing design system and UI.

### 5. Complete CRUD Functionality
I noticed that some modules currently do not have complete functionality—for example, **Payer Management**.

Review **every management/configuration module** and make sure the appropriate CRUD functionality is available.

Where applicable, provide:

- **Add**
- **View**
- **Edit**
- **Delete**

For example, if Payer Management exists:
- Add Payer
- View Payer
- Edit Payer
- Delete Payer

Apply the same principle to other applicable management modules.

Important:
- The Add button should open a properly sized and functional form/modal.
- Edit should allow the existing record to be updated.
- Delete should provide an appropriate confirmation before deletion.
- Changes should immediately reflect in the relevant table/list/dashboard.
- Do not add CRUD functionality to modules where it does not logically make sense.

### 6. Dashboard & Reports – Drill-Down Interactions
Improve the dashboards and reporting screens by adding interactive drill-down functionality where appropriate.

For example:
- Clicking a pie chart segment should display the corresponding details.
- Clicking a bar/line chart data point should show the underlying records or relevant information.
- Clicking KPI cards should navigate to or display the related detailed data.
- Charts should feel interactive and connected to the underlying data.

The drill-down experience can use:
- A modal
- A side panel/drawer
- A detailed view
- Navigation to the relevant report

Choose the approach that best fits the existing UI design.

### 7. Logo
I have attached the official logo.

Use the **attached logo** throughout the prototype wherever appropriate, including:
- Sign-In page
- Application header
- Sidebar/navigation, where applicable
- Other appropriate branded locations

Do not replace it with a placeholder or a newly generated logo.

### 8. Preserve the Existing Design
Do **not unnecessarily redesign the prototype**.

Maintain the existing:
- Visual style
- Color system
- Typography
- Spacing
- Components
- Navigation structure
- Layout patterns
- Overall UX

Only make design changes where they are required by the latest scope or the functionality described above.

### 9. Final Quality Check
After implementing all changes, review the **entire prototype end-to-end**.

Verify that:

- All three roles can log in successfully.
- Admin, Payer, and Provider have the correct navigation and screens.
- There are no blank pages.
- There are no broken routes.
- All buttons work.
- Add/Edit/Delete functionality works where applicable.
- Tables display the attached data correctly.
- Charts use the attached data.
- Dashboard drill-down interactions work.
- Modals and forms are appropriately sized.
- The attached logo is used correctly.
- No old role names or unnecessary mock data remain.
- The latest scope has been reflected throughout the prototype.
- The existing design quality and look and feel are preserved.

**Important:** Before making changes, understand the existing prototype architecture and reuse the current components and patterns wherever possible. Do not rebuild the application from scratch unless absolutely necessary.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://visionclaimsplatform.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/04d37f14-6b30-4ffc-9015-ca9bf372383f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitLab and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
