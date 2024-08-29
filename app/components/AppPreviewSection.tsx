/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wVgrqpRcQjm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image'

export default function AppPreviewSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="flex justify-center">
            <div className="relative w-[290px] h-[580px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black">
              <Image
                src="/Connection_open.png"
                alt="Lila App Screenshot"
                width={262}
                height={552}
                className="rounded-[44px]"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Discover Your Desires with Lila</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Lila is a mobile app that helps you and your partner explore your desires and deepen your love
                relationship.
              </p>
            </div>
            <ul className="grid gap-4">
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Personalized Desire Profiles</h4>
                  <p className="text-muted-foreground">
                    Discover your unique desires and preferences through interactive quizzes and assessments.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Couples Compatibility</h4>
                  <p className="text-muted-foreground">
                    Explore your compatibility with your partner and receive personalized recommendations to enhance your
                    intimacy.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Guided Intimacy Exercises</h4>
                  <p className="text-muted-foreground">
                    Access a library of interactive exercises and activities to deepen your emotional and physical
                    connection.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Discreet and Secure</h4>
                  <p className="text-muted-foreground">
                    Lila prioritizes your privacy and security, ensuring your personal information and activities remain
                    confidential.
                  </p>
                </div>
              </li>
            </ul>
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