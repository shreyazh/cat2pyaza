# Cat2Pyaza 🐱

A sophisticated, minimalist chatbot with a feline twist. Cat2Pyaza responds to your messages with varying "meows" based on the input length, all wrapped in a sleek, metal-black design.

![Cat2Pyaza Screenshot](https://images.pexels.com/photos/2558605/pexels-photo-2558605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)

## Live Demo

Visit [Cat2Pyaza](https://cat2pyaza.netlify.app) to try it out!

## Features

- 🖤 Sleek, metal-black minimalist design
- 🐱 Feline-inspired responses
- ⚡ Real-time message updates
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions

## Response Logic

The chatbot follows these rules:
- For messages with 0-7 characters: Responds with "meow"
- For messages with more than 7 characters: Randomly selects from:
  - "meow meow"
  - "meow meow meow"
  - "meow meow meow meow"

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ChatContainer.tsx   # Main chat logic
│   ├── ChatHeader.tsx      # App header
│   ├── ChatInput.tsx       # Message input
│   └── ChatMessage.tsx     # Message component
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Root component
└── main.tsx               # Entry point
```

## Created By

Shreyash Srivastva

## License

MIT
