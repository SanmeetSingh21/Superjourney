'use client'

import { useState } from 'react'
import { FiSearch, FiEdit3, FiArrowUpRight, FiX } from 'react-icons/fi'
import styles from './journal.module.css'

const stories = [
  {
    id: 1,
    title: 'The Reality of 14 Days in Japan: What Instagram Doesn\'t Show',
    desc: 'Navigating train passes, queuing fatigue, and finding quiet moments in a country of 125 million people.',
    tag: 'DESTINATION DEEP DIVES',
    isBrand: true,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80'
  },
  {
    id: 2,
    title: 'Solo Female Travel: Finding Safety Without Sacrificing Adventure',
    desc: 'Practical, tested advice from years of independent travel across South America and Southeast Asia.',
    tag: 'SOLO TRAVEL & SAFETY',
    isBrand: true,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80'
  },
  {
    id: 3,
    title: 'Points, Miles, and Reality',
    desc: 'A grounded look at travel hacking. What works, what doesn\'t, and when it\'s better to just pay cash.',
    tag: 'BUDGET TRAVEL STRATEGIES',
    isBrand: true,
    image: 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=800&q=80'
  },
  {
    id: 4,
    title: 'Why We Stopped Recommending Amalfi in August',
    desc: 'The truth about shoulder seasons, overtourism, and where to go in Italy when everyone else is in Positano.',
    tag: 'DESTINATION DEEP DIVES',
    isBrand: false,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80'
  },
  {
    id: 5,
    title: 'Decoding the French Dining Etiquette',
    desc: 'How to order, when to tip, and why the waiter isn\'t ignoring you (probably).',
    tag: 'CULTURE & DINING',
    isBrand: false,
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?w=800&q=80'
  },
  {
    id: 6,
    title: 'The Art of the "Hub and Spoke" Itinerary',
    desc: 'Stop moving hotels every two days. How to build a base camp and actually relax on your vacation.',
    tag: 'TRAVEL STRATEGY',
    isBrand: true,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80'
  }
]

export default function JournalPage() {
  const [activeTab, setActiveTab] = useState('ALL STORIES')
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  // Filter logic
  const filteredStories = stories.filter(s => {
    if (activeTab === 'BRAND BLOG' && !s.isBrand) return false
    if (activeTab === 'COMMUNITY' && s.isBrand) return false
    if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          
          <div className={styles.heroLeft}>
            <p className={styles.overline}>The Superjourneys Journal</p>
            <h1 className={styles.heading}>
              Travel smarter. <br />
              <em className={styles.accent}>Not harder.</em>
            </h1>
          </div>

          <div className={styles.heroRight}>
            <p className={styles.sub}>
              Real insights from 20 years of travel — so you don't waste time figuring things out.
            </p>
            <button className={styles.primaryBtn} onClick={() => setModalOpen(true)}>
              <FiEdit3 size={14} /> Write Your Story
            </button>
          </div>

        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          <div className={styles.actionBar}>
            <div className={styles.tabs}>
              {['ALL STORIES', 'BRAND BLOG', 'COMMUNITY'].map(tab => (
                <button
                  key={tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.searchWrap}>
              <FiSearch className={styles.searchIcon} size={18} />
              <input 
                type="text" 
                placeholder="Search stories..." 
                className={styles.searchInput}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.grid}>
            {filteredStories.map(story => (
              <article key={story.id} className={styles.articleCard}>
                <div className={styles.imgWrap}>
                  <img src={story.image} alt={story.title} className={styles.articleImg} />
                  <div className={styles.tagGroup}>
                    <span className={styles.tag}>{story.tag}</span>
                    {story.isBrand && <span className={styles.tagBrand}>Brand</span>}
                  </div>
                </div>
                <h3 className={styles.articleTitle}>{story.title}</h3>
                <p className={styles.articleDesc}>{story.desc}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Upload Modal */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalBody} onClick={e => e.stopPropagation()}>
            
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <div className={styles.modalIcon}>
                  <FiEdit3 size={20} />
                </div>
                <div>
                  <h3 className={styles.modalTitle}>New Travel Story</h3>
                  <p className={styles.modalSubtitle}>Drafting as Community Member</p>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={() => setModalOpen(false)}>
                <FiX size={24} />
              </button>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Catchy Title</label>
                <input 
                  type="text" 
                  className={styles.titleInput} 
                  placeholder="e.g., The Night I Got Lost in Tokyo"
                />
              </div>

              <div className={styles.selectsRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Category</label>
                  <select className={styles.select}>
                    <option value="" disabled selected>Off-the-Grid Discoveries</option>
                    <option value="solo">Solo Travel</option>
                    <option value="budget">Budget Strategies</option>
                    <option value="dining">Culture & Dining</option>
                  </select>
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Link Itinerary (Optional)</label>
                  <select className={styles.select}>
                    <option value="" disabled selected>None</option>
                    <option value="japan">14 Days in Japan</option>
                    <option value="iceland">Iceland Ring Road</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Your Story</label>
                <textarea 
                  className={styles.textarea} 
                  placeholder="Start writing your journey..."
                ></textarea>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <span className={styles.autoSaved}>AUTO-SAVED AT 12:45 PM</span>
              <div className={styles.footerActions}>
                <button className={styles.draftBtn} onClick={() => setModalOpen(false)}>
                  Save Draft
                </button>
                <button className={styles.primaryBtn} onClick={() => setModalOpen(false)}>
                  <FiArrowUpRight size={14} /> Publish Story
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </main>
  )
}
