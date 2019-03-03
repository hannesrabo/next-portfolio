// This does not support nested pages (level 2 and up)
// If you're working with deeply nested pages, remove this or rework it.

export default ({
	path,
	canonical,
	siteUrl,
	pageTitle,
	siteTitle,
	pageTitleFull
}) => {
	const isSubPage = pageTitle && path !== '/'

	let schema = [
		{
			'@context': 'http://schema.org',
			'@type': 'WebSite',
			url: canonical,
			name: pageTitle || siteTitle,
			alternateName: pageTitleFull
		}
	]

	if (isSubPage) {
		schema.push({
			'@context': 'http://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					item: {
						'@id': siteUrl,
						name: siteTitle
					}
				},
				{
					'@type': 'ListItem',
					position: 2,
					item: {
						'@id': canonical,
						name: pageTitle
					}
				}
			]
		})
	}

	return schema
}
