'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiSearch, FiEdit3, FiArrowUpRight, FiX, FiImage } from 'react-icons/fi'
import styles from './journal.module.css'

import { api } from '../../lib/apiClient'
import { stories as storiesData } from '../../data/stories'



export default function JournalPage() {
  const [activeTab, setActiveTab] = useState('ALL STORIES')
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch stories on load
  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await api.get('/api/journal')
        // Assume data returns an array, fallback to mock if empty/error
        setStories(data && data.length > 0 ? data : storiesData)
      } catch (error) {
        console.warn('Backend unavailable, using mock data for journal')
        setStories(storiesData)
      } finally {
        setIsLoading(false)
      }
    }
    fetchStories()
  }, [])

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
              Travel smarter, <br />
              <em className={styles.accent}>Not harder.</em>
            </h1>
          </div>

          <div className={styles.heroRight}>
            <p className={styles.sub}>
              Real insights from 20 years of travel <br></br> so you don't waste time figuring things out.
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
              <Link key={story.id} href={`/journal/${story.id}`} className={styles.articleCard}>
                <div className={styles.imgWrap}>
                  <img src={story.image} alt={story.title} className={styles.articleImg} />
                  <div className={styles.tagGroup}>
                    <span className={styles.tag}>{story.tag}</span>
                    {story.isBrand && <span className={styles.tagBrand}>Brand</span>}
                  </div>
                </div>
                <h3 className={styles.articleTitle}>{story.title}</h3>
                <p className={styles.articleDesc}>{story.desc}</p>
              </Link>
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
                <button className={styles.imageUploadBtn}>
                  <FiImage size={16} /> Add Images
                </button>
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
