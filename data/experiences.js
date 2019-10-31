const experience_list = [
	{
		title: 'Thesis within Distributed Tracing and Testing',
		company: 'Spotify',
		type: 'academic',
		start_year: '2020',
		start_month: 'January',
		end_year: '2020',
		end_month: 'May',
		description: '',
		keywords: [],
		important_points: [
			'Upcoming thesis with the same team that I worked with as an intern',
			'[WIP] Subject: Application of tracing for testing complex distributed sytems'
		]
	},
	{
		title: 'Backend Software Engineer Intern',
		company: 'Spotify',
		type: 'industry',
		start_year: '2019',
		start_month: 'June',
		end_year: '2019',
		end_month: 'August',
		description: '',
		keywords: [],
		important_points: [
			'Backend engineer in the payments team',
			'Worked on a microservice architecture based on GCP, Python and Go',
			'Integration with internal and external partners, updates to existing system, and creation of new internal services'
		]
	},
	{
		title: 'Project Based Exchange Studies',
		company: 'Global Development Hub',
		type: 'academic',
		start_year: '2018',
		start_month: 'March',
		end_year: '2018',
		end_month: 'July',
		description: '',
		keywords: [],
		important_points: [
			'Challenge driven ICT project with local students in Nairobi, Kenya',
			'Combined with bachelor thesis work: \"Increasing Market Reach Using Crowdsourcing Technology\"'
		]
	},
	{
		title: 'Research Assistant',
		company: 'Swedish Museum of Natural History',
		type: 'industry',
		start_year: '2017',
		start_month: 'October',
		end_year: 'Present',
		end_month: 'Present',
		description: '',
		keywords: [],
		important_points: [
			'Part time project work besides studies',
			'Working together with professor Fredrik Ronquist, towards publishing papers within phylogenetics and computational biology.',
			'Programs statistical and computational models in C and R'
		]
	},
	{
		title: 'Software Developer',
		company: 'LS Elektronik',
		type: 'industry',
		start_year: '2017',
		start_month: 'April',
		end_year: '2019',
		end_month: 'May',
		description: '',
		keywords: [],
		important_points: [
			'Part time work besides studies',
			'Development work on Mimer, a software based two-way radio platform used for staff communication at many locations such as Arlanda Airport',
			'Programming in a large code base with primarily Object Pascal'
		]
	},
	{
		title: 'Teaching Assistant',
		company: 'KTH Royal Institute of Technology',
		type: 'academic',
		start_year: '2017',
		start_month: 'January',
		end_year: 'Present',
		end_month: 'Present',
		description: '',
		keywords: [],
		important_points: [
			'Teachers assistant in the course \"Operating Systems\" with more than 100 students.',
			'Previously lab assistant in \"Embedded Electronics\"',
			'Continuously improves course material together with the professor'
		]
	},
	{
		title: 'Webdeveloper Intern',
		company: 'MBrace',
		type: 'industry',
		start_year: '2016',
		start_month: 'June',
		end_year: '2016',
		end_month: 'August',
		description: '',
		keywords: [],
		important_points: [
			'Independantly designed, planned and developed a WordPress site.'
		]
	},
	{
		title: 'Degree program in ICT, Distributed Systems and Data Science',
		company: 'KTH Royal Institute of Technology',
		type: 'academic',
		start_year: '2015',
		start_month: 'August',
		end_year: '2020',
		end_month: 'May',
		description: '',
		keywords: [],
		important_points: [
			'Bachelor’s degree in Information and Communication Technology.',
			'Pursuing Master’s degree in Software Engineering of Distributed Systems.',
			'Will graduate in May 2020',
			'Average Grade: 4.78 / 5'
		]
	},
	{
		title: 'Scout Leader',
		company: 'Equmenia Hässelby',
		type: 'industry',
		start_year: '2013',
		start_month: 'August',
		end_year: 'Present',
		end_month: 'Present',
		description: '',
		keywords: [],
		important_points: [
			'Working tightly together as a team of approximately 20 leaders',
			'Organizes around 3 events every year with 50 – 200 participants',
			'Continuously organizes and leads weekly meetings for 30+ participants'
		]
	},
	{
		title: 'Board Member',
		company: 'Equmenia Hässelby',
		type: 'industry',
		start_year: '2013',
		start_month: 'January',
		end_year: 'Present',
		end_month: 'Present',
		description: '',
		keywords: [],
		important_points: [
			'Visionary and administrative work for the 100+ member organization',
			'Hosts activities for kids, including scouting, choruses and musical groups'
		]
	}
]

function getExperiences() {
	experience_list.map((exp, key) => {
		exp['key'] = key
		return exp
	})

	return experience_list
}

module.exports = {
	experiences: getExperiences()
}
