# Pokémon Explorer

## Overview

Build a React application that fetches data from the PokeAPI (https://pokeapi.co/) and allows users to search, filter, and explore Pokémon. The app will have two phases:

- **Interactive Data Explorer**: Displays a list of Pokémon with basic information and search/filter functionality.
- **Advanced Data Explorer**: Adds enhanced features such as detailed views, favorites system, pagination, and sorting.

## Interactive Data Explorer

### Requirements

1. **Data Fetching**:
   - Fetch the first 150 Pokémon from the PokeAPI.
   - Display each Pokémon in a card layout showing:
     - Name
     - Image (sprite)
     - Type(s)
     - ID number

2. **Search Functionality**:
   - Implement a search input that filters Pokémon by name in real-time.
   - Add a filter dropdown to filter Pokémon by type (e.g., Fire, Water, Grass).
   - Show loading and empty states when data is being fetched or no results are found.

3. **UI/UX**:
   - Create a responsive design that works on both desktop and mobile devices.
   - Include a simple header with the application name.
   - Style the application with CSS or a CSS framework of your choice.

### Technical Requirements:
- Use **functional components** with **React Hooks**.
- Implement proper **loading** and **error states**.
- Structure your code with **reusable components**.
- Handle edge cases (e.g., no results, API errors).

### Submission:
- Deploy your application using a free hosting service (e.g., Vercel, Netlify, GitHub Pages).
- Submit the link to your deployed application and GitHub repository.

### Resources:
- **PokeAPI Documentation**: [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- Example endpoint for Pokémon list: [https://pokeapi.co/api/v2/pokemon?limit=150](https://pokeapi.co/api/v2/pokemon?limit=150)

---

## Advanced Data Explorer

### Overview

Build on the Interactive Data Explorer by adding more advanced features including pagination, sorting, detailed views, and a favorites system.

### Requirements

1. **Enhanced List View**:
   - Implement **pagination** with configurable items per page (10, 20, 50).
   - Add **sorting** options (by ID, name, alphabetically).
   - Include **filtering** by multiple types simultaneously (e.g., Fire + Water).

2. **Detailed View**:
   - Create a detailed view for each Pokémon showing:
     - All stats (HP, Attack, Defense, etc.)
     - Abilities
     - Moves
     - Evolution chain
   - Implement routing to navigate between the list and detailed views.

3. **Favorites System**:
   - Allow users to mark Pokémon as **favorites**.
   - Create a separate view to display favorite Pokémon.
   - Persist favorites in **localStorage** so they remain after page refresh.

4. **Advanced Features**:
   - Implement a **comparison tool** to compare stats of two Pokémon.
   - Add a **random Pokémon** button that loads a random entry.
   - Include **error boundaries** to prevent the app from crashing due to errors.

### Technical Requirements:
- Use **React Context API** for state management.
- Implement performance optimizations (e.g., `useMemo`, `useCallback`).
- Create **custom hooks** for reusable logic.
- Structure your project into logical folders (e.g., `components`, `hooks`, `contexts`).
- Use **React Router** for navigation.

## Live Demo

You can access the live demo of the app here:

[**Pokémon Explorer** - Live Demo](https://pok-explorer-three.vercel.app/)

---

## Development Setup

### Prerequisites

1. Clone the repository:
   ```bash
   git clone https://github.com/rajat457/Pok--Explorer.git

2. **Navigate to the project directory:**
   ```bash
   cd poke-explorer

3. **Install dependencies:**
   ```bash
   npm install

4. **Run the application:**
   ```bash
   npm start

The application should now be running on http://localhost:3000.     