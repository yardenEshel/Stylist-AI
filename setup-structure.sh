#!/usr/bin/env bash
#
# File: setup-structure.sh
# Description: Creates a front-end/back-end structure within the current directory.

# -------------------------------------------
# 0. ROOT LEVEL
# -------------------------------------------
# Create helpful root-level files if they don't exist
touch .gitignore
touch README.md

# -------------------------------------------
# 1. FRONT-END
# -------------------------------------------
echo "Setting up front-end..."

# Create front-end folder
mkdir -p front-end
cd front-end || exit

# Initialize npm (creates or updates package.json)
if [ ! -f package.json ]; then
  npm init -y
fi

# Create subfolders
mkdir -p public
mkdir -p src/assets/images
mkdir -p src/assets/icons
mkdir -p src/assets/fonts
mkdir -p src/components/common
mkdir -p src/components/Footer
mkdir -p src/components/Navbar
mkdir -p src/pages/HomePage
mkdir -p src/pages/SignUp
mkdir -p src/pages/Onboarding
mkdir -p src/pages/MatchingProcess
mkdir -p src/pages/Checkout
mkdir -p src/pages/FAQ
mkdir -p src/pages/ContactUs
mkdir -p src/pages/UserAccount
mkdir -p src/pages/AdminDashboard
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/context

# Create placeholder files
touch public/index.html
touch public/favicon.ico

touch src/App.js
touch src/App.css
touch src/index.js
touch src/index.css

touch src/components/common/Button.jsx
touch src/components/common/InputField.jsx

touch src/components/Footer/Footer.jsx
touch src/components/Footer/Footer.css

touch src/components/Navbar/Navbar.jsx
touch src/components/Navbar/Navbar.css

touch src/pages/HomePage/HomePage.jsx
touch src/pages/HomePage/HomePage.css

touch src/pages/SignUp/SignUp.jsx
touch src/pages/SignUp/SignUp.css

touch src/pages/Onboarding/Onboarding.jsx
touch src/pages/Onboarding/Onboarding.css

touch src/pages/MatchingProcess/MatchingProcess.jsx
touch src/pages/MatchingProcess/MatchingProcess.css

touch src/pages/Checkout/Checkout.jsx
touch src/pages/Checkout/Checkout.css

touch src/pages/FAQ/FAQ.jsx
touch src/pages/FAQ/FAQ.css

touch src/pages/ContactUs/ContactUs.jsx
touch src/pages/ContactUs/ContactUs.css

touch src/pages/UserAccount/UserAccount.jsx
touch src/pages/UserAccount/UserAccount.css

touch src/pages/AdminDashboard/AdminDashboard.jsx
touch src/pages/AdminDashboard/AdminDashboard.css

touch src/services/api.js
touch src/utils/constants.js
touch src/utils/validations.js
touch src/utils/helpers.js
touch src/context/AuthContext.js

# Return to root
cd ..

# -------------------------------------------
# 2. BACK-END
# -------------------------------------------
echo "Setting up back-end..."

# Create back-end folder
mkdir -p back-end
cd back-end || exit

# Initialize npm (creates or updates package.json)
if [ ! -f package.json ]; then
  npm init -y
fi

# Create subfolders
mkdir -p config
mkdir -p controllers
mkdir -p models
mkdir -p routes
mkdir -p middlewares
mkdir -p utils

# Create placeholder files
touch server.js
touch config/db.js
touch controllers/userController.js
touch models/userModel.js
touch routes/userRoutes.js
touch middlewares/authMiddleware.js
touch utils/logger.js

cd ..

# -------------------------------------------
# DONE
# -------------------------------------------
echo "Project structure setup complete!"

