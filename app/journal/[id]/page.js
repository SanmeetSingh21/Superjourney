'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import styles from './post.module.css'
import { stories } from '../../../data/stories'

export default function JournalPostPage() {
  const params = useParams()
  const id = parseInt(params.id)
  const post = stories.find(s => s.id === id)
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false)
      } else {
        setNavVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  if (!post) {
    return (
      <div className="container" style={{ padding: '200px 0', textAlign: 'center' }}>
        <h1>Post Not Found</h1>
        <Link href="/journal">Back to Journal</Link>
      </div>
    )
  }

  // Calculate Reading Time (rough estimate)
  const fullText = post.contentBlocks.map(b => b.value || '').join(' ')
  const wordCount = fullText.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <article className={styles.page}>
      
      {/* ── Navigation ── */}
      <nav className={`${styles.nav} ${navVisible ? styles.navVisible : styles.navHidden}`}>
        <div className="container">
          <Link href="/journal" className={styles.backBtn}>
            <FiArrowLeft /> BACK TO JOURNAL
          </Link>
        </div>
      </nav>

      {/* ── Header ── */}
      <header className={styles.header}>
        <span className={styles.category}>{post.tag}</span>
        <h1 className={styles.title}>{post.title}</h1>
        
        <div className={styles.meta}>
          <div className={styles.authorBrief}>
            <img src={post.author.avatar} alt={post.author.name} className={styles.authorAvatarSmall} />
            <div className={styles.authorInfoSmall}>
              <span className={styles.authorNameSmall}>{post.author.name}</span>
            </div>
          </div>
          <div className={styles.publishMeta}>
            <span>{post.date}</span>
            <div className={styles.dot} />
            <span>{readingTime} MIN READ</span>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <img src={post.image} alt={post.title} className={styles.heroImg} />
      </section>

      {/* ── Article Content ── */}
      <div className={styles.articleBody}>
        {post.contentBlocks.map((block, idx) => {
          if (block.type === 'paragraph') {
            return <p key={idx} className={styles.paragraph}>{block.value}</p>
          }
          if (block.type === 'heading') {
            return <h2 key={idx} className={styles.heading}>{block.value}</h2>
          }
          if (block.type === 'image') {
            return (
              <figure key={idx} className={styles.inlineImgWrap}>
                <img src={block.src} alt="Article imagery" className={styles.inlineImg} />
                {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
              </figure>
            )
          }
          return null
        })}

        {/* ── Author Bio ── */}
        <section className={styles.authorBioCard}>
          <img src={post.author.avatar} alt={post.author.name} className={styles.authorBioAvatar} />
          <div className={styles.authorBioContent}>
            <h3 className={styles.authorBioName}>{post.author.name}</h3>
            <p className={styles.authorBioText}>{post.author.bio}</p>
          </div>
        </section>

        {/* ── Footer CTA ── */}
        <div className={styles.footerCTA}>
          <Link href="/journal" className={styles.exploreBtn}>
            EXPLORE MORE STORIES <FiArrowRight size={16} />
          </Link>
        </div>
      </div>

    </article>
  )
}
