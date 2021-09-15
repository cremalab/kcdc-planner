import { SessionData } from "./types";

export const scheduleDates: SessionData = {
  "Thursday, 9/16/2021": {
    "7:30am": {
      talks: [],
      breakfast: true
    },
    "8:45am": {
      talks: [
        {
          title: "Migrate from .NET Framework to .NET 5 or 6",
          presenter: `Jonathan "J." Tower`,
          summary: `Many legacy web applications exist that were written in a version of .NET Framework. In many cases, these codebases can be upgraded to .NET 5 or 6 without too much trouble, and unlock a lot of performance improvements, features, and scalability that don't exist in .NET Framework.

            In this session, you will learn from my years of experience helping clients upgrade their ASP.NET applications to .NET Core, and now .NET 5 and 6. We'll go step-by-step through the process that we use, review some reasonable expectations you can have, and talk about the most common pitfalls of the upgrade process.
            
            Don't let your legacy app lag behind. Learn how to upgrade it to .NET 5 or 6 today and join the future of .NET development.`,
          room: "2215-A",
          category: ".Net",
          level: "Intermediate"
        },
        {
          title:
            "A Midsummer Night's Stream: Streaming Video with Azure Media Services",
          presenter: "David Giard",
          summary:
            "Azure Media Services provides a scalable, cloud-based solution for storing, managing, and sharing multimedia online. In this presentation, you will learn how to use AMS to publish and share videos, stream live content, and use Artificial Intelligence to analyze the content of your videos.",
          room: "2215-B",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "The Next Decade of Software Development",
          presenter: "Richard Campbell",
          summary:
            "It's 2021 - and besides a pandemic, we're in a new decade! How will software development evolve in the 2020s? Join Richard Campbell as he explores the landscape of technology that will have a huge impact on development over the next ten years. What new devices are coming? Will Artificial Intelligence take over everything? How will people connect to the web in the next ten years? And what about Quantum Computing? All these topics and more will shape our future!",
          room: "2215-C",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "Micro-services for a Billion people",
          presenter: "Tejas Chopra",
          summary: `The food wastage in India is 70 tonnes per year, and there is mismanagement at several layers. Approximately 20-30% of the wastage happens in the last mile, between wholesale traders, and retail mom-and-pop stores. Is there something we can do about food wastage?

            This was the problem statement I attempted to solve as a first engineering hire at a startup. Our customers were 12.8 million retail owners that deal in FMCG (Fast-moving consumer goods, such as food grains, tooth paste, etc.). The goal was to develop a platform for retail traders (mom and pop shop owners / small and medium business owners) to buy FMCG products from wholesale traders using an Android app.
            
            We were attacking a deeply entrenched business practice to help solve a societal goal. For a section of the population which is not very well versed with smartphones and technology, the user experience had to be designed from the ground up to be multi-lingual, fungible, unstructured, and relevant. In this talk, I cover how we went about iterating the solution from a simple SMS based system to a full fledged app backed by micro-services. Having a micro-service architecture provided us the agility to experiment and iterate quickly, and we were able to push out changes much faster, and help solve wastage problems even sooner.
            
            I will discuss the several problems we faced in this segment with regards to unstructured data, and how our data models had to adapt. We used cloud services extensively, so I will also cover how different pieces came together in a cogent form to build better experience for our customers.
            
            After having worked in bigger companies on software projects that scale to millions of devices, this was a unique challenge for me, and something I am very proud of. I would like to share my experience in building empathetic software for the masses.`,
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title: "Lessons learned from enterprise cloud security programs",
          presenter: "Karl Ots",
          summary:
            "In the on-premises world, cybersecurity risks were limited to your organization’s network perimeter. In the era of cloud computing, both the impact and likelihood of potential risks are significantly higher. With the corresponding rise of DevOps methodology, security is now the responsibility of everyone who are part of the application development lifecycle, not just security specialists. In this session, I will present my findings on methods and processes to build the cloud security framework that make sense for both your business and your developers. The session is based on real-life experiences from implementing cloud security programs in some of the largest enterprises in the world.",
          room: "2202",
          category: "Security",
          level: "Introductory"
        },
        {
          title: "Testing In Production, The Right Way",
          presenter: "Darren Cauthon",
          summary:
            "There is a stigma against testing in production, and rightly so. But with a different perspective, live users in production are like test cases continually testing your code - whether you capture the results of those test cases or not. In this session, we will look at the best ways to utilize the tests being run in production to supplement traditional software testing and build more reliable applications.",
          room: "2203",
          category: "Testing and QA",
          level: "Introductory"
        },
        {
          title: "DevOps - Philosophy vs Practice",
          presenter: "PJ Hagerty",
          summary: `Many of our conversations on DevOps revolve around tools and practices - but very few address the where the two meet.

            We can talk about monitoring, analytics, alerting, on-call and the philosophies surrounding them, but how do we bring the two worlds together?`,
          room: "2204",
          category: "DevOps",
          level: "Introductory"
        },
        {
          title: "To Java 17 and Beyond!",
          presenter: "Billy Korando",
          summary: `The next version of Java, 17, will be releasing soon and will mark a major point of change in the Java community as many organizations migrate to the latest Java runtime. So what has changed in Java if you are still primarily writing in Java 11? Or even Java 8?

            In this presentation we will look at some of the key changes that have been added to Java post-8. The large changes; the Module System and Records, quality of life improvements; var, text blocks, pattern matching, and the many performance and runtime improvements. We will finish the presentation with a brief look ahead to some of the changes that will be coming to Java in the near future and why Java’s future is bright.`,
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: "Refactoring React",
          presenter: "Sam Thompson",
          summary:
            "Tell me if you've heard this one before: React is just JavaScript. It's kinda true, but it turns out you can make an awfully big mess with just JavaScript. We'll explore common React pitfalls and strategies to avoid them so you can write React components that you won't regret later.",
          room: "2206",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Building a Design system",
          presenter: "Burton Smith",
          summary:
            "Design systems have been generating a lot of hype lately and rightfully so! They can provide better user experiences, promote best practices, and help you develop products faster. But, before you open your favorite design tool or code editor to start throwing things together, there are some things you need to identify and document to prevent issues.",
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title:
            "Think Global: A Guide to High Performing Global Development Teams",
          presenter: "Avindra Fernando",
          summary: `We live in a world where our colleagues may not sit next to us, or be in the same city, or even in the same country. A diverse workforce with varied perspectives, help companies to remain competitive today.

            But, geographically dispersed teams also come with a set of challenges. Managing development teams is a hard enough task even when the teams are co-located. When the team members come from different parts of the world, it makes it even harder. Communication may deteriorate, misunderstandings may occur, teams may stop trusting each other.
            
            Over the years, I have worked with several global development teams. We have experienced many challenges during our interactions and have figured out ways to overcome them.
            
            In this talk, I would like to share various approaches that I have used in my career to build great relationships with global colleagues. This session will enable you to be a part of a high performing team irrespective of the geographical and cultural differences.`,
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title:
            "Responsible AI in Practice: Deliver Trust in Artificial Intelligence Solutions",
          presenter: "Sweta Sinha",
          summary:
            "AI has been a key driver in innovation in every industry. Organizations have ramped up their effort on leveraging AI to gain a competitive advantage. However, AI solutions come with their own challenges and risk, particularly in regulated industries. There have been numerous instances when AI introduced bias. Organizations must use a balanced approach to accelerating the adoption of AI and prioritize AI governance to ensure trust in the AI system. While the AI regulation landscape is still evolving, now is the time for organizations to start taking steps to understand and mitigate AI risks. A responsible AI framework provides guidelines around AI governance for building fair, transparent, ethical, and accountable AI solutions. In this session you will learn about how organizations can follow Responsible AI guidelines and operationalize trust in AI solutions by incorporating AI governance throughout the AI/ML lifecycle.",
          room: "2209",
          category: "Data Science",
          level: "Intermediate"
        },
        {
          title: "5 Things I've Automated Using the Jamstack",
          presenter: "James Quick",
          summary: `The evolution of the Jamstack has enabled developers to build applications faster than ever before. Selfishly, how can you leverage the power of the Jamstack to benefit yourself? The answer...automation!

            In this talk, I'll walk through 5 different workflows that I have automated using the Jamstack. Along the way, we'll cover how to combine some hot Jamstack topics and technologies like Headless CMSs, Serverless Functions, and more! Don't miss out on this opportunity to have the Jamstack do the work for you.`,
          room: "2210",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Make the Work Easy - Culture Shifting through Learning",
          presenter: "Joel Tosi",
          summary: `Culture - everyone talks about it, wants a better work culture. But how, how do you get it?

            In this talk, we share one simple way - make the work easy. Make it easy for people to do great work and have pride in what they do. Worst case scenario, people are just happier at work ;)`,
          room: "2211",
          category: "Project Management",
          level: "Intermediate"
        },
        {
          title: "Beginner UI & Angular",
          presenter: "Alyssa Nicoll",
          summary: `A talk for UI and Angular beginners alike. Let's pull down the Tour of Heroes app (found throughout the Angular docs) and give it a UI upgrade!

            - Dive into the Tour of Heroes demo application like never before!
            - Learn about integrating SASS into your Angular Project.
            - Learn how to include a Component Library into your Project. (We will be using Kendo UI but the principles to implement a UI Library are pretty universal.)
            - Play around with customizing styles and writing custom CSS from scratch.
            - Go over UI/UX principles and implement them on the fly.
            - Talk about some accessibility tips along the way.`,
          room: "2214",
          category: "UI/UI and Design",
          level: "Introductory"
        }
      ]
    },
    "10:00am": {
      talks: [
        {
          title:
            "Refactoring Background Services to Azure Logic Apps and Azure Functions",
          presenter: "Kevin Griffin",
          summary: `How do you handle "background tasks" in your applications? Maybe you build a cronjob or a Windows service to execute some code on a schedule? Perhaps you have a background task in your web application?

            No matter what you're doing, you are probably building infrastructure to support these background tasks. That can be costly, unreliable, and difficult to debug.
            
            In this presentation, you will be offered an alternative approach to building background services by taking advantage of Azure Logic Apps and Azure Functions. You see real-world scenarios that were implemented and that are running right now!`,
          room: "2215-A",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "Transitioning to .NET MAUI",
          presenter: "Mitchel Sellers",
          summary:
            "Xamarin has provided years of amazing mobile support, .NET MAUI adds a whole new suite of features and improves the developer experience greatly. Transitioning from Xamarin to MAUI is easy to accomplish, but can be met with pitfalls and complexity that could cause troubles later. This session explores the transition/migration process from Xamarin -> MAUI with an emphasis on discussing the Required and Optional portions of migration. It is often the optional migration requirements that result in the most wasted time and future maintenance issues. We will review various types of migrations, efficiencies that can be realized and action plans for developers to fully leverage all that MAUI has to offer without experiencing unnecessary large re-writers.",
          room: "2215-B",
          category: "Mobile",
          level: "Intermediate"
        },
        {
          title: "Effective React State: 7 Years of Lessons Learned",
          presenter: "Cory House",
          summary:
            "Managing React state is hard. Why? Because there are so many options to consider! Local state, reducers, custom hooks, context, and over a dozen third-party libraries. In this session, we’ll explore the lessons I’ve learned from managing complex state in React over the last seven years. I’ll share my strategy for categorizing React state including local, server, global, derived and many more. After this session, you’ll understand how to identify different types of state, where to declare state, and how to choose between these different options.",
          room: "2215-C",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Micro frontends: Why you should consider them",
          presenter: "Cory Gideon",
          summary:
            "There has been a rise in micro services in modern development, but lots of the time the front end is still being developed as a monolithic application. In this session, we will go over the benefits, drawbacks, and some design patterns for implementing Micro Frontends in your tech stack.",
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title: "Living on the Edge",
          presenter: "Carey Payette",
          summary:
            "In this session we will take a deep dive into IoT Edge. We will review scenarios where IoT Edge makes sense and identify the different roles this device may play in an overall IoT Solution. We will review current IoT Edge modules available in the Azure Marketplace, and learn to implement a custom module. We will finish this session with an overview of how deployments for IoT Edge devices are handled from the IoT Hub.",
          room: "2202",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "The Human Side to Testing",
          presenter: "Amanda Perkins",
          summary:
            "We’re known for breaking things and testing the limits, and patience, of our team and our systems. We advocate for quality in all things and we advocate for the end user. But, none of us actually think about how our varied backgrounds influence what we do and how we test. In this session we’ll explore how our previous (and current) experiences subconsciously affect our testing and how to bring those experiences to the forefront in order to be better testers all around.",
          room: "2203",
          category: "Testing and QA",
          level: "Intermediate"
        },
        {
          title: "The Seven DevOps Sins",
          presenter: "Tom Cudd",
          summary: `An effective DevOps culture positively contributes to the success of an organization. Getting your team to the necessary capabilities requires avoiding the mistakes that can derail your progress. Here are common erroneous statements you might hear in your DevOps journey:

            • "Let's Rebrand the Ops Team!"
            • "DevOps is going to save us money!"
            • "We need our whole organization to do DevOps!"
            • "DevOps and ITIL are incompatible!"
            • "DevOps sells itself!"
            • "We don't need to involve team X!"
            • "Everything is going to get better right away!"
            
            This session provides responses to these statements that will help move you in the right direction and avoid the pitfalls that can slow your momentum towards becoming a great DevOps-focused organization.`,
          room: "2204",
          category: "DevOps",
          level: "Introductory"
        },
        {
          title:
            "Game of Streams: How to Tame & Get the Most from your Messaging Platforms 🐉",
          presenter: "Mark Heckler",
          summary: `Most mission-critical systems have distributed elements or are entirely distributed, resulting in a number of challenges: performance, scalability, reliability, resilience…​the eight fallacies of distributed computing are alive and well!

            Messaging platforms are often used to solve these problems and increase the "ilities", but they don’t come without a few complexities of their own. Come to this session to learn not only how to use open source solutions like Spring Cloud Stream, RabbitMQ, & Apache Kafka to maximize your distributed systems' capabilities while minimizing complexity…​but also how to really use them! There be dragons when dealing with messaging platforms; the presenter will show you several ways to tame and harness them for maximum fire, maximum altitude. All examples will be coded live & in real-time!`,
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: "The State of Modern APIs - Comparing GraphQL, REST, and gRPC",
          presenter: "Spencer Schneidenbach",
          summary: `APIs are a huge part of our connected world - they drive our apps and are the points of integration between applications. There are a number of technologies available that have emerged as major players in the API space, from REST to GraphQL to gRPC - but with them comes a lot of hype, dogma, and misinformation. How do you best evaluate which technology to use when building out a new API?

            In this session, Spencer will compare and contrast three major API technology options, their ecosystems, and their adoption and learning curves. We'll discuss each technologies' strengths and optimal use cases, along with the weaknesses/challenges found with adopting any of the technologies.
            
            May the best API win! (Hint: there isn't one.)`,
          room: "2206",
          category: ".NET",
          level: "Introductory"
        },
        {
          title: `The "Guilded" Age: How a UX Guild can transform design at your company`,
          presenter: "Ash Banaszek",
          summary: `If you have a User eXperience team that feels stretched too thin at your company, you are NOT alone. UX Guilds grew out of necessity to meet a growing demand for software that is useful, user friendly, and beautiful to boot. These guilds are led by UX designers and researchers that train and evangelize developers, business analysts, quality analysts, project managers, and more into UX practices and techniques. This often sounds scary to UXers, often wondering: "Am I going to give away the farm by teaching the tricks of my trade?" "Are devs and others going to think they know it all now?" "Won't people take away my work?"
            The answers are "no", "no", and "sort of, but in a good way." In this session you will learn what a UX guild is, how it benefits UX overall, and how to implement a guild in your company. I'll also be sharing lessons learned from our ongoing guild implementation.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Intermediate"
        },
        {
          title: "Recruiters Suck. Use them.",
          presenter: "Taylor Desseyn",
          summary:
            "In today’s tech market there are more recruiters than JavaScript libraries. And just like JavaScript libraries, it’s hard to pick a good recruiter that that won’t burn out in 6 months. In this open forum talk, I will be answering any and all questions you have always wanted to ask us. Like how do we price positions? What do I look for when working with a recruiter? I will also give tips to everyone like how to write a good resume, are cover letters still relevant, how do I approach a job hunt, and what can make you the most attractive as a candidate in the interview process. This talk is geared for the recent software school grad to the Architect who has recently found themselves back on the job market. I look forward to answering all your questions!",
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Agile Black Holes and Revelations",
          presenter: "Sarah Harper",
          summary: `Do you have a work stage in your process where things get “stuck”? While we typically look for a process problem, what if I told you it’s likely that your team behavior is the real culprit?

            All teams will eventually experience challenges with how work moves through their system. These problems can often manifest as a “blocked” column creeping into your flow, or even the well-meaning “Waiting for Reporter Input” limbo.
            
            These problematic stages are sucking the work in but nothing comes out. They begin to look and feel like black holes. Agile Black Holes are detrimental to your process and your team’s morale, but they are often hard to spot until they become supermassive giants. Unlike the celestial version, once you detect the Agile Black Hole in your process, you can understand the cause and escape.
            
            Have you fallen into an Agile Black Hole? How can you prevent black holes from forming in your process? More often than not, the root cause of the black hole is not the process, but the culture of the team. You’ll need to dig to the root cause of the negative team behaviors to understand how to change the team culture and prevent the agile black hole. Join me and become equipped to avoid the madness of the Agile Black Hole. You’ll also see what Cerner did to address one of our “black holes” and what we’ve learned as a result.
            
            This presentation is for anyone wanting to improve the team culture by understanding the cognitive, psychological, and UI design concepts for why work slows.`,
          room: "2209",
          category: "Project Management",
          level: "Intermediate"
        },
        {
          title: "Serverless .NET on AWS is not Terrible",
          presenter: "Garo Yeriazarian",
          summary:
            "When you think of running your .NET code in the cloud, you immediately think of Azure, but AWS has complete support for .NET as well! .NET 5 has made (and .NET 6 is making) significant improvements in the performance of .NET for serverless applications, making it possible to bring the developer-friendly experience of C# to cloud-native environments. In this session, we’ll walk through a C# serverless application that uses the most common AWS services, then talk about how to find support for working with AWS in .NET, and explore some deployment options. Knowledge in AWS is not required, and the basic concepts will be introduced as well. This session should clear at least some of your doubts about working in AWS and build your confidence in taking your learning journey further and taking advantage of all the great services that AWS has to offer.",
          room: "2210",
          category: ".NET",
          level: "Introductory"
        },
        {
          title: "The AI Developer's Toolkit",
          presenter: "Matthew Renze",
          summary: `Artificial Intelligence is everywhere! AI is beginning to transform our products, our companies, and our world. However, most software developers have not yet added these modern data-driven AI tools to their professional toolkit.

            In this session, you’ll learn about all of the tools in the AI developer’s toolkit. We’ll survey a wide variety of tools for performing automated tasks with tables, text, audio, images, video, and more.
            
            You’ll learn how to use machine learning, deep learning, and reinforcement learning to solve a variety of real-world problems. In addition, you’ll learn how to compose these models together to build modular AI applications and cyber-physical systems.
            
            If you’re looking for a quick survey of everything that you can currently do with state-of-the-art AI, without getting into all of the math, code, or vendor specifics, then this session is right for you!`,
          room: "2211",
          category: "Data Science",
          level: "Introductory"
        },
        {
          title: "How to Break Down Information Silos and Why it Matters",
          presenter: "Katie Wiersgalla",
          summary: `Many organizations are seeking ways to improve focus and efficiency of their workers. Some prescribe to the idea that isolating groups will allow them to focus on their own problems, projects and lead them to the most productive outcomes.

            However, creating these information silos can be counterproductive to your team’s productivity. Breaking down information silos between teams can unlock new innovation and allow the team to benefit from collaborative problem solving, which can unblock solutions faster. In this talk, I discuss how you can break down information silos and why that matters.`,
          room: "2214",
          category: "Human Skills",
          level: "Introductory"
        }
      ]
    },
    "11:15am": {
      talks: [
        {
          title: "Vue 3: A Maturation of the Platform",
          presenter: "Shawn Wildermuth",
          summary:
            "Vue 3 is here (or almost here) and it's great. While it's not a huge shift in tone, it has some great features that you'll want to take advantage of. In this talk, Shawn Wildermuth will walk through a new Vue 3 project in TypeScript with the Vue CLI.",
          room: "2215-A",
          category: "JavaScript",
          level: "Introductory"
        },
        {
          title: "Watch This Talk Before You Go Go",
          presenter: "John Reese",
          summary: `Curious about the Go programming language, but don't know where to start? In this talk you'll learn all about Go by comparing it to programming languages you already know and love!

            Go is more than just learning new syntax. The language takes a fundamentally different approach to solve many problems that we as developers encounter everyday. Take package management for example, you may already be familiar with solutions like NuGet for .NET and npm for Node, but did you know Go just uses the source code repository? This approach not only simplifies how developers can share code with one another, but still facilitates immutability through Go modules. Some languages can go through a process called minification which replaces long variable and function names with shorter ones to reduce the overall footprint of the application, but Go simply ignores unused code right in its toolchain!
            
            By the end of this talk, you'll walk away with knowing what makes Go special by leveraging knowledge you already know, and why Go might be your new favorite language.`,
          room: "2215-B",
          category: "Other Languages",
          level: "Introductory"
        },
        {
          title: "Mobile & Desktop Apps with Blazor!",
          presenter: "Sam Basu",
          summary: `With Blazor, developers get to build modern web apps with C#/.NET, running on server or fully client-side through WebAssembly. But Blazor’s flexibility can also be leveraged to target mobile & desktop form factors.

            Blazor is very suitable for writing Progressive Web Apps (PWAs) that are excellent web citizens on mobile devices. Blazor can also be used to build truly native or hybrid cross-platform mobile apps, thus inviting .NET web developers into mobile land. Powered by .NET MAUI under the covers, developers get to benefit from native mobile UI & performance, while writing Blazor syntax for the UI abstraction. For desktop, Blazor apps can be wrapped inside Electron-like shells, but modern runtimes demand more lightweight WebViews – Blazor Hybrid is here to power desktop apps on MacOS & Windows.
            
            The familiarity of Blazor component model, Razor rendering engine, CSS styling & extensibility can now be applied towards building mobile & desktop apps, all the while sharing code with web. You game?`,
          room: "2215-C",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title:
            "The Problems Micro Frontends Won't Solve That No One Wants to Talk About",
          presenter: "Jennifer Wadella",
          summary: `Everyone wants to ship more software faster, and following the lead of the MicroServices craze the front-end community has begun to reach for Micro Frontends as a silver bullet solution. Micro Frontends promise large teams the ability to independently ship pieces of applications without code collisions, bug creation, that can be team-agnostic, and with Webpack 5 leaning in to offer Module Federation, this seems to be the way of the future.

            But what problems aren't solved by Micro Frontends? There is a large gap in what large complex teams need to ship better software and what Micro Frontends are able to provide ... and that gap is the basis of this talk. We'll discuss what Micro Frontends are, approaches and tools to using this architecture pattern, and discuss the consequences that arise that no on seems to want to talk about.`,
          room: "2201",
          category: "Architecture",
          level: "Intermediate"
        },
        {
          title: "Blasting Browser Security with Extensions",
          presenter: "Micah Silverman",
          summary: `Elevator Pitch
            Multi-platform browser extensions are easier to write than ever, can have great authority to examine and alter HTTP requests and responses, and are shockingly easy to get listed on the official respective browser stores. In this talk Micah builds an over-powered, multi-platform extension.
            
            Description
            In this talk, Micah gives an overview of how browser extensions work and the web-ext tool for creating extensions that work in both Google Chrome and Mozilla Firefox. He then shows how to debug and test extensions locally as well as how to package them up for distribution. The talk culminates with a real-time attempt to get an extension with an over-powered list of permissions listed on the Chrome Web Store and the Firefox Browser Add-ons Store.`,
          room: "2202",
          category: "Security",
          level: "Intermediate"
        },
        {
          title: "Domain-Driven Refactoring",
          presenter: "Jimmy Bogard",
          summary: `Books, workshops, storming and more, all build up an idealized domain model. All describe great techniques for domain-driven greenfield applications. But what about the code we have? How can we take what's already built, and move it towards a better, more cohesive design?

            In this session, we'll look at anemic, procedural, boring code and examine code smells that can point us in the right direction. We'll also look at standard design patterns for more complex behaviors and models, and how to recognize when (and when not) to apply them. Finally, we'll cover how to safely apply refactoring techniques to achieve our domain-driven model nirvana.`,
          room: "2203",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "Advanced DevOps Governance with Terraform",
          presenter: "Jim Counts",
          summary:
            "Infrastructure-as-Code tools, like Terraform, can supercharge your team's ability to respond to ever-changing business needs. But as multiple teams begin to collaborate across a large organization, managing terraform workspaces and related security controls introduce overhead that can start to slow you down. In this session, you'll learn how to automate this configuration--using Terraform itself!",
          room: "2204",
          category: "DevOps",
          level: "Advanced"
        },
        {
          title: "Enterprise Cloud Patterns for Java Devs",
          presenter: "Pratik Patel",
          summary: `The Cloud has changed the way developers approach building applications. Whether you’re building Monoliths in the Cloud, Microservices, or Cloud Functions, the keys to successful development, deployment, and operations are can be challenging. How do Enterprise developers stay on top of this complexity? In this session, we’ll discuss Cloud Native Architecture, and how specifically Enterprise developers, can think and build systems for the Cloud. We will discuss these topics in some details, and the Design and Implementation patterns including:
            * Ambassador Pattern
            * Anti Corruption Pattern
            * Gateway Aggregation Pattern
            * BFF Pattern
            * Gateway Routing Pattern`,
          room: "2205",
          category: "Java",
          level: "Intermediate"
        },
        {
          title: "Compression, Dedupe, Encryption Conundrums in Cloud",
          presenter: "Tejas Chopra",
          summary: `Cloud storage footprint is in exabytes and exponentially growing and companies pay billions of dollars to store and retrieve data. In this talk, we will cover some of the space and time optimizations, which have historically been applied to on-premise file storage, and how they would be applied to objects stored in Cloud

            Deduplication and compression are techniques that have been traditionally used to reduce the amount of storage used by applications. Data encryption is table stakes for any remote storage offering and today, we have client-side and server-side encryption support by Cloud providers.
            
            Combining compression, encryption, and deduplication for object stores in Cloud is challenging due to the nature of overwrites and versioning, but the right strategy can save millions for an organization. We will cover some strategies for employing these techniques depending on whether an organization prefers client side or server side encryption, and discuss online and offline deduplication of objects.
            Companies such as Box, and Netflix, employ a subset of these techniques to reduce their cloud footprint and provide agility in their cloud operations.`,
          room: "2206",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "Effective Data Visualization",
          presenter: "David Giard",
          summary: `We spend much of our time collecting and analyzing data. That data is only useful if it can be displayed in a meaningful, understandable way.

            Yale professor Edward Tufte presented many ideas on how to effectively present data to an audience or end user.
            
            In this session, I will explain some of Tufte's most important guidelines about data visualization and how you can apply those guidelines to your own data. You will learn what to include, what to remove, and what to avoid in your charts, graphs, maps and other images that represent data.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title: "From Trauma to Tech: Using a Person-Centered approach",
          presenter: "Bekah Hawrot Weigel",
          summary: `Tech can be so detached from people. We have users and developers and titles. And sometimes, we forget that there are human beings with complex lives behind those titles. This talk both acknowledges that and focuses on the importance of community, psychological safety, and being open to growing as part of every experience, as informed by my own experience with trauma and applying the person-centered approach.

            I'll start with my own journey through trauma and how that lead me to change careers and eventually start the Virtual Coffee developer community.
            
            We'll explore the four principles of a person-centered approach and how to apply them. Every team, workplace, and person has different needs; identifying these needs and considerations allows for a more informed and personal application of this approach.
            
            Through an understanding of this application, we can do a better job of avoiding gatekeeping, creating strong and supportive workplaces and communities, and allowing for growth.`,
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Building a culture around experimentation with A/B Testing",
          presenter: "Eric Groves",
          summary:
            "In software engineering, we know it is advantageous to deliver small pieces of functionality to validate your assumptions before building an entire product. As engineers, we often can think of several solutions to a problem, but how do we know which one is best? As we define experiments and run several A/B tests simultaneously, we are able to confidently ensure we are delivering value to our customers at Knock. In this session, we walk through how we set up our A/B tests at Knock for mobile and web (React and React Native), how we define an experiments success, and simple ways to encourage a similar culture of experimentation in your workplace.",
          room: "2209",
          category: "Project Management",
          level: "Introductory"
        },
        {
          title: "Kubernetes on AWS: Zero to hero",
          presenter: "Annie Talvasto",
          summary: `In this practical session, I will cut through the jargon and explain the basic concepts around Kubernetes on AWS, and introduce you to the different ways you can get the most out of them.

            If EKS is not familiar to you before the session, after it you will be running your own clusters with ease! The learning goal of the session is to get comfortable running Kubernetes on AWS and with the help of demos & practical examples you will from zero to hero in no time.`,
          room: "2210",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title: "Dungeons, Dragons, and Graph Databases",
          presenter: "Guy Royse",
          summary: `Are you an adventurer? Do you want gold? Experience? Levels? Of course you do! And where do you get these things? The dungeon, where else? That wonderful container of all things adventurous! But, unfortunately, dungeons aren't setup for the convenience of adventurers who wish to extract these fine things. It’s almost as if the dungeon master just made the dungeon up at random. And so you wander about and you get what you get.

            But you’re also a developer. You could build a database of all the rooms with their shiny and monstrous content. Then you could query it and find the optimal route to get the gold and the experience and the levels. But how would you model this data and write these queries? The rooms. The corridors. The monsters. The sparkling hoozits. That’s a lot of entities to relate to each other. And that’s gonna be a monster of a SQL query. Whoa–look at that JOIN! Better get my text editor ready.
            
            Or, you could use a graph database. A graph database allows you to model these relationships simply and intuitively with nodes and edges. Being schema-free, you can evolve your graph as you encounter new things such as traps or secret doors. And, using the Cypher query language, you can write elegant and easy to understand queries that find the best routes to get the stuff adventures desire most.
            
            In this talk, I’ll use the aforementioned example to introduce you to the concepts of graph databases. I’ll compare how to solve this problem with a relational database and how a graph database makes it easier. I’ll show you how to query and modify your graph. And, as no talk would be complete without a live demo, I’ll do it all using a real-time procedurally generated random dungeon (I am a dungeon master after all).
            
            So come, have a flagon of mead as you learn about graph databases, optimize your dungeon crawl, and equip another weapon in your quest for better software!`,
          room: "2211",
          category: "Data",
          level: "Introductory"
        },
        {
          title: "Collaborate Good Times, Come On!",
          presenter: "Katie Chance, Lauren Bandle",
          summary:
            "Overview of collaboration tools accessible for teams, facilitators, managers, and more! Learn how to promote remote collaboration, creativity, and teamwork.",
          room: "2214",
          category: "Human Skills",
          level: "Introductory"
        }
      ]
    },
    "12:00pm": {
      talks: [],
      lunch: true
    },
    "1:15pm": {
      talks: [
        {
          title: "Write Uno Time, Run Everywhere with the Uno Platform",
          presenter: "Joseph Guadagno",
          summary: `C# brings you the power to write apps on any platform, like Windows, Linux, and macOS. However, when it comes to building an application with a user interface, you usually must resort to the lowest common denominator, JavaScript, or multiple tools like Xamarin, Blazor, etc. Now you have a new option to build pixel-perfect user interfaces using C# and Windows Xaml. That option is the Uno Platform. The Uno Platform allows you to write your application in .NET C# and XAML using a single-codebase and execute it everywhere .NET runs – iOS, Android, Windows, macOS, Linux, and Web (via WebAssembly). Oh, I forgot to mention, the Uno Platform is free and open source. You can use the existing controls ecosystem with it.

            In this talk, I'll walk you through getting started with development on the Uno Platform. We'll start with setting up the development machine and start coding. Once the environment is set up, I'll use the platform to build an application that interacts with an existing Contact API to list, add, delete, and update contacts.
            
            At the end of this talk, you will know to develop an application that calls an API and provides a consistent, platform-specific user interface.`,
          room: "2215-A",
          category: ".NET",
          level: "Introductory"
        },
        {
          title: "Automated UI Testing for Mobile Apps",
          presenter: "Sean Sparkman",
          summary:
            "Introducing Xamarin.UITest, an Automated UI Acceptance Testing framework based on Calabash that allows programmers to write and execute tests in C# and NUnit that validate the functionality of iOS and Android Apps. Testing is one of the most important steps you can take before releasing your application to the app store. Do not skip this step. Automating this step can tedious regression testing out of the equation. When making small changes, you can now test the entire app without having to spend hours going through each screen. Use Xamarin.UITests to test your application today.",
          room: "2215-B",
          category: "Mobile",
          level: "Introductory"
        },
        {
          title: "Exploring Stateful Microservices in the Cloud Native World",
          presenter: "Mary Grygleski",
          summary: `How does one choose to architect a system that has a Microservice / REST API endpoints? There are many solutions out there. Some are better than others. Should state be held in a server side component, or externally? Generally we are told this is not a good practice for a Cloud Native system, when the 12-factor guidelines seem to be all about stateless containers, but is it? It’s unclear and this confusion may lead to poor technology stack choices that are impossible or extremely hard to change later on as your system evolves in terms of demand and performance.

            While stateless systems are easier to work with, the reality is that we live in a stateful world, so we have to handle the state of data accordingly to ensure data integrity beyond securing it.
            
            We will examine and demonstrate the fundamentals of a Cloud Native system with Stateful Microservices that’s built with Open Liberty in Kubernetes:
            
            * Microservices/REST API – Options to use when running your apps in the JVM
            
            * Concurrency – how to take advantage of multi-core CPUs and clustered distributed systems
            
            * Stateful vs Stateless - while stateless apps are easier to implement, the bulk of the apps in production are stateful which involve a higher level of complexity and risk, especially when data would need to travel across multiple machine and network boundaries
            
            * Deployment – how about containerization and orchestration using Kubernetes?`,
          room: "2215-C",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "What is Event Sourcing and CQRS? (wrong answers only)",
          presenter: "Chris Condron",
          summary: `A quick Google search for "What is Event Sourcing and CQRS?" will return dozens of wrong answers. In this light hearted talk we walk through the best of the bad (aka the worst of worst) , and break down just why they are quite so bad. We'll also take a trip through some of the other staggeringly wrong ideas we see far far too often.`,
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title:
            "Getting Started Optimizing Azure Machine Learning Models Using PyTorch Profiler",
          presenter: "Sabrina Smai",
          summary:
            "We all like speed and want our models to run faster. The faster you can run your models, the further along you can get your models to production. This session will go over some tools that empower data scientists with a wide range of productive experiences for building, training, deploying machine learning models faster, and optimizing machine learning models.",
          room: "2202",
          category: "Data Science",
          level: "Introductory"
        },
        {
          title: "Empower your Azure IaC with Bicep!",
          presenter: "Eldert Grootenboer",
          summary: `We all love to use Infrastructure as Code to roll out our Azure environments, however setting this up using ARM templates can sometimes be cumbersome. Wouldn't it be great if we could write our IaC templates in a more programming-like language instead? This is where Bicep comes in; a new Domain Specific Language created especially for this. Using this new language makes setting up our templates even more straightforward and powerful.

            In this session, you will learn all about Bicep, and its various capabilities. Find out how to write your scripts, which constructs are available, the tooling to use, and how to re-use your templates. After this session, you will have a good understanding of the Bicep language and its advantages to your work. And of course, this is all explained using interesting real-life samples with appealing demo's.`,
          room: "2203",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title: "Improving code quality with Static Analyzers",
          presenter: "Jim Wooley",
          summary: `How do you keep code consistent across a team or make sure your independent code follows accepted standards, use a Static Analyzer tool. See how to use some of these tools for your .Net, JavaScript, Style sheets, etc. to improve your code as an independent or large team lead.

            Whether you're an independent developer that needs assistance reviewing your code, or a member of a large team that wants to keep code consistency among the team, static analyzer tools can help identify and optionally fix issues in your code. Many platforms have their own version to help based on the language, including Roslyn, JsLint, CssLint, SonarQube. FxCop, StyleCop, etc. We'll take a look at some of these tools and explore how they can help identify issues in your code and improve maintainability and decrease errors before you deploy to production. We'll also look at the ability to build your own tool to enforce rules in your specific domain.`,
          room: "2204",
          category: "DevOps",
          level: "Intermediate"
        },
        {
          title: "Algebraic in Java: Pattern Matching",
          presenter: "Chandra Guntur",
          summary: `Java started with basic pattern matching techniques, recent versions include more intricate ones! Pattern matching is not just limited to instanceof checks, there is a lot more, making Java Algebra-friendly & Functional!

            This talk is about the future of Java’s Pattern Matching with code examples.
            
            https://github.com/c-guntur/current-abstracts/blob/master/talks/15_AlgebraicInJava_PatternMatching.adoc`,
          room: "2205",
          category: "Java",
          level: "Intermediate"
        },
        {
          title: `Researching and Writing Accessible "JavaScript ... Thingies"`,
          presenter: "Mark Noonan",
          summary: `You know it when you see it. It's an interactive part of a design comp. It animates on hover. Or scroll. Or maybe, when you select it, some other thing changes. It's not a dropdown, a modal, or an accordion. It's a Thingie.

            This talk will explore ways of mapping creative interactive designs to standard accessible usability patterns so that we can meet the expectations of all our users when implementing innovative designs. It starts with understanding the nature of the content being displayed, and the nature of the interaction going on, and ignoring the visuals.
            
            Armed with this knowledge, we can find the right HTML and JS to represent this interaction in a usable way. We'll talk about resources that help make this kind of thinking second nature, and how to avoid reinventing the wheel when things look new, if they really just represent one of many existing patterns.`,
          room: "2206",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Getting Off the Ground with CSS Grid",
          presenter: "Kara Luton",
          summary:
            "When it comes to building responsive web layouts we’ve used tables, floats and Flexbox. Now there’s CSS Grid. In this talk, we’ll go over what differentiates it from other techniques and why it’s completely changing the game. Through code examples and demos, you’ll walk out of this talk able to start using Grid right away.",
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title: "Connecting Accessibility, Mental Health, and Inclusivity",
          presenter: "Cassandra Faris, Chris DeMars",
          summary:
            "Mental health and accessibility are two important aspects of daily life that help us not only live our lives, but also survive and thrive inside and outside of the workplace. By prioritizing our health, we can become the best versions of ourselves at work and at home. Having knowledge and resources to help you along the way is crucial to improving your mental health. In this session we will be talking about mental health and its relationship to accessibility and inclusivity. You'll learn why all of these things matter and some best practices. We’ll also highlight some things you can do to help with being the best you, you can be.",
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Is Paired Programming Really Worth the Cost: A Case Study",
          presenter: "Gabby Spurling",
          summary:
            "You may have heard enthusiasts rave about the benefits of paired programming. In this session, we'll analyze a real-world case study focused on measurable results. Two teams under a daunting, business-driven deadline collaborated to develop a single product using separate programming practices - one pairing, one not. This resulted in an organic study that illuminates challenges and lessons around developer measurements. Discover if what you've heard about paired programming is REALLY true, how to prepare for this new way of working, and effective data-gathering tips we learned along the way.",
          room: "2209",
          category: "Project Management",
          level: "Intermediate"
        },
        {
          title: "React Hook Gotchas",
          presenter: "Kevin Ghadyani",
          summary:
            "Hooks are always talked about as being super simple compared to class-based components, but there's a looming shadow over any hooks code you write where your components will react in strange ways because of a bunch of gotchas you aren't catching. If you want to be productive again, you'll have to learn exactly where these issues come up.",
          room: "2210",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title:
            "Who got DNA in my code? An introduction to Genetic Algorithms",
          presenter: "Randall Koutnik",
          summary: `If you've ever wondered what this "Machine Learning" thing is but weren't sure where to start, this talk is for you! Genetic Algorithms are a great place to start learning, as they're simple, involve only elementary levels of math and are applicable to a wide range of problems. You'll learn how to teach computers to survive in simulated badlands, approximate solutions to problems that otherwise would take an eternity to solve, and even dip your toes into game design to see how game makers use genetic algorithms to prevent completely broken strategies before they get to the playerbase.`,
          room: "2211",
          category: "Data Science",
          level: "Introductory"
        },
        {
          title:
            "Whales Outside The Net: Container Orchestration in an Offline Environment",
          presenter: "Patrick McVeety-Mill",
          summary: `Containers are proven tools for hosting, deploying, and managing resilient and scalable applications, especially in the cloud. But what happens when you need all those hype features in an on-premise system, or even without internet access at all?

            In this talk, we’ll dig into the challenges involved with utilizing Docker, a very network-oriented tool, in an environment without any outside internet access. Our thrilling digital cetaceans will jump through hoops to preserve best practices like automated builds, packaging, and monitoring. Finally, we’ll reveal how to ship a rich orchestration of containers across a disconnected ocean.`,
          room: "2214",
          category: "DevOps",
          level: "Intermediate"
        }
      ]
    },
    "2:30pm": {
      talks: [
        {
          title:
            "Perfecting the the Cheetos Puff: Teaching Industrial Autonomous Systems",
          presenter: "John Alexander",
          summary: `How can an industrial system create the perfect Cheetos Puff by itself? By teaching the system!
            How do you teach an industrial system? With 3 ingredients: simulation, domain expertise, an AI engine.
            
            Please join us for a walkthrough of Project Bonsai, a low-code AI development platform that uses “machine teaching” which helps self-learning AI systems master tasks using the knowledge and skill of the system operators. Learn how Project Bonsai enables engineers to build complex industrial control systems without data science expertise. Explore real-world case studies showing the techniques used to improve the performance of high value applications in the areas of industrial robotics, motion control, yield optimization, process control, smart buildings, and of course, the perfect Cheetos Puff!`,
          room: "2215-A",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title: "A Look at the Apollo Guidance Computer",
          presenter: "Adam Barney",
          summary:
            "Mankind has accomplished many great feats of engineering and willpower, but few as awesome as putting a human being on the surface of the moon. Men and women from all walks of life, all sorts of technical backgrounds and specialties came together to do the impossible. A large part of the success of the mission depended on the Apollo Guidance Computer. The AGC was truly ahead of its time despite most of it looking low-tech and simplistic by today's standards. In this session, we'll take an in-depth look at the Apollo Guidance Computer - how it was architected and built, some of the clever innovations that were used to push the envelope of what was possible in 1969, and even dig in to some of the code that helped mankind land on the moon and return safely home.",
          room: "2215-B",
          category: "Other Languages",
          level: "Introductory"
        },
        {
          title:
            "Using Azure IoT Central to form a basis for your IoT Solutions",
          presenter: "Carey Payette",
          summary:
            "This session will provide an overview of the features available in Azure IoT Central as well as some pros and cons of the implementation. You will see how this SaaS solution can be extended for more complicated scenarios.",
          room: "2215-C",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title:
            "Using .NET, Dynamics365, and PowerApps: A Real World Case Study",
          presenter: "Kevin Grossnicklaus",
          summary: `As the distribution of COVID-19 vaccines ramped up in February and March of 2021, we were asked to partner with a number of local healthcare organizations to assist in providing vaccinations to underprivileged areas of our community. Their goal was to start holding weekend clinics starting a little over 3 weeks from our first discussions. Unable to find a suitable platform that fit our needs with regards to registration and data tracking we built a solution from the ground up in less than 3 weeks.

            This presentation will provide a detailed walkthrough of how we designed and implemented a full solution built using .NET and Angular, Microsoft Dynamics 365, PowerApps, and DataVerse. We will demonstrate how these technologies were tightly integrated to provide a robust and integrated platform that addressed the specific needs of the people being vaccinated as well as the onsite data tracking requirements necessary for checking-in patients and recording vaccinations.
            
            If you are new to some of these technologies this will be a great opportunity to get a developer walkthrough of what they are and how they can be utilized to quickly solve complex business problems as well as allow for great flexibility for adjustments along the way.`,
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title: "Understanding and Preventing OWASP Top 10 Security Issues",
          presenter: "John Kuefler",
          summary:
            "Strong IT security has never been more important than it is today. From designing system architecture, to writing the code, making a web app that is truly secure can be a daunting challenge. With the myriad of threats out there, one of the most important things to consider is - where should our focus be? This talk will cover OWASP Top 10 – a security awareness framework for organizations to follow that identifies the most critical current security issues. These issues are determined by a broad consensus of IT professionals from many different backgrounds, and specifically focus on externally facing web applications that may be vulnerable. We’ll look at an example of each of the OWASP Top 10 security exploits in a real web application to understand exactly why these issues are so important, and talk about mitigation strategies for each one. We’ll also cover how to use the scanning tools to easily identify failures in OWASP compliance within your internal IT infrastructure and applications, and what the next steps are to get them fixed.",
          room: "2202",
          category: "Security",
          level: "Intermediate"
        },
        {
          title: "Yes, You Need to Unit Test your JavaScript. Here's How.",
          presenter: "James Bender",
          summary: `When asked about Unit Testing, most developers will give you the stock answer about how they help you write better code that has fewer defects and is more resilient to change, and blah blah blah. Yeah, we all know the benefits. But when you ask them if they are actually doing Unit Testing, the answer usually starts with them saying “Weel….”, followed by the long way of saying “no, we don’t.” So why aren’t developers Unit Testing their JavaScript?

            The most common answers:
            • It’s too much work
            • We’re already behind
            • It won’t work with the framework we’re using
            • We started, but people stopped writing/updating them, so we gave up
            • We already have TypeScript, so we really don’t need it
            
            But in the end, most of these are obfuscations of the real reason: we don’t really know how to properly Unit Test our JavaScript.
            
            In this session, you’ll learn how to write effective unit tests of your JavaScript applications, no matter if you’re using Angular, React, Vue, or whatever new, whizbang framework has just come out. Client-side or Server-side? Doesn’t matter, you’ll learn how to structure your code for testability, how to get the most out of your testing framework and tooling, why just using TypeScript is NOT enough, and how to build a unit-friendly development culture.`,
          room: "2203",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Managing State in Vue.js: A Reason to Use Vuex",
          presenter: "Shawn Wildermuth",
          summary:
            "As your application increases in complexity, it can be difficult to control changes to the underlying data from all parts of your application. In this talk by Shawn Wildermuth, he’ll explain how Vuex can help you get your data back in control.",
          room: "2204",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Data Science on the JVM with Kotlin and Zeppelin",
          presenter: "Pratik Patel",
          summary: `The world of Data Science heavily uses Python and Python libraries such as NumPy and Pandas. While Python is a great platform, it does have some drawbacks - one of which is performance. As Java developers, we enjoy the familiarity of the JVM and the constellation of tools and libraries available for this high-performance platform.

            In this session, Pratik will introduce you to Data Science using the popular Kotlin language that runs on the JVM. We'll do this using an interactive platform called Apache Zeppelin. Similar to Jupyter Notebooks, Zeppelin allows you to write code, formatted text, and use a myriad of plugins to process, analyze, and display data. With its integration with Spark, you can also prototype and develop solutions for Big Data in a fun and interactive way!`,
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: "The Tao of Refactoring Code",
          presenter: "Cameron Young",
          summary:
            "Some devs are just thrown onto a massive refactor others are more planned out. Find out the lessons from someone thrown into the fire many times. While many will spend a lot of time adding features to existing projects. Others may have to change the structure of the project. Let's talk about some common pain points and how to overcome them.",
          room: "2206",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "Accessibility for the Benefit of Everyone",
          presenter: "Jay Harris",
          summary:
            "Whether typing on your phone with one hand, taking a call in a crowded room, or talking to Siri through an intoxicated slur, impairments are every-day common. Learn how Application Accessibility aids the entire user base, and how to implement it in your applications.",
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title: "How to Equitably Close the CS Education Gap",
          presenter: "Allison Hartnett",
          summary:
            "The Microsoft Philanthropies TEALS (Technology Education and Literacy in Schools) Program helps high schools across North America create equitable, inclusive Computer Science (CS) programs. This session will cover the disparity in CS education, overview how the TEALS Program is making a difference, particularly with schools and students that are traditionally underrepresented in the tech industry, and describe how industry professionals can make a difference.",
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Ch-ch-ch-changes: Tracing Changes in Azure Cosmos DB",
          presenter: "Chad Green",
          summary:
            "David Bowie might not be able to trace how time changes him, but with the Azure Cosmos DB change feed allows us to trace the changes to your data within your Cosmos database. The Azure Cosmos DB change feed listens to an Azure Cosmos container for any changes and then outputs the sorted lists of documents that were changed. In this session, you learn what the change feed is, how it works, and how you can use it to build more robust applications.",
          room: "2209",
          category: "Data",
          level: "Intermediate"
        },
        {
          title:
            "But It was Logged! Practical Logging & Monitoring with .NET Core",
          presenter: "Mitchel Sellers",
          summary: `.NET Core makes writing log entries a breeze within your applications, however, that is where the out-of-the-box simplicity ends. So you have decorated your code with all of these pretty log messages that are designed to make your life easier, but then what? Have you actually reviewed them? Something bad happened, did it tell you? What about confidential information, have you limited that from being logged?

            Well, this session is designed to help take your logging from ***IMPLEMENTED*** to ***USABLE***. Logging is great, but we have so many questions to answer, including where you store the logs, how you get notifications etc. In this code-focused solution, we explore the following concepts, with detailed examples.
            
            * Where to log entries to, and flexible configurations
            * Monitoring and escalation of log entries
            * Integration with logging & external assemblies
            * Configuration & build systems with logging
            
            At the end of the session, attendees should be able to work with logging and exception handling in .NET Core effectively.`,
          room: "2210",
          category: ".NET",
          level: "Advanced"
        },
        {
          title:
            "Understanding Probabilistic Data Structures with 112,092 UFO Sightings",
          presenter: "Guy Royse",
          summary: `There are three reactions to the title of this talk:

            - What the heck’s a probabilistic data structure?
            - UFO Sightings… wha?
            - 112,092 is an oddly specific number.
            
            This is a talk about the first bullet point with the second thrown in just for fun. I like weird stuff—UFOs, Bigfoot, peanut butter and bologna on toast—maybe you do too? As far as the third bullet point, well, that’s how many sightings I have.
            
            Now, if you’re like most developers, you probably have no idea what probabilistic data structures are. In fact, I did a super-scientific poll on Twitter and found that out of 119 participants, 58% had never heard of them and 22% had heard the term but nothing more. I wonder what percentage of that 22% heard the term for the first time in the poll. We’re a literal-minded lot at times.
            
            Anyhow. That’s 4 out of 5 developers or, as I like to call it, the Trident dentist ratio. (It’s actually a manifestation of the Pareto principle but I’m a 70s kid). That’s a lot of folks that need to be educated. So, let’s do that.
            
            A probabilistic data structure is, well, they’re sort of like the TARDIS—bigger on the inside—and JPEG compression—a bit lossy. And, like both, they are fast, accurate enough, and can take you to interesting places of adventure. That last one might not be something a JPEG does.
            
            More technically speaking, most probabilistic data structures use hashes to give you faster and smaller data structures in exchange for precision. If you’ve got a mountain of data to process, this is super useful. In this talk, we’ll briefly go over some common probabilistic data structures; dive deep into a couple (Bloom Filter, MinHash, and Top-K); and show a running application that makes use of Top-K to analyze the most commonly used words in all 112,092 of my UFO sightings.
            
            When we’re done, you’ll be ready to start using some of these structures in your own applications. And, if you use the UFO data, maybe you’ll discover that the truth really is out there.`,
          room: "2211",
          category: "Data",
          level: "Introductory"
        },
        {
          title: "WellSky's Journey to Create an Enterprise Architecture",
          presenter: "Jim Higgins",
          summary:
            "As WellSky has grown through acquisition over the years, we have acquired a plethora of differing tech stacks, system architectures, and a lot of duplication. WellSky started on a journey in January of 2019 to create an enterprise platform and architecture aimed at unifying key components that could be leveraged across all these disparate systems. These enterprise components are consumable micro-frontends, enterprise microservices, and data lakes and warehouses, that create an enterprise platform upon which we can build out entirely new solutions and enhance the capabilities of existing solutions.",
          room: "2214",
          category: "Architecture",
          level: "Introductory"
        }
      ]
    },
    "3:45pm": {
      talks: [
        {
          title: "10 Ways to Write Clean JavaScript Code",
          presenter: "Avindra Fernando",
          summary: `Written in just 10 days, JavaScript continues to be very successful in modern software development. The flexibility of JavaScript empowered rapid innovation in software. But, this flexibility comes at a cost of readable, maintainable, and scalable JavaScript code.  

            Over the years, after working with JavaScript, there are many things that I have learned the hard way. JavaScript and its ecosystem is fast changing. When you think you have grasped a concept in JavaScript, it loves to throw another curveball at you.
            
            In this talk, let's discuss 10 ways that I found useful to write clean JavaScript code. These guidelines will help you keep the clutter away, and write maintainable JavaScript code.`,
          room: "2215-A",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Matching Webapp deployment velocity in React Native",
          presenter: "Eric Groves",
          summary: `One of the biggest headaches for developing on mobile can be the tedious build process along with a lengthy App-Store review. Pains from managing provisioning profiles, versioning, and testing on multiple devices are all addressed with *Fastlane*. The dreaded wait during an App Store review is addressed by *CodePush*, which allows us to deliver Javascript bundles directly to clients instantly, bypassing any latency from the usual review process. We’ll talk about the aforementioned pain points and how Fastlane and CodePush can simplify and improve the React Native developer experience.`,
          room: "2215-B",
          category: "Mobile",
          level: "Introductory"
        },
        {
          title:
            "Entity Framework (Core) Unchained: Getting the Best Performance from Your ORM",
          presenter: "Daniel Mallott",
          summary: `Entity Framework makes data access in .NET applications as easy as defining some classes, adding a connection string, and writing some LINQ statements. But listen to developers and database administrators and you will find that taking the naive approach leads to poor performance, bloated databases, elaborate workarounds, and general dissatisfaction with the technology.

            It doesn't have to be this way! Behind the simple facade, Entity Framework gives us multiple options for tuning our data access and improving performance. In this talk, you will learn configuration options and access patterns that can help improve performance. You will also learn what features in Entity Framework to use judiciously or avoid entirely. Next, you will learn some strategies for structuring your database in ways that both improve performance and simplify your application code. Lastly, you will learn some tipping points about when you should discard Entity Framework entirely.`,
          room: "2215-C",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "From Developer to Cloud Architect - Strategies for Success",
          presenter: "Sean Whitesell",
          summary: `You're a developer, and now an architect. Not only an architect but a cloud architect. You're happy for the job but overwhelmed with everything that goes with the job. From networking skills to handling audits, a cloud architect has much to handle in the day-to-day challenges. What do you need to really succeed at your job?

            In this talk, I'll go over strategies considered crucial to being a good cloud architect such as a security mindset and preparing for the future. I'll present some tips on overcoming the seemingly insurmountable challenges. And you'll learn how your experience as a developer strengthens your cloud architect skills. Let the strategies in this talk help you stop feeling overwhelmed and instead empower you as a cloud architect.`,
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title:
            "With a Little bit of Duct Tape and Baling Wire, We can have this Running Well",
          presenter: "Aaron Cure, Steve Kosten",
          summary:
            "Application security in the development lifecycle is broken. Organizations routinely go through great expensive efforts to secure their networks only to punch holes in their firewalls and deploy insecure applications that compromise their network security. While frameworks that have security features enabled by default have helped, the move to agile and DevOps makes application security all the more difficult. We will talk about some of the failures in application security, talk about how we can improve our approach to application security, and demonstrate what a secure development lifecycle and deployment pipeline in the DevSecOps world should look like. It ain’t rocket science, we can fix this.",
          room: "2202",
          category: "Security",
          level: "Intermediate"
        },
        {
          title: "Thrill of the Hunt: Return to Exploratory Testing",
          presenter: "Kylie Schleicher",
          summary:
            "As test automation grew from trend to requirement many testers became disenfranchised. The test execution they enjoyed was taken over by code and cloud-based services. Or was it? Using the art of exploratory testing to increase delivery confidence, re-ignite a discipline, attract new talent, and create a more diverse career path.",
          room: "2203",
          category: "Testing and QA",
          level: "Intermediate"
        },
        {
          title: "Change Management During Legacy Transformations",
          presenter: "Vasudha Prabhala",
          summary: `Software modernization is fundamentally about change, which can be exciting to change leaders and IT advocates. But software doesn’t stand on its own: It’s created, maintained, and used by teams of people throughout your organization—and those people have real limits to the amount of change they can adapt to at once.

            Change overload can cause your modernization project to short out too quickly. How do you get people to embrace new technologies and practices without hitting a wall? We’ll show you how to craft a people-centric plan to smooth the transition. For example, retiring your waterfall methodology isn’t just about changing your development cadence, it should incorporate stewardship and regular feedback loops with your teams. Or if you’re switching from SQL to Mongo or updating your user interface, careful communication and training for the people affected should be a top priority.
            
            An incremental approach to the changes that come with modernization will also help drive acceptance for project teams, stakeholders, and end-users. This means being realistic about what amount of change different groups can internalize and keeping that at the forefront of planning. Your IT team may be all-in on a new technology that’s completely unfamiliar to the business, for instance. How do you introduce the new thing slowly so that the business doesn’t balk and levels of enthusiasm start to align?
            
            This talk is about putting all of these ideas (and more) into practice to save your modernization project. You’ll learn:
            
            Why the emotional threshold among different stakeholder groups matters to your project
            How to identify sources of resistance (is it the tech team? Is it the business? Is it both?)
            How to prioritize what to change and when, and measure whether it’s effective
            How an incremental approach to modernization can set you up for sustained success
            
            Too much “new tech” is not an IT problem, it’s an emotional one. Don’t skip the soft stuff!`,
          room: "2204",
          category: "DevOps",
          level: "Intermediate"
        },
        {
          title: "Java 17's Project Panama 4 Newbies",
          presenter: "Carl Dea",
          summary: `As a Java developer, you may have a need to access native libraries, such as Tensorflow, SqlLite, ffmpeg, OpenGL, but later find that JNI is your default choice. JNI (Java Native Interface) requires native code to be installed. You’ll quickly find that JNI wrapper code is difficult to maintain.
            New to OpenJDK 17 is the Foreign Linker API (JEP 412) as a replacement or alternative for JNI to provide a pure-Java solution and perform comparable to, or better than, JNI.
            The aim of this talk is to help you be proficient at creating Java programs capable of accessing devices and/or native libraries mainly focussing on OpenJDK 17’s Foreign Linker API.
            - Intro (what, why, where)
            - Requirements
            - IDE, environment setup
            - Getting started
            - Anatomy of a Hello World in C
            - What is jextract
            - Panama Hello World in Java
            - How to allocate memory to work with C primitives, arrays, & C strings.
            - How to allocate and mimic pointers, structs, and array of structs.
            - What are VarHandles?
            - What are MethodHandles?
            - Using super powers to access system libraries
            - Using super powers to access third party libraries (demos)
            Demos may include: OpenGL, Tensorflow, Git, ffmpeg, Python, Rust, Swift, MacOS touchID,
            MacOS SpeechSynthesizer.
            
            All Code will be available online at github.com`,
          room: "2205",
          category: "Java",
          level: "Intermediate"
        },
        {
          title: "Infrastructure as TypeScript with AWS and GCP",
          presenter: "Lee Briggs",
          summary: `For almost a decade "Infrastructure as Code" has been a DevOps buzzword - but the myriad tools in share a dirty little secret... there's no actual code! Few people like "programming" YAML or JSON (even the human-friendly variants!), and even fewer like having to reverse-engineer ways to apply known good development practices to tools which resist it at all cost.

            So, what if things were different,and programming infrastructure was more like real programming, with real programming languages like TypeScript? What if you defined Lambda functions by actually writing lambdas, created abstractions using complex types, and could take advantage of existing tools for modularity, linting, refactoring and testing?
            
            Enter Pulumi, an open-source deployment engine which enables all these things using TypeScript, Python or Go!
            
            In this talk, we'll look at how you can write TypeScript code using Pulumi to provision traditional cloud infrastructure, manage Kubernetes and build portable "serverless" applications - all with minimal YAML in sight! We'll look at deploying to multiple regions of the same cloud, and how to build abstractions allowing multi-cloud to be a reality.`,
          room: "2206",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title:
            "How To Make Your Website A Progressive Web App (And Why You Might Want To)",
          presenter: "Lemon 🍋",
          summary: `For years, web developers and app developers have been siloed, looking at each other with jealousy. How come these people get to do push notifications? How come these people have such a simple build process? And why can’t we all just work with the same codebase?

            A PWA (Progressive Web App) marries all these needs together, starting with a run-of-the-mill website and adding features as they’re appropriate. The most interesting part: You can start with a website you’ve been working on right now.
            
            In this talk, Lemon will take you through the process of starting with a simple HTML website add add features like caching, notifications, desktop installation and offline mode to create an app that’s as interesting and dynamic as you’d want it to be.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Intermediate"
        },
        {
          title: "This Talk Won't Change You, But How You Remember It Will",
          presenter: "Christina Aldan",
          summary:
            "Memories are unreliable and fickle, yet drive our emotions and our narrative. We are anchored not by our past but how we remember and process our past. Learn to improve the narrative by recognizing the fallibility of memory, how that fallibility serves us, and to release the attachment holding us back.",
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Database Migration Lessons from the Trenches",
          presenter: "Nuri Halperin",
          summary:
            "Migrating from one database to another sounds simple enough, until you start doing it… What can go wrong? What do you need to get right? I'll be breaking down the process into discrete parts that together form a successful migration. In each part, we'll discuss the key players, motivations, and means that com together to achieve the best outcome. No two projects are alike, but once we take a structured view of the migration lifetime, it becomes easier to identify patterns and ways to get things done in a better way.",
          room: "2209",
          category: "Data",
          level: "Intermediate"
        },
        {
          title: "CQRS and Event Sourcing Without the Pixie Dust",
          presenter: "Vijay Nair",
          summary:
            "CQRS and especially Event Sourcing are often surrounded by an air of mystery. While for some the associated fear, uncertainty, and doubt prevent them from venturing further, for others, the endless promises make it an irresistible source of magic pixie dust. The reality, however, lays somewhere in between. In this session, Vijay will take a pragmatic approach to CQRS and Event Sourcing. We’ll briefly recap what they are and how they can be used to pragmatically implement a microservices architecture. But also if you’re just looking for building a structured monolith, these architectural patterns are your friends. In fact, you can dynamically switch between monolith and microservices. Finally, we’ll put the code where the talk is. Vijay will show how promises are made reality, using Axon Framework and Axon Server.",
          room: "2210",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title: "Scrum vs. Kanban: Yes, This Again",
          presenter: "Phil Ledgerwood",
          summary: `If you find yourself in an awkward social situation at a conference, ask aloud, "Hey, is Scrum better than Kanban?" and duck out of the room in the ensuing chaos.

            Strong opinions exist on both sides of this fence, and as the data comes in, we've come to see that agile teams all over the world have been successful with either.
            
            However, the fact that successful teams on both sides exist doesn't help you decide which is right for -your- team, and the patterns are not interchangeable. As SAFe and other scaling paradigms become more popular, even individual teams within the same organization may operate best using different structures.
            
            In this session, we'll look at Scrum and Kanban, not to prove that one is better, but to point out how they tackle problems in different ways using different assumptions about the workflow. By seeing which more accurately fits your work, it may help you decide which to try.
            
            You'll learn:
            - Misconceptions about both sides that only prove marketing is evil
            - How Scrum and Kanban make work visible
            - How Scrum and Kanban deal with planning and projecting timelines
            - How Scrum and Kanban deal with limiting work in progress
            - How Scrum and Kanban deal with changing priorities
            - Stuff Scrum deals with that Kanban does not
            - Common crossover practices
            - Workflow characteristics that may fit one scheme better than another`,
          room: "2211",
          category: "Project Management",
          level: "Introductory"
        },
        {
          title: "Ephemeral Jenkins (yes, that Jenkins) with AWS Fargate",
          presenter: "Eric Gerling",
          summary:
            "Jenkins has been losing popularity lately, but the Jenkins ecosystem is still hard to discount when choosing a CI/CD platform. Teach an old dog new tricks by combining AWS Fargate, Terraform, Jenkins, Docker, Jenkins Configuration as Code, Jenkins Job DSL, and a sprinkling of Groovy to create a Jenkins instance to manage your CI/CD workloads.",
          room: "2214",
          category: "DevOps",
          level: "Avanced"
        }
      ]
    }
  },

  "Friday, 9/17/2021": {
    "7:30am": {
      talks: [],
      breakfast: true
    },
    "8:30am": {
      talks: [
        {
          title: "Turning Virtual Assistants Into War Machines",
          presenter: "Alex Dunn ",
          summary:
            "Turning Virtual Assistants Into War Machines sounds like a terrible terrible thing, but in fact, this is the story of using Virtual Assistants like Alexa, Google Assistant, and Bixby for good! The building of Project Suave Keys - a platform built in .NET that enables users to turn their voice into gaming controller on any platform they have access to. Come learn about scaling applications in .NET to over a dozen different platforms and channels while building for accessibility to even the playing field. Gain an understanding of voice and conversational platforms, real-time communication technology, and best practices for sharing code and going from PoC to product. Try your shot at landing a win in Call of Duty using your voice, then leave with a working knowledge of other ways you can use .NET and the tools you're familiar with.  ",
          room: "2215-A",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "Migrating a legacy React App to TypeScript",
          presenter: "Randall Koutnik ",
          summary:
            "TypeScript's a powerful tool for understanding complex codebases. Unfortunately, you're working on an app that has many edge cases with a team that may not be on board for such a large migration. Never fear - this is the talk for you! We'll cover where to start a migration project, how to measure progress, and strategies for getting the whole team on board. You'll also learn about common pitfalls when converting code to TypeScript and when it's appropriate to use any.",
          room: "2215-C",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Application Architecture Patterns",
          presenter: "Joseph Guadagno",
          summary:
            "Architecting an application can be challenging. What do you do to keep your application flexible to ever-constant requirement changes? How do you handle landscape changes (cloud, on-premises, databases)? How do you avoid over-engineering the application? How do I make sure my application plays well with other applications? In this session, we'll take a look at some well-understood and practiced Software Architecture patterns. We'll cover these patterns at a high level to understand how to use these patterns in different scenarios. You'll walk away with some knowledge, tips, and tricks that you'll be able to use for new and existing applications",
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title: "Defense in Depth - Minimizing the Risk of SQL Injection",
          presenter: "Rob Kraft",
          summary:
            "During this session you will be thrust into the role of the DBA hired to fix SQL Server to prevent it from ever getting SQL Injected, or at least minimize the damage that can be done when it does. From bottom to top this session will cover how services should be configured, how SQL Server should be configured, benefits and risks of SQL Server security configurations, and best practices for app development. Come learn how to defend your servers from hackers, or how to become a SQL Injection hacker yourself!   ",
          room: "2202",
          category: "Security",
          level: "Intermediate"
        },
        {
          title: "The Software Engineer's Guide to Public APIs",
          presenter: "Scott McAllister",
          summary:
            "You're comfortable working out of a code base. You've solved technical challenges before! But what happens when you have to reach for an API based tool? For many highly-technical engineers, public APIs are out of sight and out of mind. In this talk, we'll cover a range of mechanisms, from OAuth to Webhooks, that you're likely to encounter when building with a public API. You'll leave with a newfound understanding and appreciation of public APIs, ready to go forth and connect all of the things!",
          room: "2203",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title:
            "What a global pandemic can tell you about better DevOps practices",
          presenter: "Jeremy Meiss",
          summary:
            "In early 2020 a global pandemic set in motion events which none of us could predict. With anonymous data collected from 900k+ devs, 25K orgs, and 30m+ builds/mo we've found some interesting insights into better DevOps practices. In this session, we will seek to uncover what this unique dataset can tell us about high-performing engineering teams, and what trends stand out through the aggregated platform usage.",
          room: "2204",
          category: "DevOps",
          level: "Introductory"
        },
        {
          title: "Moving Java Forward",
          presenter: "Sharat Chander",
          summary:
            "The last 25 years has shown that Java has enriched the world we live in. Applications of all shapes and all sizes targeting a wide and diverse set of use cases. The foundation is strong! But, how will the next 25 years and beyond look like? That future is influenced so much by you, the developer community. And this session will focus on what you can do to participate to ensure the future remains bright. Learn about the many channels you can use to move Java forward.",
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: "Climbing The Multi-Cloud Mountain",
          presenter: "Daniel Schimpfoessl, Chris Bowland",
          summary:
            "Going all-in with a single cloud vendor is no longer a viable business strategy. Whether for operational resiliency, cost efficiencies, data governance, or vendor autonomy, the ability to deploy and manage your application across the various public clouds such as AWS, GCP, and Azure as well as internal, private clouds is becoming a strategic imperative for enterprises. In this talk, we will discuss and demonstrate Kubernetes-native tooling and automation that will: * deploy an application to AWS, Azure and GCP * move an application from one public cloud to another * scale a running application in multiple public clouds * leverage a single dashboard to drive operational knowledge and changes * use a single terminal for all the clusters * troubleshoot an application across the public clouds, including unhealthy pods, persistent volumes, and other Kubernetes resources * deploy GitOps strategies to create, modify, and delete applications * create and destroy clusters from a single console",
          room: "2206",
          category: "DevOps",
          level: "Advanced"
        },
        {
          title:
            "Machine Learning and Accessibility: Solving complex inclusivity problems while learning AI",
          presenter: "Ashley Stove",
          summary:
            "How would you add descriptive alt text to hundreds of photos on your website at once? How would you add robust audio descriptions and transcripts to your videos? These are complex and important problems facing developers as they strive to increase the accessibility of their websites. However, these problems are manageable when you use machine learning tools that are available with a low learning curve. We will talk about the basics of machine learning, how to get started, and the positive impact that machine learning can have on the accessibility of a modern website.",
          room: "2207",
          category: "UI/UX and Design",
          level: "Intermediate"
        },
        {
          title: "Navigating Salary Negotiations",
          presenter: "Vasudha Prabhala",
          summary:
            "Only 39% of workers negotiated their salaries according to a study of over 2,700 workers across 27 major US cities. Meanwhile, Glassdoor estimates that the average U.S. employee could be earning 13.3% more per year...if we only knew how to ask. So why don’t we negotiate? Is it because we’re not comfortable with those conversations? Have a skewed view of our own value? Probably a bit of both. But by taking control of those conversations now, we can significantly increase our earning potential over time. In this talk, we’ll uncover the roots of our reticence, identify gaps in existing communication, and learn strategies for negotiating better salaries. As Headspring’s SVP of Service Delivery, Vasudha brings a unique vantage from both sides of the negotiating table. She'll deliver actionable advice for creating a business case for your own worth, demonstrate some powerful negotiating techniques, and lead you through specific scenarios.",
          room: "2208",
          category: "Human Skills",
          level: "Intermediate"
        },
        {
          title: "Cypher Sleuthing: Tips and Tricks for Querying a Graph",
          presenter: "Jennifer Reif",
          summary:
            "Searching for ways to improve your knowledge and skill in writing queries with graph data? While many marketing and sales messages tell us graphs are easier to understand and relatable for other users, writing and structuring graph queries is often different than the skills we currently possess. So how can we up-skill without the pain and time of trial-and-error? Join us as we dive into the structure of a graph database and understand how queries operate. To help us understand the query logic, we will explore tools and tricks to finding out where things went wrong or where we can optimize our queries. We will cover tips and tricks, as well as pitfalls, to help us avoid future road blocks or performance hits. Come to this session to see how to navigate graph data with confidence to retrieve accurate and performant results!",
          room: "2209",
          category: "Data",
          level: "Introductory"
        },
        {
          title: "Packaging your world with NuGet",
          presenter: "Duane Newman",
          summary:
            "Whether you are creating an open source library or building enterprise app core components, you need to get that functionality into other projects. But developing these resources is usually easier than consuming them. How about a worry free way to distribute and reference those resources in your project that will let you stay up to date, but allow you to avoid problems that may introduce breaking changes or new bugs? NuGet packages to the rescue! We'll also take a look at where you can find NuGet (packages aren't just for code any more) and how to create, distribute, and maintain your very own package. Then, you’ll be ready to share your package with your team, your enterprise, or even… The world!",
          room: "2210",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "Your Assumptions Are Wrong, and Your Software Is Bad",
          presenter: "Bill Parrott",
          summary:
            "Gathering requirements is hard. We need the right mix of clarity and flexibility to ensure that everyone understands what needs to be done without committing to specific implementation details up front. But how do we accomplish this when everyone's needs and perspectives are so different? In this session, we will talk about the different stages of requirements gathering and the kinds of questions we should be asking ourselves and each other. From the customer to the developer, and everyone in between, this talk will have a little something for all who participate in the product development cycle.",
          room: "2211",
          category: "Project Management",
          level: "Introductory"
        },
        {
          title: "Breaking into Blockchain Development with JavaScript",
          presenter: "Keegan Thompson",
          summary:
            "Blockchain development is unreasonably complex, expensive, divided, and exclusive. We are introducing a way for JavaScript developers to build decentralized apps on any blockchain using familiar syntax. It's faster, cheaper, and more secure than how it's done today, and compatible with React, Vue, and Go. Gone are the days where you have to get investment, hire a PhD mathematician, request an audit, and deploy a unique build for each environment. Best part? No need to learn a new language. We've built Reach with JavaScript syntax so it's a linear move. You can build Apps as a one-(wo)man show.",
          room: "2214",
          category: "JavaScript",
          level: "Intermediate"
        }
      ]
    },
    "9:45am": {
      talks: [
        {
          title: "JavaScript Metaprogramming",
          presenter: "Dave Fancher",
          summary:
            "Metadata, data about data, is everywhere. We seem to intrinsically understand that using data to further describe the data within our systems brings numerous benefits to taming complexity. It follows then that metaprogramming, programming that interacts with the program itself by inspecting or even manipulating its own code can bring similar benefits to our software. ES6 greatly expands upon JavaScript's existing metaprogramming capabilities with the Symbol, Reflect, and Proxy types. Through some practical examples we'll discuss the role each of these types play within JavaScript metaprogramming and see how they not only affect your code but even drive several modern language features.",
          room: "2215-A",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Your Internal Developer Platform S****!",
          presenter: "Alan Barr",
          summary:
            "Veterans United Home Loans built an internal developer platform on top of Kubernetes. We will share what we learned during our journey to cloud-native computing.",
          room: "2215-B",
          category: "DevOps",
          level: "Introductory"
        },
        {
          title: "Open Source XAML Takes You Places!",
          presenter: "Sam Basu",
          summary:
            "XAML started life as a simple UI markup layer, but has had a surprisingly eventful history over years. Today, XAML powers a lot of app platforms and seems poised for success going forward. And almost all of XAML application stacks are now open source! Want pure Windows desktop apps – WPF XAML got you covered. Want apps for every Windows device – Tablets, Surface Hubs, Dual Screens or Hololens? UWP XAML provides a rich ecosystem. Need abstraction over Win32 or UWP? Win UI is the future Windows UI stack. Want to stretch Windows XAML over to iOS/Android/WebAssembly? Uno Platform has you covered. Xamarin.Forms has always allowed developers to target various mobile platforms, like iOS and Android from single C#/XAML code base. The same XAML UI can also target MacOS, WPF, Tizen, Smart Watches, Smart TVs and more. And with .NET MAUI running on .NET 6, XAML developers are poised to have an evolved way of reaching mobile and desktop platforms, with better tooling and code-sharing with web. Let’s unpack the magic behind democratization of cross-platform .NET development. Today’s open source XAML is flexible & powers a lot of app platforms.",
          room: "2215-C",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "Rethinking Architecture: A Look at Macroservices",
          presenter: "Chris Gardner",
          summary:
            "In the beginning, all software was a single, monolithic executable. However, large scale executables quickly became unwieldy, cumbersome, and a nightmare to update and maintain. We took a step back and addressed the problems. As such, Service Oriented Architecture was born, and we all rejoiced. However, these large scale services quickly became unwieldy, cumbersome, and a nightmare to update and maintain. We took a step back and addressed the problems. As such, Microservices were born, and we all rejoiced. Unfortunately, the honeymoon with Microservices is now over, as we start to see problems with this style. In this talk, we'll take a step back, and look at the pros and cons of both SOA and Microservices. From there, we can weigh these concerns and try to find a happy middle ground, which I affectionately refer to as Macroservices. By the end, we'll have an appreciation for the concerns we must weigh as we decide how to build or refactor our next application.",
          room: "2201",
          category: "Architecture",
          level: "Introductory"
        },
        {
          title:
            "Continuous Security: Integrate security tools into your DevOps Pipeline",
          presenter: "Bill Dinger",
          summary:
            "OWASP, a nonprofit composed of security experts from around the world, provides a number of free and open source tools designed by security experts to help your secure your applications. Learn how to integrate these tools - from active penetration tests to project dependency checkers - into your DevOps pipeline and deliver on the promise of continuous security.",
          room: "2202",
          category: "Security",
          level: "Introductory"
        },
        {
          title: "10 Opinions For Creating More Maintainable .NET Apps",
          presenter: "Scott Sauber",
          summary:
            "As an application adds more and more features, if you're not careful, it can quickly spiral into becoming the application no one on the team enjoys working on. This session is structured as a series of lightning talks on various topics to help you improve the maintainability of your .NET applications. We'll discuss libraries and best practices to help with folder structure, validation, ORM's, automated testing, code flow, DevOps, microservices, and more. By the end, you should be able to take a few ideas away that you can start implementing immediately when you get back to the office",
          room: "2203",
          category: ".NET",
          level: "Introductory"
        },
        {
          title: "CI/CD with Github Actions",
          presenter: "Chris Ayers",
          summary:
            "Learn about building applications using Github Actions. We will learn diverse ways to trigger our builds, build different of types of applications, and matrix builds. We'll be writing our pipelines in YAML and learning how to share data between steps, conditionals, and caching. Finally we'll learn how to deploy our code to different places (PaaS, Containers).",
          room: "2204",
          category: "DevOps",
          level: "Intermediate"
        },
        {
          title:
            "Spring Boot Omakase: A fast-paced chef's choice dive into fun & useful topics!",
          presenter: "Mark Heckler",
          summary:
            "Spring Boot has revolutionized the Java space and continues to do so, evolving constantly to increase developers' superpowers and advance the state of production-grade software development. Presenting a dynamic technology before vastly different audiences often limits what can be proposed & presented. Let's fix that! This session is an omakase, a chef's choice of key points and latest/coolest capabilities for developers in the Spring Boot ecosystem. Known by French chefs as _m’étonner_ (Astonish me!), the goal is to combine useful patterns and new possibilities in one fast-paced live-coding adventure from which everyone leaves with something tasty to chew on. Come for the apps, stay for dessert, leave satisfied & excited for the next course of production software!",
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: "Cloud Cost Optimization for Engineers",
          presenter: "Jeremy Campbell",
          summary:
            "This session will provide a crash course in cloud cost management and optimization. It will address the role engineers play in managing cloud costs. Without care and attention from the right teams, especially includes software engineers, these costs can quickly get out of hand. We will look at the challenges of managing cloud costs, review the functions within an organization and the roles they play in its management, and then look closely at the responsibility of developers. We will look at strategies and ideas for making this a natural part of software engineering processes, which will lead to a decrease in cloud costs and increased confidence in the technology team's management of funds. As a case study, we will look at SPINS LLC's journey in reducing cloud costs from a peak of 6% of average annual receivable down to 4%, and dropping. This was done while supporting rapid growth and transformation in the health food industry related to changes in consumer trends with COVID, as well as supporting substantial innovation and new product development.",
          room: "2206",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title:
            "Caring for New Users: Adoption, Onboarding, Empty States, Feedback, Friction, Hooks and More!",
          presenter: "Scott Showalter",
          summary:
            "What does it take to craft a great experience for new users of our product? Once we're ready to move past MVP-stage, having learned what we needed to learn, there's still more to think about than merely what capability to give our earliest adopters and how that translates into functionality for the team to build and scale. Even if you're late to the game, there are always new users to care for with established products too. Enter the concept of New UX. It's a quintessential component of product design. This session explores the idea of transforming new users into power users. It'd be nice if we could all hone our intuition skills and create absolutely 100% intuitive products 100% of the time, but that's more fantasy than reality. So we must leverage techniques that help us make our new users feel awesome! You'll learn: * How to overcome the struggle to drive adoption * Considerations for short attention spans, limited scratch memory, temporary disabilities, and avoiding subjecting new users to cognitive load & burnout. * The many types of onboarding, and which method is optimal for our users' in learning how to use our app. * Permission priming, permission pouncing and other concerns for user privacy when our apps need access beyond various device limitations. * What empty states are, and how you need to think about them in the context of your product and your users' goals in order to make them useful as well as delightful. * Sources of friction in the experience and in growing our user base. * How we can keep new users coming back, through consideration of habit formation tactics",
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title: "Approaching Your Career (and Life) as an Adventure",
          presenter: "Jonathan J. Tower",
          summary:
            "In the course of a career, everyone experiences some adventures, and sometimes a few misadventures too. Great people who cross your path, some good luck, and unexpected opportunities can all play a role in the trajectory of your professional life. Come hear how these twists and turns lead to my trip around the USA for an entire year living in an RV, working remotely, and visiting all of the lower 48 states. You'll be inspired hearing about this outside-of-the-box life path and hopefully, it will inspire you in your own adventure, helping you to see your own career in a different light, and encouraging you to join in on your own adventure already in progress.",
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title:
            "I Spent Millions On Video Game Development So You Don't Have To",
          presenter: "Heather Wilde",
          summary: `No matter what type of technology background you have, one thing the majority of us have in common is at some point in time you probably thought it would be "neat" to publish a game. I started out in the world of game design, working with major studios to create some pretty awesome titles.

          In this talk, I'll take you through what goes into creating a game -- the teamwork, the spiraling budgets, the secrecy, and the stress when years of your life can depend on the outcome of the whims of reviewers.
          
          You've seen Mythic Quest, now hear the real story.`,
          room: "2209",
          category: "Project Management",
          level: "Introductory"
        },
        {
          title: "AWS: IoT Core + Lambda + DynamoDB = Webscale",
          presenter: "Eric Neunaber",
          summary: `Modernizing an application is easy. Modernizing an application to work globally and at scale, well it sounds hard but it might be easier than you think. In eight months our small team of seven (design, dev, & QA) went from a blank AWS account to a working product. The application needed to ingest IoT data from across the globe and needed to provide the ability for its users to make decisions within a matter of seconds. This talk will explain the architecture, the reasons we choose the services we used, and lessons we learned.`,
          room: "2210",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title:
            "Introduction to Natural Language Processing and Conversational AI",
          presenter: "Anup Agrawal",
          summary:
            "Voice is the next disruptive technology. Businesses should leverage it to gain a competitive advantage. In this session, you will learn how conversational AI (like Alexa and Siri) can understand you. You will learn what is Natural language processing (NLP). What are the different parts of NLP are? How can you easily build your NLP systems using spaCy in Python.",
          room: "2211",
          category: "Data Science",
          level: "Intermediate"
        },
        {
          title: "The True Value of Test Automation: How, Why, and the ROI",
          presenter: "Marcus Merrell",
          summary: `Are you considering test automation, but don’t know where to start? Are you convinced of the value of test automation, but need help convincing the rest of your organization to make the shift?

            Wherever you are in your test automation journey, one question that often arises is “what’s the return on investment?” While there is a cost to making the shift, it’s important to also consider the holistic impact. Starting with the somewhat straightforward calculation you can make about cost, Marcus will walk through how you can start to view test automation as a deeply impactful process - offering not just a "return" but a level of transformational confidence in your software.
            
            Drawing on years of direct experience, as well as extensive interactions with Sauce Labs customers, Marcus will discuss how and why to embed test automation at your organization and, in the process, change the question from "what's the ROI?" to "how could we ever have lived without test automation?"`,
          room: "2214",
          category: "Testing and QA",
          level: "Introductory"
        }
      ]
    },
    "11:00am": {
      talks: [
        {
          title:
            "🔥 Smokin' .NET to Perfection 🔥 Building a smart wood pellet smoker with Raspberry Pi and .NET",
          presenter: "Cam Soper",
          summary: `Kansas City, Missouri, the Paris of the Plains, is known for jazz, culture, history, fountains… and especially barbecue! Every Kansas Citian has strong opinions on which local BBQ joint is best and which spices and sauces to use when barbecuing at home. Those who are truly serious about barbecue invest in their own smoker.

            So what does a Kansas City geek do when his wood pellet smoker isn’t performing up to expectations?
            
            Come see how I created a custom controller for my wood pellet smoker using .NET, a Raspberry Pi, and a soldering iron. The result is a smoker that’s smarter about how it cooks your food. It notifies you when your food is cooked or if there’s a problem with the fire. You’ll leave this session with your curiosity satisfied, but your hunger for ribs piqued!
            
            I’ll cover:
            
            - The hardware I used.
            - An industrial process algorithm in .NET.
            - Using the cloud to securely monitor and control this IoT device.
            - My secret rib recipe*.
            
            * Not really.`,
          room: "2215-A",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "Built-In Testing in Go is More Than Just Passable",
          presenter: "Scott McAllister",
          summary:
            "Testing is vital to any software project. Automated tests help improve confidence in code changes as you increase project velocity. Finding the right tools and libraries can be an arduous process. And, in most languages, adding testing means adding a pile of new dependencies to the project. But, have you ever tried the tools built right into the language? One of the beauty's of the Go programming language is built with productivity in mind. The creators of the language have included many tools that make developers productive--including a robust testing framework. Come see how easy it is to get started with Go's testing library and see many of the features that will keep you using it in all your projects..",
          room: "2215-B",
          category: "Other Languages",
          level: "Introductory"
        },
        {
          title: "Can Web Components Replace Our JavaScript Frameworks?",
          presenter: "Burton Smith",
          summary:
            "Web components haven't had a lot of love since their inception. Now, with improved browser support, composition tools, and the increasing need for framework-agnostic components, teams are starting to give them a second look. Find out what web components are capable of and how they can add value to your applications.",
          room: "2215-C",
          category: "JavaScript",
          level: "Introductory"
        },
        {
          title: "The Role of an Architect",
          presenter: "Ted Neward",
          summary:
            "What is the role of an architect in a software project? This question has plagued many a software organization (and even those who do the job), and provided loads of entertainment. In this presentation, we aim to explore the intersection of software architect with the worlds of architecture, psychology, business, and even music. By the end, though, you'll have a clear idea of what an architect is, does, and needs.",
          room: "2201",
          category: "Architecture",
          level: "Intermediate"
        },
        {
          title:
            "Protecting Your Jamstack Applications - A Few Concepts You Need to Know",
          presenter: "James Quick",
          summary: `In the last couple of years, the Jamstack has drastically changed the way that we build websites. With these changes happening so quickly, are yourself... Are you caught up on best practices for protecting your Jamstack applications?

            In this talk, we'll explore authentication and authorization and how those two have changed with the evolution of the Jamstack. We'll also discuss how to track and validate users client-side and server-side using cookies, sessions, and JSON Web Tokens. Join this talk to make sure you're not behind the times when it comes to modern authentication in the Jamstack.`,
          room: "2202",
          category: "Security",
          level: "Intermediate"
        },
        {
          title: "Kill All Mutants! (Intro to Mutation Testing)",
          presenter: "Dave Aronson",
          summary: `How good are your tests? Would they still pass if the tested code was changed? If so, there may be problems with your code, your tests, or both!

            Mutation Testing helps reveal these cases. It makes lots of slightly altered versions, called "mutants", of each of your functions. If any mutants let all of the function's unit tests succeed, that implies flaws. Your code might not be meaningful enough that the mutant's mutation would change the behavior, your tests might not be strict enough to catch the difference that the mutation made, or both!
            
            This talk will tell you how to use mutation testing, its benefits, drawbacks, inner workings, and history. There will be several examples (in clear pseudocode), and a list of tools for popular languages (including Python, Ruby, Javascript, Java, C++, C#, *anything* that compiles via LLVM, and more).
            
            You will come away equipped with a powerful new technique for making sure your tests are strict and your code is meaningful.`,
          room: "2203",
          category: "Testing and QA",
          level: "Avanced"
        },
        {
          title: "Top new CNCF projects to look out for",
          presenter: "Annie Talvasto",
          summary: `The Cloud Native Computing Foundation (CNCF) bought you such fan favorites like Kubernetes & Prometheus. In this talk Annie Talvasto will introduce you the most interesting and coolest upcoming CNCF tools and projects.

            This compact and demo-filled talk will give you ideas and inspiration that you can 1) discover new technologies and tools to use in your future projects as well as 2) be the coolest kid in the block, by being up to date with the latest and greatest.`,
          room: "2204",
          category: "DevOps",
          level: "Introductory"
        },
        {
          title: "Morphia: The Power of Java, The Flexibility of MongoDB",
          presenter: "Justin Lee",
          summary:
            "One of MongoDB's biggest selling points is its easily malleable schemas. Typically this really shines using a more dynamic language such as javascript or python. But with tools like Morphia, you can have that same agility but with all the type safety we all love and cherish. In this session, I'll introduce you to the Morphia ODM and walk through some example uses showing how to put Morphia, and MongoDB, to work for you.",
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title:
            "AWS Lambdas in Your Architecture - Integration Considerations",
          presenter: "Sean Whitesell",
          summary: `AWS Lambdas provide a reliable way of integrating service-based applications into your overall design. As reliable and scalable as they are, there are many factors to consider when designing your serverless architecture with Lambdas.
            In this talk, we will get started with AWS Lambdas and integrate them into a larger architecture. We will cover language options, though the demo will be using .NET. We will also look at many features of Lambdas, such as triggering, scaling, networking, and runtime considerations.
            I will demo Lambdas calling other Lambdas, using API Gateway, interaction with DynamoDB, and Amazon Simple Queuing Service (SQS).`,
          room: "2206",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title:
            "Sustainable Accessibility: Integrating accessibility checks into your CI/CD pipeline",
          presenter: "Ashley Stove",
          summary: `Accessibility is important, not only for your users but also to meet legal requirements for certain levels of compliance. Unfortunately, most companies lack developers and quality assurance analysts who are trained to produce and test accessible user interfaces to industry-standard levels. Furthermore, dev and qa testing for ADA compliance takes time, and can often be forgotten or de-prioritized by companies that have limited resources. In this talk I will discuss:
            1. Why accessibility is important
            2. The accessibility standards put forth by the ADA in WCAG 2.1
            3. How we have leveraged automated accessibility testing tools into our CI/CD pipeline
            4. The impact this integration has had on our ability to maintain website accessibility across multiple projects, even when developers have little to no accessibility training going in.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Intermediate"
        },
        {
          title: "Presentations, Storytelling, and How Not to Suck at it",
          presenter: "Ash Banaszek",
          summary: `Learn from Sr UXerAsh Banaszek on how to give impactful and interesting technical talks. Ash is consistently rated highly by conference-goers as an informative and entertaining speaker, and is a decorated Toastmaster winning awards at Area and Division levels for humorous, impromptu, tall tales, and international speaking categories. In this talk, Ash will share her tips on organizing presentations, increasing engagement, when to add humor, how to fold a story into your tech talk, and using images effectively. Want to be a better presenter? After this talk you may not be a keynoter, but you definitely will "not suck at it."`,
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Data Modeling in an Event Centric World",
          presenter: "Chris Condron",
          summary:
            "When moving to an Event Centric data model it often feels like all of the data modeling tools and skills we have built over the years in more traditional systems are lost. In truth it is the exact opposite. Not only can we bring all of our hard-won knowledge on Data Modeling with us, Event Centric systems give us new and exciting Data Modeling tools that enhance our traditional toolboxes. With practical examples we walk a straight line from traditional relational data models into best practice Event Models. In addition, we can apply well-known rules from traditional modeling to understand why these new models are ideal for various usages.",
          room: "2209",
          category: "Data",
          level: "Intermediate"
        },
        {
          title: "Yarn 2: a next generation package manager",
          presenter: "Michael Richardson",
          summary: `The recently released Yarn 2 brings a host of great new features for JavaScript developers. The slick new CLI, more readable output, clear errors, and significant enhancements to workspaces make Yarn 2 a solid upgrade from the already impressive Yarn 1. But with an incredible feature called Plug-n-Play (PnP), Yarn 2 takes a massive leap ahead.

            Have you ever thought "I really love dealing with this ginormous node_modules folder." No, and no one else has either! With Yarn 2 and PnP you can forever be free of node_modules. PnP dispenses with the node_modules folder entirely and creates an opportunity for perfect module resolution, faster startup, and instant package installs. Imagine cloning a node app and running it immediately, no install step required. With PnP and Yarn 2, this dream is a reality.
            
            Come away with an overview of all the new features and the knowledge you need to migrate your app to Yarn 2.`,
          room: "2210",
          category: "JavaScript",
          level: "Introductory"
        },
        {
          title: "Coaching for the Agile Journey",
          presenter: "Sarah Harper",
          summary: `The journey from “What’s Agile?” To “It Depends” is one that agilists experience multiple times as part of our work. Each experience is different but closely parallels the spiritual path humans take as we grow into mature adults. Have you ever had a technique work for one situation and not for another and could not figure out why? Understanding the psychology of how humans form spiritual beliefs can help us as coaches to tailor our methods for the situation.

            In this talk, participants will learn about 7 stages that individuals and teams move through along their agile journey and how to coach for those stages. Coaching to the correct stage will ensure that you meet the needs of the individual or team at that time. You will leave with a better understanding of where you are on your journey (and how you got there) and where your teams may be on theirs.`,
          room: "2211",
          category: "Project Management",
          level: "Intermediate"
        },
        {
          title:
            "Hackers are Red, Pentests are Blue, I've got some tools, how about you?",
          presenter: "Amelia Wietting",
          summary: `It's dangerous to go alone into the wide world of technology and computers these days. There are all sorts of cool...often free...cyber-security tools roaming about which are used for amazing, humorous, and sometimes "nefarious" things. These tools can find existing flaws, secure open doors automatically, enumerate endpoints, and even execute automated penetration tests.

            Come with me on a journey through the mind of a hacker in a Corporate world. In this session, we will be discussing the tools of the trade for red, blue, and ANY team working to secure their tool stacks and development pipelines, as well as tools your adversaries have access to and use to hunt for/exploit flaws.`,
          room: "2214",
          category: "Security",
          level: "Introductory"
        }
      ]
    },
    "12:00pm": {
      talks: [],
      lunch: true
    },
    "1:00pm": {
      talks: [
        {
          title: "Using Microsoft Azure to fight COVID-19 in New York",
          presenter: "Zach Gardner",
          summary: `Working as a consultant for hospitals in NYC, COVID-19 has been a part of my daily life for the past year and a half. The response to COVID-19 has transformed how technical teams immediately align themselves with the needs of the hospital and the patients it serves. I've had the opportunity on the front line to use Microsoft Azure and supporting technology to assist our doctors and nurses to help fight COVID-19. The TTM (time to market) that Azure gives, the real time communication capabilities of Microsoft Teams, and the reach that is possible with Microsoft Forms allowed us to flow with the daily changing needs to address the pandemic.

          This session will detail my experiences, both things that work well and the hindsight I've gained, with how our hospitals responded to COVID-19 in NYC. Although we hopefully won't go through another pandemic like this in our lifetime, the things I learned during this year and a half has guided architecture for future applications I design.`,
          room: "2215-A",
          category: "Cloud",
          level: "Advanced"
        },
        {
          title: "Automate all the things",
          presenter: "Brent Stewart",
          summary:
            "Home automation has been an interest of mine for many years, but it has always been a frustrating mashup of proprietary systems. Performing the simplest of tasks was often impossible or required herculean effort to accomplish. This has improved over the last few years as we have seen an influx of opensource home automation projects and standards based communication. This new opensource software and hardware has opened up many opportunities to create increasingly advanced solutions. In this talk I will share my experiences of one of my most recent projects where I built out a lighting/security control system for my workshop. The technologies we will look at include: Home Assistant, Arduino, EPS32, Raspberry PI, MQTT, LIFX, 10v dimming, POE cameras, voice assistants and more. My solution combined many off the shelf components, open source software, a bit of custom code, and even some homemade hardware. Join me for a fun discussion on how we can automate all the things.",
          room: "2215-B",
          category: "Other Languages",
          level: "Introductory"
        },
        {
          title: "Rethinking REST Practices with GraphQL",
          presenter: "Mat Warger",
          summary:
            "GraphQL has proven to be a viable technology since its inception at Facebook but is now going mainstream. It is a specification and toolset for querying your data in a structured way. But - how do you get started? In this session, you will get a soft introduction to GraphQL and see how it can change the way you think about your data. You will see how it provides a flexible, self-documenting API that can serve as an efficient alternative to RESTful web services. No experience with GraphQL is necessary, but a general understanding of REST (and APIs in general) is a plus.",
          room: "2215-C",
          category: "JavaScript",
          level: "Introductory"
        },
        {
          title: "Fixing Distributed Systems Fail",
          presenter: "Jimmy Bogard",
          summary: `It seemed like an easy feature to implement, a checkout page to place an order. But this payment gateway has a simple API, so we added that. And this email service provider makes it possible to send an email with one line of code! Finally we can notify downstream systems via a message queue. The code looks simple, 6 little lines of distributed systems code.

            But those lines hid a dark secret that we only found after launching. Customers complained they didn't get their email. The back end system wasn't getting updated from our messages. And by far the worst of all, customers complained they saw an error page but still got charged!
            
            Clearly it wasn't as easy as calling a few APIs and shipping, we actually need to worry about those other systems. In this session, we'll look at taking our 6 lines of distributed systems fail, examining the inevitable failures that arise, and possible mitigating scenarios. We'll also look at the coupling our code contains, and the ways we can address it. Finally, we'll refactor towards a truly resilient checkout process that embraces, instead of ignoring, the fallacies of distributed computing`,
          room: "2201",
          category: "Architecture",
          level: "Advanced"
        },
        {
          title: "Hacking OAuth: Pitfalls and Remedies",
          presenter: "Micah Silverman",
          summary: `Elevator Pitch
            OAuth 2.0 is the most widely used standard for secure authorization on the Internet for modern Web and Mobile apps. There are a lot of pitfalls that can lead to an insecure app.
            
            Description
            In this talk Micah gives a brief overview of OAuth and its mechanics. Then he leads you through a number of risks and remedies to best secure your applications. This isn’t just theory, but the practical application of certain risks and how to configure OAuth and write your code to mitigate those risks.`,
          room: "2202",
          category: "Security",
          level: "Intermediate"
        },
        {
          title: "Deep dive into Angular Builders",
          presenter: "Mike Hartington",
          summary: `One of Angular’s best features, is also one of it’s most secretive. How does your project go from a bunch of files, to an amazing app that you can deploy? The secret? Builders. We’ll not only look at how this happens, but take a look at the API involved so you can write your own builder and integrate other tools that fit your needs.`,
          room: "2203",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Understanding How Your CPU Thinks",
          presenter: "Chris Gardner",
          summary: `You know all those algorithms you take for granted? I'm not talking about those boring algorithms you learned in school. I mean things like adding two numbers or converting a number to to text. Have you ever wondered how the computer really does that?

          I recently embarked on a journey to create a math library that would efficiently handle large numbers. Along the way, I had to figure out how some of these algorithms really worked, and was completely surprised by their ingenuity. The end result was a better appreciation for all those library methods that are "just there" and a new approach for solving problems in my own code.
          
          I this session, I will share all these findings with you. From the surprisingly mundane to the completely insane, I invite you join me beyond the operators and into the algorithms. You will leave this session with a better understanding of low level code that will help you write better code.`,
          room: "2204",
          category: "Other Languages",
          level: "Introductory"
        },
        {
          title: "Intro to testing with JUnit 5",
          presenter: "Jeanne Boyarsky",
          summary:
            "Unit testing is very important in writing good code. This talk introduces JUnit 5 and shows how to write unit tests effectively. Attendees will also come away with common patterns for writing good tests and even brainstorm some of their own.",
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: ".NET Workflows - What are they, and Why Should you Care?",
          presenter: "Bill Holman",
          summary: `Many business processes are so dependent on other processes. It's hard to keep them straight even after you understand them! And, as the business processes change we not only have to keep up with those changes but also mitigate effects it has on other processes and other systems. Leveraging workflows is a great way of understanding business processes. But, what is the best way for us developers to understand and work with workflows?

          In this talk, you will understand how to evaluate existing processes and how to create new ones. You will also see how .NET Workflows empowers us developers to more easily manage workflows to make our lives less stressful. At the end of the talk you will have resources to help you as you implement the strategies and tools mentioned.`,
          room: "2206",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title:
            "Now You're Speaking My Language: Getting Started with Localization",
          presenter: "Bill Parrott",
          summary: `The world is getting smaller, and if you build anything for the web, it is becoming increasingly important to ensure your content reaches as many people as possible. One piece of this puzzle which is commonly overlooked is localization. In this session, we will talk about the importance of localizing your apps, but it doesn't end there. We'll talk about what actually goes into the process of localizing an application (hint: it's more than just translating strings). We will discuss planning and pitfalls, then wrap things up with strategies for localization across multiple products or teams. There will be some code examples using React and React Intl, but the broader concepts can be applied to any web application.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title: "A Candid Account of Anxiety, Depression, and Coding",
          presenter: "Jesse Weigel",
          summary: `I am a developer who also has depression and anxiety. Sometimes I feel ok, and sometimes it is a struggle to move. Based on my interactions with other developers through livestreams, talks, and conferences, I believe that there are many others who deal with these issues. Depression and anxiety are common, but not commonly talked about. I would like to share my struggles, triumphs, and failures with depression and anxiety in the context of coding, and offer advice on managing and talking about these issues.

          The talk will roughly follow this order: - Brief intro - Some statistics about depression and anxiety - My own struggle with depression and anxiety - Impact of depression and anxiety on coding - What helps and what makes things worse - How to talk about anxiety and depression - Question and Answer`,
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title: "Another AI Path: Building Genetic Algorithms in C# and .NET",
          presenter: "Chris Woodruff",
          summary:
            "Genetic Algorithms are based on the ideas of natural selection and genetics. This branch of Artificial Intelligence provides a search with historical data to direct the search into the region of better performance in solution space. They are commonly used to generate high-quality solutions for optimization problems and search problems. Learn how to develop and use this type of AI for real-world problems and solutions using C# and .NET on your favorite cloud platform.",
          room: "2209",
          category: "Data Science",
          level: "Advanced"
        },
        {
          title: "Using C# Expression Trees in the Real World",
          presenter: "Spencer Schneidenbach",
          summary: `Entity Framework is the de facto data access standard in .NET, and for good reason – its simplicity and power enables anyone to quickly write and execute strongly-typed queries using LINQ. Have you ever wondered how Entity Framework translates even the most complicated of LINQ queries to SQL? The answer is simple – expression trees.

          Used by many libraries we know and love (including EF, AutoMapper, and NHibernate), expression trees provide a lot of power in an easy-to-use API surface. In this session, Spencer will unravel the mysteries of expression trees. Attendees will learn what expression trees are, how to create them, and how libraries like Entity Framework and AutoMapper use them to perform routine tasks.`,
          room: "2210",
          category: ".NET",
          level: "Introductory"
        },
        {
          title: "Which Software Practices Are Right For Your Team?",
          presenter: "Rob Kraft",
          summary: `Scrum, Kanban, TDD, retrospectives, velocity, metrics, Code Reviews. Do you find yourself sitting in sessions at conferences like this listening to speakers sharing good explanations for software practices, but you don't think the practices they recommend are going to work for your team? You're not alone. In this session I will explain what is wrong with everything. Why the solid advice from your last session may be bad advice for your team, and most importantly how to identify why the advice may not apply to you. I will cover the impacts that different deployment models, team structures, cultures, customers, and other variables have upon the practices that work best for you. Come learn how to focus on developing software efficiently and avoiding development dogma.`,
          room: "2211",
          category: "Project Management",
          level: "Intermediate"
        },
        {
          title: "Exploring TouchDesigner",
          presenter: "Ann Gaffigan, Edgar Esparza",
          summary: `TouchDesigner is a node based visual programming language for real time interactive multimedia content. It's been used by artists, programmers, creative coders, software designers, and performers to create performances, installations, and fixed media works.

          At Dimensional Innovations (DI) we are using TouchDesigner for augmented reality photo ops, generative art on large-scale LED screens and projections, and more. Come see how our team members got started learning this platform and language in order to deliver unique interactive experiences, by applying their passion for music and art!`,
          room: "2214",
          category: "Other Languages",
          level: "Introductory"
        }
      ]
    },
    "2:15pm": {
      talks: [
        {
          title:
            "I Want to Believe: Making Angular Apps More Performant with Scully",
          presenter: "Jennifer Wadella",
          summary: `If you’re looking for ways to improve performance of your Angular applications, look no further than Scully. Scully is the JAMstack tool the Angular community has been craving to make pre-rendering and serving static pages a breeze, with a great supporting community and a variety of plugins to meet any application setups needs. This talk will teach you about JAMstack concepts and how to get started with Scully to make your Angular applications more performant today.`,
          room: "2215-A",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title: "Top tactics to build advanced .NET microservices",
          presenter: "Rodrigo Díaz Concha",
          summary: `Cloud-native architectures, such as microservices, are becoming the default standard in the software industry. Yet, when you are building these kinds of solutions, things get pretty chaotic very quickly. Typical tasks in other architectures that you are accustomed to, such as communication between components and designing the proper boundaries, are some of the challenges you face when adopting this architectural style.

            After attending this session, you will be able to identify some of the top tactics to create advanced and robust microservices by using the .NET development platform, Domain-Driven Design principles, Event-Driven Architecture, CQRS, and Event Sourcing.`,
          room: "2215-B",
          category: ".NET",
          level: "Advanced"
        },
        {
          title: "C# Past, Present, and Beyond",
          presenter: "Jim Wooley",
          summary:
            "With the modern open source C# Compiler we've seen so many new language features it's hard to keep up. In this session we'll survey as many of the newer language features from C# 6 string interpolation to C#9 Records and see how you can take advantage of them in your applications today.",
          room: "2215-C",
          category: ".NET",
          level: "Intermediate"
        },
        {
          title: "System Observability Across Your Tech Stack",
          presenter: "Dennis Stepp",
          summary: `"Hmmm, this behavior is odd." "What's causing this to happen?" "I have no idea what happens to this request after it's processed."

            Does this sound familiar? Did you agonize for months trying to find the answer? Did you just sweep it under the rug for someone else to eventually notice?
            
            In this presentation I will provide you with some helpful tips to instrument and monitor your code bases and key services that power your software. We'll look into monitoring Apache Kafka, Java SpringBoot apps, Python apps, Kubernetes, Postgres, and more with tools such at Prometheus, Graphna, and Loki. We'll also briefly touch on system observability as it relates to the business domain and how that can lead your internal users to discover opportunities for future product offerings.`,
          room: "2201",
          category: "Architecture",
          level: "Intermediate"
        },
        {
          title:
            "Identity and Access Management with OAuth 2.0 and OpenID Connect",
          presenter: "Jerry Yoakum",
          summary: `Identity and access management (IAM) comprises policies and tools for managing digital identities and controlling access to information and functionality. Two of the fundamental concepts of IAM are authentication and authorization.

            OAuth 2 is an open standard for authorization. It allows an application to be granted access to resources from another application and share its own resources with other applications. OpenID Connect (OICD) is an identity layer that sits on top of OAuth 2. It can be used to verify the identity of an end-user. Let us take a look at how OAuth 2 and OpenID Connect work together to enable us to implement applications that can integrate with a centralized identity provider/authorization server for the purpose of handling authentication and authorization.`,
          room: "2202",
          category: "Introductory",
          level: "Security"
        },
        {
          title: "Practical Application of The Modern Testing Principles",
          presenter: "Melissa Eaden",
          summary: `Alan Page and Brent Jensen have designed a set of principles that might help guide testers and the future of testing. This session would do a dive into those principles and what they would mean for the day-to-day work testers would shift to do and how they can be applied as teams switch gears to incorporate all the things possible with a continuous integration and delivery pipeline.`,
          room: "2203",
          category: "Testing and QA",
          level: "Intermediate"
        },
        {
          title: "ChatOps and DevOps: How to Use Comms as Incident Response",
          presenter: "PJ Hagerty",
          summary: `The most important tool in your DevOps toolbox is communication. Without it, nothing can be accomplished, especially resolving incidents when they occur.

            In this talk, we will discuss how to use a comms platform to tie-in playbooks, integrate the DevOps processes in place, and bring together remote teams to work together as if they were in the same room.`,
          room: "2204",
          category: "DevOps",
          level: "Intermediate"
        },
        {
          title: "Quarkus: Why all the ruckus?",
          presenter: "Justin Lee",
          summary: `Quarkus is one the hottest new frameworks for microservice application development. It has radically changed how Java developers approach building applications for the cloud and challenged traditional notions of how Java application development works. By now many of you have probably read an article or seen a video or presentation about it. But the quarkus team isn't resting on its laurels. The 2.0 train has a number of new features and advancements to entice the undecided. In this session, we'll talk about what quarkus is and the many advantages it can bring to your development including microservices all the way "down" to command line applications. Quarkus does it all and does it with panache!`,
          room: "2205",
          category: "Java",
          level: "Intermediate"
        },
        {
          title:
            "Integration beyond point to point; Implementing integration patterns using Azure",
          presenter: "Eldert Grootenboer",
          summary: `Connecting systems is easy, we just let everything talk to each other! That is, until we actually start growing our environment, and all of a sudden ended up with everything communicating with each other, and having lost all overview.

            Instead, we should think about how we can set up a controlled integration platform, which allow us to easily bring in new systems and phase out old ones. A platform which provides us insights into the communication happening, and manipulate the messages flowing through as needed. And which provides us with the capabilities to re-use our logic and connectivity.
            
            In this session we will have a look at various integration patterns, and how we can implement these on Azure. Expect a session which will dig deep into the Azure Integration Services, combined with other PaaS and serverless components to make our integration life a lot easier.`,
          room: "2206",
          category: "Cloud",
          level: "Intermediate"
        },
        {
          title:
            "Web Components - The solution to your white label branding problems",
          presenter: "Kevin Miller",
          summary: `How many times has a client said, "We need it to look like our site." Technical sales always responds with, "Of course we can do it! Why our developers are so efficient we board more clients before breakfast than other companies do all day!" Once they tell you this, you load up your trusty CSS files and begin customization . . . . One property at a time. It never goes that well and is never straight forward. Why did the previous dev hardcode THAT green in the tag? What does this change break? Then the client comes back and says, "We don't like YOUR layout, can you move the navigation to the right?" Web components can help fix that. Reduce the amount of time to customize your site from weeks to days, and reduce the need, responsibility, and even the ability of developers changing and breaking the site's design.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title: "Lessons Learned From Transitioning Career",
          presenter: "Kara Luton",
          summary: `What do ballet, music publicity and front end engineering have in common? More than you would think. Five years ago I didn’t know what a div was but I did know I needed a career change. I stumbled upon the tech world, enrolled in a bootcamp and haven’t looked back.

            Non-traditional paths are becoming more common place in the tech industry. There are more bootcamp and self-taught devs than ever before. In this talk, we’ll discuss what it was like for me to transition to tech from not one, but two completely unrelated careers, how I bring my past experiences into my current role and why you should consider hiring more devs with non-traditional backgrounds.`,
          room: "2208",
          category: "Human Skills",
          level: "Introductory"
        },
        {
          title:
            "Consuming Endangered Pachyderms: A Product Approach to Tech Debt",
          presenter: "Jennie Ocken",
          summary: `You are buried under a mountain of debt. You are anxious and feel like you are being set up for failure but you can’t pinpoint why. It’s preventing you from building your dreams. It’s making stakeholders unhappy. Every feature is a nightmare to build and you doubt yourself as a product owner. The development team is about to stage an armed revolt. Your software is rotting under you and it’s going to cause a premature death for your product. How did things get this bad and what should we do about it? Or, even better, how do we prevent it from ever getting this bad in the first place? How do we start eating that tech debt elephant?

            Whether you are a product owner or a developer, understanding how tech debt is holding back your business objectives will help you start digging out and creating a better product for everyone. This session will help you articulate what debt you have, formulate a plan for addressing it, and communicate that in business friendly terms. All systems have tech debt. Not all tech debt is made equal and not all of it can, or should, be addressed. It’s time we start talking honestly about what debt is, how it affects the product, and what to do about it.`,
          room: "2209",
          category: "Project Management",
          level: "Intermediate"
        },
        {
          title:
            "Growing in the Cloud - My Journey to Create Hot Sauce Using IoT, Messaging & Micronaut",
          presenter: "Todd Sharp",
          summary:
            "It all started with a small project to pass the time during The Great Quarantine of 2020. I bought some chiles from the local farmer’s market (with proper face coverings and social distancing, of course), fermented my first batch of hot sauce, and shared it with a few friends around the globe. I had no idea the sauce would be such a massive success, so I resolved to build on that triumph in 2021. But this time, I knew that I would have to start from the very beginning and grow the chiles myself. Of course, this presented the wonderful opportunity to combine two of my life’s greatest passions - the culinary arts and technology - to ensure that my growth operation was the ultimate success. Join me in this session where I show you how I used a microcontroller, some sensors and the cloud to monitor and automate the germination and maturation of this year’s crop.",
          room: "2210",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title:
            "Going Schema-less: How to migrate a relational database to a NoSQL database",
          presenter: "Chad Green",
          summary:
            "There can be a lot of great benefits of developing with a NoSQL database over a relational database. In this presentation, you will learn about those benefits and also the potential pitfalls. There will be demonstrations where we take relationally developed data, restructure it into a NoSQL database (Cosmos DB in particular), and develop an application to work with that data.",
          room: "2211",
          category: "Data",
          level: "Intermediate"
        },
        {
          title: "Artificial Intelligence: Preparing Your Career for AI",
          presenter: "Matthew Renze",
          summary: `Whether you realize it or not, we are currently entering the era of artificial intelligence. AI technologies are radically transforming our lives, our work, and our world. However, most of us have not yet learned how to leverage the power of this new technology.

            In this session, you’ll learn the five things you should be doing right now to prepare for the coming wave of AI-enabled automation:
            
            1. Educate yourself about AI
            2. Update your career for AI
            3. Invest in an AI-first economy
            4. Use AI ethically and responsibly
            5. Adapt to what comes next
            
            The future belongs to those who are willing to invest in AI now. Don’t get left behind!`,
          room: "2214",
          category: "Data Science",
          level: "Introductory"
        }
      ]
    },
    "3:30pm": {
      talks: [
        {
          title: "Living in a Bug-Free World with Open-Source",
          presenter: "Claire Novotny",
          summary:
            "You don't have to be a Rockstar Developer™ to be a catalyst for change. Open-Source Developers are people like you and me, just ordinary people. Some are paid by companies to maintain projects; others do passion projects in their spare time. Even if you use open-source in your day job, you can still give back to the community where you are able. This improves the ecosystem during your regular course of work for the mutual benefit of the community. When you fix open-source issues, you’re removing a bug from the world for everyone, and others will do the same for you. This can be applied to internal teams being open-source within your company; even if your company doesn't permit external contributions, consider how an open-source mindset can help improve cross-team collaboration and velocity. Fix issues faster by submitting a patch instead of creating a ticket. You don’t have to look far to find an open-source project…I know you’re using at least one open-source tool because .NET is open source! Find out how adopting an open-source mindset helps us get closer to creating a bug-free world.",
          room: "2215-A",
          category: ".NET",
          level: "Introductory"
        },
        {
          title: "Docs as Codee",
          presenter: "Carl Chesser",
          summary: `Documentation is a valuable means of scaling knowledge through your teams. Teams are continually challenged to do more, with less. However, making lean maintainable documentation is a challenge, especially when documentation systems are not aligned to your development toolchain. Any point of friction in maintaining your documentation increase your probability of having out-of-date and untrustworthy documentation.

            In this talk, we will explore how you can start managing your documentation like code. This will walk through the history of how different companies have approached improving their internal engineering documentation and the valuable common properties that have emerged from those methods. Examples will be shared on how you can enable this type of approach within your teams using open-source projects, managing content through a simple Markdown format that can deliver rich content within a familiar developer toolchain and workflow.
            
            If you want to improve your documentation and accelerate how your teams share their ideas, this talk is for you.`,
          room: "2215-B",
          category: "Other Languages",
          level: "Introductory"
        },
        {
          title: "NoOps SPAs using AWS Amplify",
          presenter: "Ken Hill",
          summary:
            "AWS Amplify is a complete managed package for application infrastructure including auto-building, deployment, hosting, API, scaling, and more. Why spend time spinning up infrastructure when you can spend your time creating great apps.",
          room: "2215-C",
          category: "Cloud",
          level: "Introductory"
        },
        {
          title: "Space Flight in the 2020s",
          presenter: "Richard Campbell",
          summary:
            "Are the 2020s the decade where regular people get to go into space? Join Richard Campbell as he assembles all the current developments in space flight to look at what the next few years could offer to a regular person on a once-in-a-lifetime trip. Will there be space hotel in orbit around the Earth? What about a resort on the Moon? Could we go further than that? And, most importantly… how much will it cost? The potential is huge, and the impact on mankind is hard to even imagine - maybe science fiction is coming true?",
          room: "2201",
          category: "Other Languages",
          level: "Intermediate"
        },
        {
          title: "Cloud security predictions for the post-pandemic world",
          presenter: "Karl Ots",
          summary: `Cloud computing is perhaps the largest information technology megatrend of this decade. Furthermore, the global disruptions of the COVID-19 pandemic proved that the hyperscale cloud providers can answer the most unpredictable demand thrown at them.

            As demonstrated with the Solorigate supply-chain attacks, taming the beast of cloud security with traditional methods can seem overwhelming. The answer is what I like to call cloud native security.
            
            Based on real-life experiences from implementing cloud security programs in some of the largest enterprises in the world, I will present my top cloud security predictions that make sense for the current cybersecurity climate, your business and your developers.`,
          room: "2202",
          category: "Security",
          level: "Introductory"
        },
        {
          title:
            "Let's get serious about test automation with architectural approach",
          presenter: "Olha Vovk",
          summary: `There are many layers and aspects of software that can and should be tested automatically. Apart from testing software functionality, we can automate testing for performance, accessibility, API layer, visual layer, cross-browser and cross-platform, data, links validation, security, etc. To do all of it and to ensure that the appropriate pieces are tested with the suitable tools, on the proper infrastructure, and at the right time you need an architectural approach.

            Automated testing solution is a complex system in itself, so planning and development of it should follow the same approach and principles as of any other application, but typically we have to do it with substantially smaller resources. How do we make it possible? This question, along with the following, will be addressed in this talk:
            
            - why you should take a step back and think about the architecture of your automated testing solution;
            -what questions to ask before deciding on a strategy;
            -what are (or should be) all the components of an automated testing solution;
            -how to select the right tools;
            -where and what to report without notifications overload;
            -how to design for flexibility and scalability;
            -where to get help and resources;
            -how to continuously improve the process while keeping the focus on the end goal(s).
            
            Software development teams are at different stages of implementing test automation, and regardless of the maturity level your automation effort, it is crucial for the success of the whole transformation that your tests automation architecture is designed to support the delivery goals.`,
          room: "2203",
          category: "Testing and QA",
          level: "Advanced"
        },
        {
          title:
            "The GUI is a prison: Automate your infrastructure with Ansible",
          presenter: "Bill Dinger",
          summary:
            "Configuring your infrastructure through the GUI or shell is a buggy, time consuming, hard to audit and error prone exercise. In this session learn how to use Ansible to configure your servers, switches, docker containers and everything in between with code. Learn practical tips, tricks, and demo code to get you started right away on both windows & linux and learn why you'll never want to use the GUI again.",
          room: "2204",
          category: "DevOps",
          level: "Intermediate"
        },
        {
          title: "Exploring the Reactive Landscape",
          presenter: "Mary Grygleski",
          summary: `As Java is an object-oriented language that inherently supports the imperative programming style, asynchronicity presents a challenge that can turn the code into nightmare. One way to deal with the complexity of asynchronicity is to introduce reactivity onto the coding level (reactive programming), and/or to handle it on the design and architecture level (reactive systems design).

            Reactive programming and reactive systems are not brand new concepts, as the underlying problems that they are trying to solve, namely, concurrency processing and distributed systems, have existed since the beginning of computing time, and there have always been various techniques and implementations that are “reactive” in nature to address those problems. With the advances in multicore hardware and virtualization, plus cloud technologies in the 2010’s, the time has become ripe for reactive software tooling and frameworks to take center stage. This talk introduces the concepts of reactive programming and reactive systems, discusses the Reactive Manifesto and the Reactive Streams specification, as well as highlights a few popular reactive libraries that include MicroProfile Reactive Messaging, SmallRye/Mutiny, Vert.x, RxJava, Spring Reactor, and RSocket.
            
            The takeaways for the audience will be an understanding of the key differences between reactive programming versus reactive systems, the purpose of the Reactive Streams specification, and the strength and weaknesses of each of the surveyed libraries and frameworks.`,
          room: "2205",
          category: "Java",
          level: "Introductory"
        },
        {
          title: "Using Transducers to Speed Up JavaScript Arrays",
          presenter: "Kevin Ghadyani",
          summary:
            "Where and why you'd want to use a transducer library (specifically RxJS) to solve the slowness associated with processing large amounts of data with JavaScript even with native Array prototype methods..",
          room: "2206",
          category: "JavaScript",
          level: "Intermediate"
        },
        {
          title:
            "Common Accessibility Pitfalls: Climbing out, when you fall in.",
          presenter: "Chris DeMars",
          summary: `You, your users, and Alice from Wonderland have something in common. At one point, everyone has fallen into a hole of perplexity, confusion, and sometimes hysterical madness. Unlike Alice, we can navigate ourselves and our users around the chaotic abyss that we call the web. Shipping inaccessible experiences to our users can have unpleasant effects. Being cognizant of all the things that can go wrong and who are potential users are will take us farther along our journey.

            In this session we are going to learn about common accessibility violations that surface when we are lackadaisical about the experiences we ship. We will cover semantic markup, alt attributes and images, color contrast, and more. Attendees will walk away able to identify these problem areas in their codebases and learning techniques, tools, and best practices to keep our users happy and not drive them mad.`,
          room: "2207",
          category: "UI/UX and Design",
          level: "Introductory"
        },
        {
          title:
            "All of the browser tabs are open and I don't know where that music is coming from...",
          presenter: "Amber Dreyer",
          summary:
            "In this talk we will go over how to transition from being a developer to being in a lead/management position. Topics will include things you need to start doing and learning to grow into management. Oh crap I forgot to do that and how to combat this problem. How do you transistion from being a developer to being in a lead/management position. How to climb that ladder. How to empower your devs to want to lead. This talk is suitable for management and folks looking to get into management.",
          room: "2208",
          category: "Human Skills",
          level: "Intermediate"
        },
        {
          title: "What I Wish Developers Knew About SQL Server",
          presenter: "Bill Graziano",
          summary:
            "This session focuses on the most common errors developers make writing SQL Server applications. It covers lots of performance, transactions, NULLs, loops, errors, and dynamic SQL vs. stored procedures. Demonstrations illustrate each topic. Each topic includes practical advice to improve your applications.",
          room: "2209",
          category: "Data",
          level: "Intermediate"
        },
        {
          title: "An intro to Cypress: testing your JavaScript",
          presenter: "Bekah Hawrot Weigel",
          summary: `We write tests to give us confidence that things won’t break and to save time. But it takes time to write tests. How does that save time? When you use the JavaScript testing framework Cypress, you’ve got the Swiss Army Knife of end-to-end testing. Cypress has bundled together the tools you need to get up and testing fast.

            We’ll take a look at how to get started with Cypress, how to write reliable tests to give you confidence in your code, and how using Cypress enables you to get more done.`,
          room: "2210",
          category: "JavaScript",
          level: "Introductory"
        },
        {
          title:
            "Operationalizing AI models with ModelOps - Delivering value at scale",
          presenter: "Sweta Sinha",
          summary:
            "Description: Organizations are realizing the revolutionary potential of Artificial Intelligence In gaining competitive advantage. Though AI is in mainstream, many organizations are still struggling to move beyond proof of concept to operationalizing the models and optimize the ROI on AI investments. ModelOps takes principled approach to operationalizing AI models into production, thereby accelerating AI initiatives to deliver continuous business value. A well strategized ModelOps practices will automate and augment model life cycle management and make AI ready for DevOps. In this session you will learn about steps to take to operationalize AI/ML model with enterprise level ModelOps platform.",
          room: "2211",
          category: "Data Science",
          level: "Intermediate"
        },
        {
          title: "The journey of a beginning citizen developer!",
          presenter: "Angelique Grootenboer",
          summary:
            "Do you want to start working with Power Platform but not sure where to start? In this session I will tell you about my journey becoming a citizen developer and will give you tips and tricks for your own course. This session is for anyone that is thinking about starting their journey.",
          room: "2214",
          category: "Human Skills",
          level: "Introductory"
        }
      ]
    }
  }
};

//Brent Stewart
