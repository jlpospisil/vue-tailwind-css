Using Tailwind CSS within a vue application
---
1. Create the vue application

    ```
    vue create application-name
    ```
    
2. Install additional dependencies

    ```
    npm install --save-dev tailwindcss autoprefixer
    ```
    
3. Create tailwind config file

    ```
    npx tailwind init tailwind.config.js
    ```
    
4. Add the following plugins to postcss.config.js

    ```
    module.exports = {
      plugins: [
        require('tailwindcss')('tailwind.config.js'),   // eslint-disable-line
        require('autoprefixer')(),  // eslint-disable-line
      ],
    };
    ```
    
5. Create src/assets/css/tailwind.css file with the following content

    ```
    @tailwind preflight;
    @tailwind components;
    @tailwind utilities;
    ```

6. Import tailwind.css in main.js

    ```
    // eslint-disable-next-line import/no-unresolved
    import '@/assets/css/tailwind.css';
    ```
