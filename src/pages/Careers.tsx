const Careers = () => {
  const openings = [
    {
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build the future of startup networking.",
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Shape the product roadmap and drive innovation.",
    },
    {
      title: "Community Manager",
      location: "Remote",
      type: "Full-time",
      description: "Build and nurture our growing community of founders and investors.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Help us revolutionize how founders and investors connect. We're always looking for talented
        individuals to join our mission.
      </p>

      <div className="grid gap-6">
        {openings.map((job) => (
          <div
            key={job.title}
            className="p-6 border rounded-lg hover:border-primary transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <div className="flex gap-4 text-sm text-muted-foreground mb-4">
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.type}</span>
            </div>
            <p className="text-muted-foreground">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;