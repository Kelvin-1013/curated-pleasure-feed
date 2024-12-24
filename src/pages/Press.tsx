const Press = () => {
  const pressReleases = [
    {
      date: "April 15, 2024",
      title: "Unicorns Club Raises $10M Series A to Revolutionize Startup Networking",
      excerpt: "Leading investors back innovative platform connecting founders and investors.",
    },
    {
      date: "March 1, 2024",
      title: "Unicorns Club Launches Global Expansion",
      excerpt: "Platform now available in 20+ countries, democratizing access to startup funding.",
    },
    {
      date: "January 15, 2024",
      title: "Unicorns Club Announces Partnership with Leading Accelerators",
      excerpt: "Strategic partnerships to provide more opportunities for early-stage startups.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Press & News</h1>
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Media Contact</h2>
        <p className="text-muted-foreground">
          For press inquiries, please contact:{" "}
          <a href="mailto:press@unicornsclub.com" className="text-primary hover:underline">
            press@unicornsclub.com
          </a>
        </p>
      </div>

      <div className="space-y-8">
        {pressReleases.map((release) => (
          <div key={release.title} className="border-b pb-8">
            <div className="text-sm text-muted-foreground mb-2">{release.date}</div>
            <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
            <p className="text-muted-foreground">{release.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Press;