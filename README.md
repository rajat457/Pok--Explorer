# Pokémon Explorer

A React-based web application that fetches data from the [PokeAPI](https://pokeapi.co/) and allows users to explore Pokémon. Users can search and filter Pokémon by name and type. The application features a responsive design and includes both a basic and advanced data explorer.

## Features

### Interactive Data Explorer (Phase 1)
- Fetches the first 150 Pokémon from the PokeAPI
- Real-time search functionality to filter Pokémon by name
- Type-based filter (e.g., Fire, Water, Grass, etc.)
- Displays name, image (sprite), type(s), and ID in a card-based layout
- Responsive design for both desktop and mobile
- Loading indicators and empty state handling

### Advanced Data Explorer (Phase 2)
- Pagination with configurable items per page (10, 20, 50)
- Sorting by ID and name (ascending/descending)
- Multi-type filtering
- Detailed view for each Pokémon, showing:
  - Stats (HP, Attack, Defense, etc.)
  - Abilities and Moves
  - Evolution chain
- Favorites system with localStorage persistence
- View to compare stats of two Pokémon
- Random Pokémon button
- Error boundaries to catch unexpected issues

## Technologies Used
- **React** (Functional components, React Hooks)
- **React Router** (Page navigation)
- **React Context API** (State management)
- **Custom Hooks** (Reusable logic)
- **CSS** (Responsive layout and styling)
- **PokeAPI** (Data source for Pokémon)

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
   cd pok--explorer

3. **Install dependencies:**
   ```bash
   npm install

4. **Run the application:**
   ```bash
   npm start

The application should now be running on http://localhost:3000 .     
