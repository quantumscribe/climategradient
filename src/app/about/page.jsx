"use client"
export default function AboutPage() {
  const teamMembers = [
    {
      name: "Satish Singh",
      role: "B.Tech 2nd Year (AI&DS)",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png",
      github: "https://github.com/ss1910singh",
      linkedin: "https://www.linkedin.com/in/satish-singh-964b09278/",
      email: "sat.sin.rt22@dypatil.edu",
    },
    {
      name: "Sankalp Sathe",
      role: "B.Tech 2nd Year (AI&DS)",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png",
      github: "https://github.com/quantumscribe",
      linkedin: "https://www.linkedin.com/in/sankalp-sathe-5ba396183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "san.sat.rt22@dypatil.edu",
    },
    {
      name: "Pranavi Shukla",
      role: "B.Tech 2nd Year (AI&DS)",
      image: "https://static.vecteezy.com/system/resources/previews/039/845/007/non_2x/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face-picture-illustration-isolated-on-white-vector.jpg",
      github: "https://github.com/pranavishuklaa",
      linkedin: "https://www.linkedin.com/in/pranavi-shukla-255879293/",
      email: "pra.shu.rt22@dypatil.edu",
    },
    {
      name: "Aakash Shedge",
      role: "B.Tech 2nd Year (AI&DS)",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-avatar-profile-picture-male-icon.png",
      github: "https://github.com/Aakash2934",
      linkedin: "https://www.linkedin.com/in/your-linkedin-handle",
      email: "aak.she.rt22@dypatil.edu",
    }
  ];

  return (
    <div>
      <div className="relative bg-cover bg-center bg-opacity-50" style={{backgroundImage: "url('https://t3.ftcdn.net/jpg/03/18/13/92/360_F_318139202_s4F1cp8hP5U3YpZmHLjozJHTebmj5Pbo.jpg')"}}>
        <div className="container mx-auto px-6 py-12 text-black">
          <h1 className="text-4xl font-bold mb-4">ClimateGradient</h1>
          <p className="text-lg">A Welcome to <strong>ClimateGradient</strong>. Our mission is to provide a powerful platform for global cooperation and policy analysis in addressing climate change. With real-time data updates and a user-friendly interface, we aim to make a positive impact on the world&apos;s environmental challenges.</p>
        </div>
      </div>
      <section id="our-mission" className="mt-12 border-b border-white-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img src="https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_640.jpg" alt="Our Mission" className="max-w-full rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg leading-relaxed">
                Climate change is an urgent global issue. Our mission is to create a sustainable future by promoting adaptability to environmental challenges and reducing ecological footprints. Every action on this platform contributes to a better world for all. As the planet faces rising temperatures and extreme weather, it is our collective responsibility to tackle climate change.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Through awareness and sustainable practices, we empower individuals and communities to combat this existential threat. Our commitment to environmental stewardship safeguards biodiversity, ensuring a resilient world where all beings thrive. Together, we can secure a sustainable future, preserving the planet's health for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 border-b border-white-200">
      <h2 className="text-3xl font-semibold mb-4 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-wrap -mx-2 md:-mx-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/2 p-2 md:p-4 ">
              <div className="bg-gray-100 rounded-lg shadow-lg p-4 transform transition-transform hover:scale-105 duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 md:w-32 h-20 md:h-32 rounded-full mx-auto mb-2 md:mb-4"
                />
                <h3 className="text-lg md:text-xl text-black font-semibold text-center">{member.name}</h3>
                <p className="text-gray-600 text-sm md:text-base text-center">{member.role}</p>
                <div className="flex justify-center mt-2 md:mt-4">
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                  <a href={`mailto:${member.email}`} className="mx-1 md:mx-2 text-gray-600 hover:text-blue-500">
                    <i className="far fa-envelope"></i> Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center">
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dc11e00-faba-4276-8f74-203bbfdbfc27/d9040cd-f52660f0-6560-49cb-8f1e-d4b4da3fadca.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJkYzExZTAwLWZhYmEtNDI3Ni04Zjc0LTIwM2JiZmRiZmMyN1wvZDkwNDBjZC1mNTI2NjBmMC02NTYwLTQ5Y2ItOGYxZS1kNGI0ZGEzZmFkY2EuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fGpm4pQVgTWLXHt6Ekh8eroDEInDLmiJ6_uq0EzD6Pw" alt="Our team" className="max-w-full rounded-lg shadow-lg" />
            </div>
            </div>
          </div>
      </section>
    </div>
  );
}

