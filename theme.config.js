export default {
  github: 'https://github.com/mizushima1226/aws-study-dialy',
  titleSuffix: ' – AWSお勉強計画',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">AWSお勉強日記</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ja" />
      <meta name="description" content="Nextra: the next site builder" />
      <meta name="og:description" content="Nextra: the next site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta name="og:title" content="Nextra: the next site builder" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditOnGitHubLink: true,
  footerText: <>MIT {new Date().getFullYear()} © Shu Ding.</>
}
