/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TNIDkzQWWaF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function FeatureSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Discover Your Desires</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock the Secrets of Love</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our mobile app helps you uncover your deepest desires and find the perfect partner to fulfill them.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Desire Mapping</h3>
              <p className="text-muted-foreground">
                Explore your innermost desires and uncover the hidden needs that drive your relationships.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <CompassIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Compatibility Matching</h3>
              <p className="text-muted-foreground">
                Find your perfect match by connecting with others who share your deepest desires and values.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="bg-primary rounded-md p-3 flex items-center justify-center">
                <SparkleIcon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Relationship Insights</h3>
              <p className="text-muted-foreground">
                Gain personalized insights to deepen your connections and cultivate the love you deserve.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  function CompassIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }
  
  
  function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
  
  
  function SparkleIcon(props: React.SVGProps<SVGSVGElement>) {
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
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    )
  }