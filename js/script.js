document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Accordion Functionality
  const accordionItems = document.querySelectorAll(".accordion-item")

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header")

    if (header) {
      header.addEventListener("click", () => {
        // Close all other accordion items
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item && otherItem.classList.contains("active")) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      })
    }
  })

  // Interactive Timeline
  const timelineMarkers = document.querySelectorAll(".timeline-marker")

  timelineMarkers.forEach((marker) => {
    marker.addEventListener("mouseenter", () => {
      marker.style.transform = "translateX(5px)"
      marker.style.color = "var(--primary-color)"
    })

    marker.addEventListener("mouseleave", () => {
      marker.style.transform = "translateX(0)"
      marker.style.color = ""
    })
  })

  // Interactive Map
  const mapMarkers = document.querySelectorAll(".map-marker")

  // Set initial positions for map markers
  // These would ideally be set based on actual coordinates
  if (document.getElementById("europe-map")) {
    const mapMarkerPositions = {
      Madrid: { top: "70%", left: "20%" },
      Paris: { top: "40%", left: "30%" },
      Heidelberg: { top: "35%", left: "40%" },
      Berlin: { top: "25%", left: "50%" },
      London: { top: "30%", left: "15%" },
      Brussels: { top: "35%", left: "25%" },
      Geneva: { top: "50%", left: "35%" },
      Rome: { top: "60%", left: "45%" },
    }

    mapMarkers.forEach((marker) => {
      const city = marker.getAttribute("data-city")
      if (mapMarkerPositions[city]) {
        marker.style.top = mapMarkerPositions[city].top
        marker.style.left = mapMarkerPositions[city].left
      }

      marker.addEventListener("click", () => {
        alert(`Rizal visited ${city} during his time in Europe.`)
      })
    })
  }

  // Family Tree Interactive Elements
  const familyTree = document.getElementById("family-tree")
  if (familyTree) {
    familyTree.addEventListener("click", () => {
      alert("José Rizal was the seventh of eleven children born to Francisco Mercado and Teodora Alonso.")
    })
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Card Hover Effects
  const cards = document.querySelectorAll(".card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(-5px)"
    })
  })

  // Interactive Philippines Map
  const phMap = document.getElementById("ph-map")
  if (phMap) {
    phMap.addEventListener("click", () => {
      alert("The Philippines in the 19th century was divided into provinces under Spanish colonial rule.")
    })
  }

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks2 = document.querySelectorAll(".nav-links a")

  navLinks2.forEach((link) => {
    const linkPage = link.getAttribute("href")
    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active")
    }
  })
})
