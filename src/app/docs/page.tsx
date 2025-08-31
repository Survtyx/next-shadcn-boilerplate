import fs from "fs"
import path from "path"

import MarkdownContent from "@/components/MarkdownContent"

export default function Docs() {
  const readmePath = path.join(process.cwd(), "README.md")
  const content = fs.readFileSync(readmePath, "utf8")

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Documentation
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-700 dark:text-gray-300">
              Everything you need to know about SEO Next.js Starter
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <MarkdownContent content={content} />
          </div>
        </div>
      </section>
    </main>
  )
}
