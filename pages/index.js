import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"

const linkData = [
  {name: "Discord", link: "https://discord.com/users/521872289231273994"},
  {name: "Github", link: "https://github.com/sidsurakanti"}
]


function Links({ data }) {
  return (
    <ul className={utilStyles.list}>
      {data.map((item, index) => (
        <li key={index}>
          <Link className={utilStyles.listItem} href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default function Home() {
  return (
    <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.heading}>
          <p>Hello there! I'm an aspiring software developer proficient in Python, HTML, CSS, and Javascript. I'm currently dabbling in React.js.</p>
        </section>
        <div>
          <Links data={linkData}/>
        </div>
    </Layout>
  )
}