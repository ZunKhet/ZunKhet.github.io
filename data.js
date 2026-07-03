const portfolioData = {
  stats: [
    { label: "Projects", value: "3" },
    { label: "Articles", value: "4" },
    { label: "Videos", value: "2" },
    { label: "Paper", value: "1" }
  ],

  projects: [
    {
      title: "EchoGate AI",
      status: "Released",
      description:
        "An AI-powered fantasy story generator where uploaded images become interactive narrative adventures.",
      tech: "Python · Streamlit · Gemini API · Clean Architecture",
      image: "assets/echogate.png",
      demo: "https://echogate-ai-zz.streamlit.app/",
      github: "https://github.com/ZunKhet/echogate-ai"
    },
    {
      title: "PaperOrbit",
      status: "Released",
      description:
        "A research discovery dashboard for exploring AI papers, trends, and research directions.",
      tech: "Python · Streamlit · arXiv API · Data Visualization",
      image: "assets/paperOrbit.png",
      demo: "https://paper-orbit-zz.streamlit.app/",
      github: "https://github.com/ZunKhet/paper-orbit"
    },
    {
      title: "Prism256",
      status: "Released",
      description:
        "A tool for inspecting image dataset quality.",
      tech: "Python · Streamlit · OpenCV · Data Visualization",
      image: "assets/prism256.png",
      demo: "https://prism256-zz.streamlit.app/",
      github: "https://github.com/ZunKhet/Prism256"
    },
  ],

  articles: [
    {
      title: "Why the Average Never Tells the Whole Story",
      status: "Medium Article",
      description:
        "An intuitive explanation of expectation, variance, and covariance using simple examples before formulas.",
      tech: "Statistics · Machine Learning · Intuition",
      link:
        "https://medium.com/@zunkhetwai/why-the-average-never-tells-the-whole-story-6b3e6e918d72?sharedUserId=zunkhetwai"
    },
    {
      title: "Why a Coin Toss Contains More Information Than a Sunrise",
      status: "Medium Article",
      description:
        "An intuitive explanation of Entropy through surprise, probability, and uncertainty.",
      tech: "Entropy · Information Theory · Artificial Intelligence",
      link:
        "https://medium.com/@zunkhetwai/why-a-coin-toss-contains-more-information-than-a-sunrise-5b124d360e46?sharedUserId=zunkhetwai"
    },
    {
      title: "The Statistical Paradox That Tricks Researchers",
      status: "Medium Article",
      description:
        "Understanding Simpson’s Paradox: Why Combining Data Can Reverse the Truth.",
      tech: "Statistics · Data Science · Research",
      link:
        "https://medium.com/@zunkhetwai/the-statistical-paradox-that-tricks-researchers-a04ae5913620?sharedUserId=zunkhetwai"
    },
    {
      title: "What Makes a Good Dataset?",
      status: "Medium Article",
      description:
        "Explaining what makes a good dataset and why it matters in machine learning.",
      tech: "Statistics · Data Science · Research",
      link:
        "https://medium.com/@zunkhetwai/what-makes-a-good-dataset-c6558df211bd?sharedUserId=zunkhetwai"
    }
  ],

  videos: [
    {
        title: "Why the Average Never Tells the Whole Story",
        status: "YouTube",
        description:
            "An intuitive explanation of expectation, variance, and covariance with visual examples.",
        tech: "Statistics · Machine Learning",
        thumbnail: "assets/why-avg-not-enough.png",
        link: "https://youtu.be/m1Eek6wMkxc?si=R5bm9doHGJ8zCWHu"
    },
    {
        title: "What makes a Good Dataset?",
        status: "YouTube",
        description:
            "Explaining what makes a good dataset and why it matters in machine learning.",
        tech: "AI · Data Quality",
        thumbnail: "assets/a-good-dataset.jpg",
        link: "https://youtu.be/nSyU5r0GNws?si=cERJr9axoYLbgXLv"
    }
]
};