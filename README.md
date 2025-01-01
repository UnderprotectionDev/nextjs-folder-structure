### Next.js Project Structure

```

├── actions                     # Server-side actions for API routes
├── app                         # Next.js App Router directory
│   ├── (auth)                  # Group for private authentication routes
│   │   ├── sign-in             # Sign-in page component
│   │   └── sign-up             # Sign-up page component
│   ├── (root)                  # Root group for the application
│   │   ├── (home)              # Home routes under root
│   │   │   ├── page.tsx        # Home page component
│   │   │   └── layout.tsx      # Layout for home routes
│   ├── api                     # API route handlers
│   ├── favicon.ico             # Website favicon
│   ├── layout.tsx              # Root layout component
│   ├── loading.tsx             # Loading component for navigation
│   └── not-found.tsx           # 404 page component
├── components                  # Global components used throughout the app
│   ├── common                  # Commonly used components (Header, Footer, etc.)
│   ├── page-name               # Components specific to certain pages
│   ├── shared                  # Reusable shared components
│   └── ui                      # Atomic UI components like buttons and tags
├── constants                   # Global constant values used in the app
├── db                          # Database utilities and configurations
│   ├── data.ts                 # Seed data for the database
│   ├── prisma.ts               # Prisma client setup
│   └── seed.ts                 # Database seeding scripts
├── hooks                       # Custom React hooks for the app
├── lib                         # Third-party libraries and utility functions
│   └── utils.ts                # Utility functions for the app
├── prisma                      # Prisma configuration and data model
│   ├── schema.prisma           # Prisma schema defining the data model
├── public                      # Static assets like images, fonts, and icons
│   ├── fonts                   # Font files used in the app
│   ├── gif                     # GIF files used in the app
│   ├── icons                   # Icon files used in the app
│   └── images                  # Image files used in the app
├── styles                      # Global styles for the app
│   └── globals.css             # Global CSS styles
├── types                       # Global TypeScript type definitions
├── utils                       # Additional utility functions
├── validators                  # Zod schemas for data validation
├── .env                        # Environment variables file
├── .gitignore                  # Specifies files to ignore in Git
├── components.json             # Configuration for components
├── eslint.config.mjs           # ESLint configuration file
├── middleware.ts               # Edge middleware for request handling
├── next.config.ts              # Next.js configuration file
├── package.json                # Project dependencies and scripts
├── paths.ts                    # Route definitions for the app
├── postcss.config.mjs          # PostCSS configuration file
├── README.md                   # Project documentation and instructions
├── tailwind.config.ts          # Tailwind CSS configuration file
└── tsconfig.json               # TypeScript configuration file

```
