# Next.js Project Structure

|-- actions # Server-side actions
|-- app # Next.js App Router
| |-- (auth) # (Group) Private routes
| | |-- layout.tsx # Authenticated layout
| | `-- profile # (Module) Profile page

|-- components # Global components
| `-- ui            # Atomic design components
|       |-- Button.tsx
|       `-- Tag.tsx
|-- constants # Global constants
|-- db # Database utilities
| |-- prisma.ts # Prisma client
| |-- data.ts # Seed data
| `-- seed.ts      # Database seeding
|-- hooks            # Custom React hooks
|-- lib              # 3rd-party libraries
|-- prisma           # Prisma configuration
|   |-- schema.prisma # Database schema
|   `-- seed.ts # Database seed script
|-- public # Static files
|-- styles # Global styles
| `-- globals.css  # Global CSS
|-- types            # Global types
|-- utils            # Global utility functions
|-- validators       # Zod schema validations
|-- .env.example     # Environment variables example
|-- .gitignore      # Git ignore rules
|-- components.json  # Components configuration
|-- eslint.config.mjs # ESLint configuration
|-- middleware.ts    # Edge middleware
|-- next-env.d.ts   # Next.js types
|-- next.config.ts  # Next.js configuration
|-- package.json    # Project dependencies
|-- paths.ts        # Route definitions
|-- postcss.config.mjs # PostCSS configuration
|-- README.md       # Project documentation
|-- tailwind.config.ts # TailwindCSS configuration
`-- tsconfig.json # TypeScript configuration
