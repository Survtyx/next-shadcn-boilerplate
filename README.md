# Next.js Shadcn UI Boilerplate

## Overview

This project is a robust and feature-rich boilerplate for Next.js applications, integrating the powerful Shadcn UI component library. It's designed to jumpstart your development process, providing a solid foundation for building modern, responsive, and accessible web applications.

## Features

- **Next.js 14+**: Utilizing the latest features of Next.js for optimal performance and developer experience.
- **TypeScript**: Full TypeScript support for enhanced code quality and developer productivity.
- **Shadcn UI**: Pre-configured with a beautiful and customizable UI component library.
- **Tailwind CSS**: Integrated for rapid and responsive styling.
- **Dark Mode**: Built-in dark mode support with easy toggling.
- **ESLint & Prettier**: Configured for consistent code style and quality.
- **Customizable Theme**: Easy theme customization through Tailwind CSS.
- **Responsive Design**: Mobile-first approach ensuring great looks on all devices.
- **Accessibility**: Built with accessibility in mind, following best practices.
- **SEO Optimized**: Basic SEO setup included.

## Getting Started

1. Clone the repository:

   ```
   git clone https://github.com/Survtyx/next-shadcn-boilerplate.git
   ```

2. Install dependencies:

   ```
   cd next-shadcn-boilerplate
   pnpm install
   ```

3. Set up your environment variables:
   Copy `.env.example` to `.env.local` and fill in your values.

4. Run the development server:

   ```
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src`: Main source directory
  - `/app`: Next.js app router pages
  - `/components`: Reusable React components
  - `/config`: Configuration files
  - `/lib`: Utility functions and helpers
  - `/styles`: Global styles and Tailwind CSS config
  - `/types`: TypeScript type definitions

## Customization

### Theming

Modify the `tailwind.config.js` file to customize your theme colors, fonts, and other design tokens.

### Components

Add or modify components in the `/src/components` directory. Shadcn UI components can be easily customized to fit your needs.

### Layout

Edit the main layout in `/src/app/layout.tsx` to change the overall structure of your app.

## Deployment

This project is ready to be deployed on Vercel or any other Next.js-compatible hosting platform. Simply connect your repository and deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
