const experience_list = [
	{
		title: 'International Project Work and Exchange Student',
		company: 'Global Development Hub',
		start_year: '2018',
		start_month: 'Mar',
		end_year: '2018',
		end_month: 'Jul',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Challenge driven ICT project with local students in Nairobi, Kenya'
		]
	},
	{
		title: 'Research Assistant',
		company: 'Swedish Museum of Natural History',
		start_year: '2017',
		start_month: 'Oct',
		end_year: 'Present',
		end_month: 'Present',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Working together with professor Fredrik Ronquist, towards publishing papers within phylogenetics and computational biology.',
			'Programs statistical models and analyses data using C and R as'
		]
	},
	{
		title: 'Software Developer',
		company: 'LS Elektronik',
		start_year: '2017',
		start_month: 'Apr',
		end_year: 'Present',
		end_month: 'Present',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Development work on Mimer, a software based two-way radio platform used for staff communication at many locations such as Arlanda Airport',
			'Programming in a large code base with primarily Object Pascal'
		]
	},
	{
		title: 'Teaching Assistant',
		company: 'KTH Royal Institute of Technology',
		start_year: '2017',
		start_month: 'Jan',
		end_year: 'Present',
		end_month: 'Present',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Plans and gives lectures in the course "Operating Systems” with more than 100 students. Previously lab assistant in "Embedded Electronics"',
			'Continuously improves course material together with the professor'
		]
	},
	{
		title: 'Degree program in ICT, Distributed Systems and Data Science',
		company: 'KTH Royal Institute of Technology',
		start_year: '2015',
		start_month: 'Aug',
		end_year: '2020',
		end_month: 'May',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Bachelor’s degree in ICT and pursuing Master’s degree in Distributed',
			'Systems. Average Grade: 4.78 / 5'
		]
	},
	{
		title: 'Scout Leader',
		company: 'Equmenia Hässelby',
		start_year: '2013',
		start_month: 'Aug',
		end_year: 'Present',
		end_month: 'Present',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Working tightly together as a team of approximately 20 leaders',
			'Organizes around 3 events every year with 50 – 200 participants',
			'Continuously organizes and leads weekly meetings for 30+ participants'
		]
	},
	{
		title: 'Board Member',
		company: 'Equmenia Hässelby',
		start_year: '2013',
		start_month: 'Jan',
		end_year: 'Present',
		end_month: 'Present',
		description: 'This is the description for this thing.... ',
		keywords: ['key1', 'key2'],
		important_points: [
			'Visionary and administrative work for the 250+ member organization',
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

export const experiences = getExperiences()
