# **RHM Events & Wedding Company**

### **🚀 Overview**

This is a **static portfolio website** for RHM Events & Wedding Company based in **Erattupetta, Kerala**. Built with **HTML5, Tailwind CSS, and JavaScript**, it showcases event management services and provides an elegant platform for potential clients to explore our work and get in touch.

The website follows a **component-based architecture** with reusable elements and is optimized for performance, SEO, and future scalability to **Next.js**.

---

## **🎯 Current Features**

### **✅ Implemented**

#### **1️⃣ Hero Section**
✔ Auto-sliding carousel with 3 hero images  
✔ Compelling tagline: "Crafting Unforgettable Moments"  
✔ Prominent CTA button  

#### **2️⃣ Header & Navigation**
✔ Professional logo with SVG icon  
✔ Responsive navigation menu  
✔ Consistent CTA buttons throughout  

#### **3️⃣ Component Architecture**
✔ Reusable header/navbar component  
✔ Modular layout containers  
✔ Standardized button components  

#### **4️⃣ Design System**
✔ Consistent color palette (#fcfbf8, #fac638, #1c180d, #9e8747)  
✔ Typography: Plus Jakarta Sans + Noto Sans  
✔ Responsive Tailwind CSS framework  

### **🚧 In Development**

#### **5️⃣ Content Sections**
🔄 Event Gallery with search & filtering  
🔄 Client Testimonials carousel  
🔄 FAQ section with expandable items  
🔄 About Us section  
🔄 Contact form with EmailJS integration  

#### **6️⃣ Additional Features**
🔄 Google Maps integration  
🔄 WhatsApp chat integration  
🔄 Lightbox image viewer (Fancybox)  

---

## **🛠️ Tech Stack**

| Technology | Usage | Status |
|------------|-------|--------|
| **HTML5** | Structure & semantic markup | ✅ Implemented |
| **Tailwind CSS** | Utility-first styling & responsiveness | ✅ Implemented |
| **JavaScript** | Interactivity & carousel functionality | ✅ Partial |
| **Plus Jakarta Sans** | Primary typography | ✅ Implemented |
| **Fancybox.js** | Lightbox image viewer | 🔄 Configured |
| **EmailJS** | Contact form submission | 🔄 Planned |
| **Google Maps API** | Business location display | 🔄 Planned |
| **Font Awesome** | Icon library | ✅ Configured |

---

## **📁 Project Structure**

```
rhm_events/
├── index.html                 # Main homepage (updated)
├── pages/
│   └── main.html             # Alternative homepage design
├── components/
│   ├── navbar.html           # Reusable header component
│   └── footer.html           # Reusable footer component
├── testimonials.html         # Testimonials page template
├── faq.html                  # FAQ page template
├── assets/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── logo.jpg
│   │   │   └── favicon.ico
│   │   └── hero/
│   │       ├── hero_image1.jpg
│   │       ├── hero_image2.jpg
│   │       └── hero_image3.jpg
│   └── js/
│       └── script.js         # Main JavaScript file
└── README.md
```

---

## **🌍 Development Setup**

### **🔹 Local Development**

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/muzammil-13/rhm_events.git
```

2️⃣ **Navigate to project:**
```bash
cd rhm_events
```

3️⃣ **Open in browser:**
```bash
# Open index.html directly in browser
# Or use a local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### **🔹 Development Server (Recommended)**
```bash
# Using Node.js live-server
npm install -g live-server
live-server
```

---

## **🎨 Component System**

### **🔄 Reusable Components**

| Component | File | Usage | Reusability |
|-----------|------|-------|-------------|
| **Header/Navbar** | `components/navbar.html` | All pages | 100% |
| **Footer** | `components/footer.html` | All pages | 100% |
| **CTA Button** | Inline classes | Throughout site | 100% |
| **Layout Container** | Inline classes | Page structure | 90% |
| **Hero Section** | `index.html` | Homepage only | 20% |

### **🎯 Design Tokens**

```css
/* Color Palette */
--bg-primary: #fcfbf8;      /* Main background */
--accent-yellow: #fac638;   /* CTA buttons & highlights */
--text-primary: #1c180d;    /* Main text */
--text-secondary: #9e8747;  /* Secondary text */
--border-light: #f4f0e6;    /* Subtle borders */
```

---

## **📈 Current Status & Roadmap**

### **🟢 Completed (40%)**
- [x] Basic HTML structure
- [x] Header/Navigation component
- [x] Hero section with carousel
- [x] Responsive design foundation
- [x] Component extraction

### **🟡 In Progress (30%)**
- [ ] Event gallery implementation
- [ ] Testimonials integration
- [ ] FAQ section integration
- [ ] Contact form setup

### **🔴 Planned (30%)**
- [ ] About Us section
- [ ] Google Maps integration
- [ ] WhatsApp chat widget
- [ ] Performance optimization
- [ ] SEO improvements

---

## **🚀 Deployment**

### **🔹 Current Hosting**
- **Platform**: Netlify (planned)
- **Domain**: Hostinger (planned)
- **Status**: Local development

### **🔹 Deployment Commands**
```bash
# Push to GitHub (auto-deploys to Netlify)
git add .
git commit -m "Update: [description]"
git push origin main
```

---

## **🔧 Next Steps**

### **Immediate Tasks (Week 1-2)**
1. **Complete index.html** with all sections
2. **Integrate testimonials** from testimonials.html
3. **Add FAQ section** from faq.html
4. **Implement event gallery** with filtering
5. **Add contact form** with EmailJS

### **Short-term Goals (Month 1)**
1. **Deploy to Netlify** with custom domain
2. **Add Google Maps** integration
3. **Implement WhatsApp** chat widget
4. **Performance optimization** (image compression, lazy loading)
5. **SEO optimization** (meta tags, structured data)

### **Long-term Vision (3-6 months)**
1. **Migrate to Next.js** for better performance
2. **Add CMS integration** (Strapi/Contentful)
3. **Implement user dashboard** for clients
4. **Add blog section** for SEO
5. **Mobile app development** (React Native)

---

## **🤝 Contributing**

### **Development Guidelines**
- Follow **component-based architecture**
- Maintain **consistent styling** with Tailwind
- Use **semantic HTML** for accessibility
- Test **responsive design** on all devices
- Keep **performance** in mind (optimize images, minimize JS)

### **Code Standards**
- **HTML**: Semantic, accessible markup
- **CSS**: Tailwind utility classes, avoid custom CSS
- **JavaScript**: ES6+, modular approach
- **Images**: WebP format, optimized for web

---

## **📞 Contact & Business Info**

🏢 **RHM Events & Wedding Company**  
📍 **Location**: Erattupetta, Kerala, India  
📧 **Email**: info@rhmevents.com  
📱 **Phone**: +91 XXXXX XXXXX  
🌐 **Website**: [Coming Soon]  

### **Services Offered**
- ✨ Wedding Planning & Coordination
- 🏢 Corporate Event Management
- 🎉 Social Gatherings & Parties
- 🎂 Private Celebrations
- 📸 Event Photography & Videography

---

## **📄 License**

This project is licensed under the **MIT License**. See LICENSE file for details.

---

## **🔖 Version History**

- **v0.3.0** - Component extraction & hero carousel
- **v0.2.0** - Header/navigation implementation  
- **v0.1.0** - Initial project setup

---

*Last Updated: 06 June 2025*
