import React, { Component } from 'react'
import { Head } from 'next/document'
import PropTypes from 'prop-types'
import schemaGenerator from '../../helpers/schemaGenerator'

class PageHead extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		let {
			siteTitle,
			siteDescription,
			siteUrl,
			query,
			path = query.page,
			pageTitle = query.title,
			pageTitleFull = pageTitle
				? `${siteTitle}: ${pageTitle}`
				: siteTitle,
			themeColor,
			// social,
			imageUrl,
			canonical = siteUrl + (path || '')
		} = this.props

		console.log(this.props)

		return (
			<Head>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta
					content="width=device-width,initial-scale=1.0,user-scalable=yes"
					name="viewport"
				/>

				<meta content={siteTitle} name="apple-mobile-web-app-title" />
				<meta content={pageTitleFull} property="og:title" />
				<meta content={pageTitleFull} name="twitter:title" />
				<title>{pageTitleFull}</title>

				<meta content={siteDescription} name="description" />
				<meta content={siteDescription} property="og:description" />
				<meta content={siteDescription} name="twitter:description" />

				<meta content="yes" name="apple-mobile-web-app-capable" />
				<meta
					content="black-translucent"
					name="apple-mobile-web-app-status-bar-style"
				/>
				<meta content={themeColor} name="theme-color" />
				<meta content={siteTitle} name="application-name" />

				<meta content="website" property="og:type" />
				<meta content={siteTitle} property="og:site_name" />
				{/* // <meta content={social.fbAppId} property="fb:app_id" /> */}
				<meta content="summary_large_image" name="twitter:card" />
				<meta content={pageTitleFull} name="twitter:text:title" />
				<meta content={canonical} property="og:url" />
				<meta content={canonical} name="twitter:url" />
				<link rel="canonical" href={canonical} />

				<meta
					content={imageUrl || `${siteUrl}/static/social.png`}
					property="og:image"
				/>
				<meta content="1024" property="og:image:width" />
				<meta content="512" property="og:image:height" />
				<meta
					content={imageUrl || `${siteUrl}/static/social.png`}
					name="twitter:image"
				/>
				<meta content="1024" name="twitter:image:width" />
				<meta content="512" name="twitter:image:height" />
				<meta
					content={imageUrl || `${siteUrl}/static/social.png`}
					property="og:image"
				/>
				<meta content="1024" property="og:image:width" />
				<meta content="512" property="og:image:height" />

				<meta content={themeColor} name="msapplication-TileColor" />
				<meta
					content="/static/favicon/mstile-70x70.png"
					name="msapplication-square70x70"
				/>
				<meta
					content="/static/favicon/mstile-144x144.png"
					name="msapplication-square144x144"
				/>
				<meta
					content="/static/favicon/mstile-150x150.png"
					name="msapplication-square150x150"
				/>
				<meta
					content="/static/favicon/mstile-310x150.png"
					name="msapplication-wide310x150"
				/>
				<meta
					content="/static/favicon/mstile-310x310.png"
					name="msapplication-square310x310"
				/>

				<link href="/static/manifest.json" rel="manifest" />

				<link
					href="/static/favicon/apple-touch-icon-57x57.png"
					rel="apple-touch-icon"
					sizes="57x57"
				/>
				<link
					href="/static/favicon/apple-touch-icon-60x60.png"
					rel="apple-touch-icon"
					sizes="60x60"
				/>
				<link
					href="/static/favicon/apple-touch-icon-72x72.png"
					rel="apple-touch-icon"
					sizes="72x72"
				/>
				<link
					href="/static/favicon/apple-touch-icon-76x76.png"
					rel="apple-touch-icon"
					sizes="76x76"
				/>
				<link
					href="/static/favicon/apple-touch-icon-114x114.png"
					rel="apple-touch-icon"
					sizes="114x114"
				/>
				<link
					href="/static/favicon/apple-touch-icon-120x120.png"
					rel="apple-touch-icon"
					sizes="120x120"
				/>
				<link
					href="/static/favicon/apple-touch-icon-144x144.png"
					rel="apple-touch-icon"
					sizes="144x144"
				/>
				<link
					href="/static/favicon/apple-touch-icon-152x152.png"
					rel="apple-touch-icon"
					sizes="152x152"
				/>
				<link
					href="/static/favicon/apple-touch-icon-167x167.png"
					rel="apple-touch-icon"
					sizes="167x167"
				/>
				<link
					href="/static/favicon/apple-touch-icon-180x180.png"
					rel="icon"
					sizes="180x180"
					type="image/png"
				/>
				<link rel="shortcut icon" href="/static/favicon.png" />

				<link
					href="/static/favicon/favicon-32x32.png"
					rel="icon"
					sizes="32x32"
					type="image/png"
				/>
				<link
					href="/static/favicon/favicon-16x16.png"
					rel="icon"
					sizes="16x16"
					type="image/png"
				/>

				<script type="application/ld+json">
					{JSON.stringify(
						schemaGenerator({
							path,
							canonical,
							siteUrl,
							pageTitle,
							siteTitle,
							pageTitleFull
						})
					)}
				</script>
				{this.props.children}
			</Head>
		)
	}
}

Head.propTypes = {
	siteTitle: PropTypes.string,
	siteTitleShort: PropTypes.string,
	siteDescription: PropTypes.string,
	siteUrl: PropTypes.string,
	themeColor: PropTypes.string,
	social: PropTypes.objectOf(PropTypes.string),
	imageUrl: PropTypes.string,
	canonical: PropTypes.string,
	pageTitle: PropTypes.string,
	pageTitleFull: PropTypes.string,
	query: PropTypes.object.isRequired
}

// <meta content={`@${social.twitter}`} name="twitter:site" />
// <meta content={`@${social.twitter}`} name="twitter:creator" />
export default PageHead
