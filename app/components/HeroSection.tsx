/**
 * v0 by Vercel.
 * @see https://v0.dev/t/egXyFPfauIY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Image from 'next/image'

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(0)

  const handleSwipe = (direction: "left" | "right") => {
    setActiveCard((prevCard) => (prevCard === 0 ? 1 : 0))
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Discover Your Desires</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Lila: The App for Deeper Connections</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lila is a revolutionary mobile app that helps you and your partner explore each others desires, build
                deeper connections, and cultivate more fulfilling relationships.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Personalized desire profiles for you and your partner
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Guided exercises to foster mutual understanding and intimacy
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Discreet and secure communication tools to share your thoughts
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download Lila
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-[500px]">
            <Card
              className={`absolute w-full max-w-sm transition-all duration-500 ${
                activeCard === 0 ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            >
              <CardContent className="p-0">
                <Image
                  src="/bed_placeholder.png"
                  alt="Bed placeholder"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4 space-y-2">
                  <CardTitle>Explore Your Desires</CardTitle>
                  <CardDescription>
                    Discover new ways to connect and find fulfillment in your intimate relationships. Our app provides a
                    safe, inclusive space to explore your desires.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => handleSwipe("left")}>
                      Sounds wild
                    </Button>
                    <Button variant="outline" onClick={() => handleSwipe("right")}>
                      Nah no way
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card
              className={`absolute w-full max-w-sm transition-all duration-500 ${
                activeCard === 1 ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
              }`}
            >
              <CardContent className="p-0">
                <Image
                  src="/bed_placeholder.png"
                  alt="Bed placeholder"
                  width={400}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4 space-y-2">
                  <CardTitle>Explore Your Desires</CardTitle>
                  <CardDescription>
                    Discover new ways to connect and find fulfillment in your intimate relationships. Our app provides a
                    safe, inclusive space to explore your desires.
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => handleSwipe("left")}>
                      Sounds wild
                    </Button>
                    <Button variant="outline" onClick={() => handleSwipe("right")}>
                      Nah no way
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}