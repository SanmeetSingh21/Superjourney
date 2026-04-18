'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsMap, BsGrid, BsChevronRight, BsX, BsArrowUpRight, BsSearch, BsUpload } from 'react-icons/bs'
import { FiCamera } from 'react-icons/fi'
import styles from './cam.module.css'
import { photos } from './photos'
import InteractiveMap from '@/components/sections/cam/InteractiveMap'


export default function BerrysCamPage() {
  const [view, setView] = useState('GRID')
  const [activePhoto, setActivePhoto] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeRegion, setActiveRegion] = useState('ALL')
  const [openSidebarRegion, setOpenSidebarRegion] = useState('EUROPE')
  const [uploadModalOpen, setUploadModalOpen] = useState(false)


  // Scroll lock for modal
  useEffect(() => {
    if (activePhoto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [activePhoto])

  // Simple filter logic
  const filteredPhotos = photos.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.country.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = activeRegion === 'ALL' || p.continent === activeRegion
    return matchesSearch && matchesRegion
  })

  const regions = ['ALL', 'EUROPE', 'ASIA', 'AFRICA', 'AUSTRALIA', 'NORTH AMERICA', 'SOUTH AMERICA']

  return (
    <main className={styles.page}>
      
      {/* ── Header ── */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            Berry's Cam <FiCamera className={styles.cameraIcon} />
          </h1>
          <p className={styles.sub}>
            A collection of real moments from over 20 years of travel.
          </p>

          <div className={styles.viewToggles}>
            <button 
              className={styles.toggleBtn} 
              data-active={view === 'MAP'} 
              onClick={() => setView('MAP')}
            >
              <BsMap size={16} /> MAP VIEW
            </button>
            <button 
              className={styles.toggleBtn} 
              data-active={view === 'GRID'} 
              onClick={() => setView('GRID')}
            >
              <BsGrid size={16} /> GRID VIEW
            </button>
            <button 
              className={`${styles.toggleBtn} ${styles.uploadMainBtn}`} 
              onClick={() => setUploadModalOpen(true)}
            >
              <BsUpload size={16} /> UPLOAD IMAGE
            </button>
          </div>

        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          {/* ── Controls ── */}
          <div className={styles.controlBar}>
            <div className={styles.searchBox}>
              <BsSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Find a place..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className={styles.filterPills}>
              {regions.map(reg => (
                <button 
                  key={reg} 
                  className={styles.pill} 
                  data-active={activeRegion === reg}
                  onClick={() => setActiveRegion(reg)}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>


          {/* ── Grid View ── */}
          {view === 'GRID' && (
            <div className={styles.masonry}>
              {filteredPhotos.map(photo => (
                <div 
                  key={photo.id} 
                  className={styles.photoWrap}
                  onClick={() => setActivePhoto(photo)}
                >
                  <img src={photo.img} alt={photo.title} className={styles.photoImg} loading="lazy" />
                </div>
              ))}
            </div>
          )}

          {/* ── Map View ── */}
          {view === 'MAP' && (
            <div className={styles.mapSection}>
              <aside className={styles.sidebar}>
                <span className={styles.sidebarLabel}>NAVIGATION</span>
                <h3 className={styles.sidebarTitle}>Archive Index</h3>
                
                <div className={styles.archiveList}>
                  {['EUROPE', 'ASIA', 'AFRICA', 'AUSTRALIA'].map(region => (
                    <div key={region} className={styles.regionGroup}>
                      <div 
                        className={styles.regionHeader} 
                        data-active={openSidebarRegion === region}
                        onClick={() => setOpenSidebarRegion(region)}
                      >
                        {region} <BsChevronRight />
                      </div>
                      {openSidebarRegion === region && (
                        <div className={styles.countryList}>
                          <span className={styles.countryItem}>ITALY</span>
                          <span className={styles.countryItem}>FRANCE</span>
                          <span className={styles.countryItem}>SWITZERLAND</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </aside>

              <div className={styles.mapArea}>
                <InteractiveMap 
                  activeRegion={activeRegion} 
                  onRegionChange={(reg) => setActiveRegion(reg)} 
                />
              </div>

            </div>
          )}

          {/* ── End of Roll Message ── */}
          <div style={{ textAlign: 'center', marginTop: '100px', opacity: 0.2, letterSpacing: '0.4em', fontSize: '10px' }}>
            END OF ROLL — 20 YEARS OF LIGHT
          </div>

        </div>
      </section>

      {/* ── Lightbox Modal ── */}
      {activePhoto && (
        <div className={styles.modal} onClick={() => setActivePhoto(null)}>
          <div className={styles.modalInner} onClick={e => e.stopPropagation()}>
            
            <button className={styles.closeBtn} onClick={() => setActivePhoto(null)}>
              <BsX size={32} />
            </button>

            <div className={styles.imgPanel}>
              <img src={activePhoto.img} alt={activePhoto.title} className={styles.mainImg} />
            </div>

            <div className={styles.sidePanel}>
              <span className={styles.breadcrumb}>
                {activePhoto.continent} / {activePhoto.country} / {activePhoto.city}
              </span>
              <h2 className={styles.modalTitle}>{activePhoto.title}</h2>
              <p className={styles.modalDesc}>{activePhoto.desc}</p>
              
              <div className={styles.coords}>
                <span className={styles.coordsLabel}>COORDINATES</span>
                <span className={styles.coordsValue}>{activePhoto.coords}</span>
              </div>

              <div className={styles.modalActions}>
                <button className={styles.bookBtn}>BOOK TOUR</button>
                <Link href="/planner" className={styles.aiBtn} style={{ textAlign: 'center', textDecoration: 'none' }}>
                  ASK OUR HYBRID AI
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── Upload Modal ── */}
      {uploadModalOpen && (
        <div className={styles.uploadModalOverlay} onClick={() => setUploadModalOpen(false)}>
          <div className={styles.uploadModalBody} onClick={e => e.stopPropagation()}>
            <div className={styles.uploadModalHeader}>
              <h3 className={styles.uploadModalTitle}>Contribute to Berry's Cam</h3>
              <button className={styles.uploadCloseBtn} onClick={() => setUploadModalOpen(false)}>
                <BsX size={24} />
              </button>
            </div>
            <div className={styles.uploadModalContent}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Location</label>
                <input type="text" className={styles.input} placeholder="e.g., Kyoto, Japan" />
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Caption</label>
                <textarea className={styles.textarea} placeholder="Share the story behind this moment..."></textarea>
              </div>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Image</label>
                <div className={styles.dragDropArea}>
                  <BsUpload size={24} />
                  <span>Click or drag image here</span>
                </div>
              </div>
            </div>
            <div className={styles.uploadModalFooter}>
              <button className={styles.submitBtn} onClick={() => setUploadModalOpen(false)}>
                Submit Photo
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
