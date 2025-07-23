import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[90vh] flex items-center text-white my-5"
        style={{
          backgroundImage: "url('/hero-img.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative px-6 md:px-20 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Find the Right Talent. Right Now.
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Connect with skilled freelancers and student-led startups to bring
            your vision to life — flexible, fast, and on your terms.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button size="lg">Get Started</Button>
            <Button variant="secondary">Browse Talent</Button>
          </div>
          <div className="mt-10 text-sm text-gray-300">
            <span className="inline-block mr-4">Design</span>
            <span className="inline-block mr-4">Web Development</span>
            <span className="inline-block mr-4">Marketing</span>
            <span className="inline-block mr-4">AI Chatbots</span>
            <span className="inline-block mr-4">Mobile Apps</span>
            <span className="inline-block">and more...</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From idea to execution, we make it simple to start building with
            vetted talent.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Post a Job",
              desc: "Describe your idea or task. We'll help you define the scope.",
              icon: "/icons/post.svg",
            },
            {
              title: "Get Matched",
              desc: "Our system connects you with ideal freelancers or teams.",
              icon: "/icons/match.svg",
            },
            {
              title: "Build Together",
              desc: "Chat, share files, and collaborate — all in one platform.",
              icon: "/icons/build.svg",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-xl hover:shadow-lg transition-all"
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={64}
                height={64}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#1f2937] to-[#111827] text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Build Something Great?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Create your free account and connect with the right talent today.
        </p>
        <Button size="lg">Join Now</Button>
      </section>
    </main>
  );
}
