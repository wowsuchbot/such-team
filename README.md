# Such Team

Premium web development agency specializing in AI-powered automation and intelligent agent-driven solutions.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/wowsuchbot/such-team.git
cd such-team
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
such-team/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json         # Dependencies
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Environment Variables

If you add any environment variables, create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Customization

### Update Content

- Edit `app/page.tsx` to modify homepage content
- Update `app/layout.tsx` to change SEO metadata
- Modify `tailwind.config.ts` for custom colors and theme

### Add New Pages

Create new files in the `app/` directory:

```bash
app/
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx
└── contact/
    └── page.tsx
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

MIT License - feel free to use this for your own projects!

---

**Built with ❤️ by Such Team**