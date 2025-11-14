function TeamSection() {
  try {
    const team = [
      { 
        name: 'Amel', 
        image: 'https://i.pravatar.cc/200?img=1',
        role: 'Project Lead',
        skills: 'Leadership, Planning',
        color: 'team-color-1'
      },
      { 
        name: 'Alfin',  
        image: 'https://i.pravatar.cc/200?img=12',
        role: 'Web Developer',
        skills: 'Instalasi perangkat lunak,debian,networking',
        color: 'team-color-2'
      },
      { 
        name: 'Reno', 
        image: 'https://i.pravatar.cc/200?img=13',
        role: 'Web Developer',
        skills: 'JavaScript, React',
        color: 'team-color-3'
      },
      { 
        name: 'Rita', 
        image: 'https://i.pravatar.cc/200?img=5',
        role: 'UI/UX Designer',
        skills: 'Design, Prototyping',
        color: 'team-color-4'
      },
      { 
        name: 'Sri Wulandari', 
        image: 'https://i.pravatar.cc/200?img=9',
        role: 'Frontend Developer',
        skills: 'HTML, CSS, JavaScript',
        color: 'team-color-5'
      }
    ];

    return (
      <section id="pengembang" className="team">
        <div className="container">
          <div className="team-content">
            <h2>Tim Pengembang</h2>
            <div className="team-members-grid">
              {team.map((member, index) => (
                <div key={index} className={`team-member-card ${member.color}`}>
                  <div className="team-member-frame">
                    <img src={member.image} alt={member.name} className="team-member-img" />
                  </div>
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <div className="team-member-skills">
                    <span className="skills-label">Keahlian:</span>
                    <p className="skills-text">{member.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('TeamSection component error:', error);
    return null;
  }
}