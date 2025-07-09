import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-orange-50 text-orange-900 font-serif">
      {/* Header/Nav */}
      <nav className="bg-orange-100 shadow-md p-4 flex justify-between items-center border-b-4 border-orange-400">
        <div className="flex items-center gap-2">
          <span className="text-3xl">🕉️</span>
          <span className="text-2xl font-bold">पंडित शौर्य शर्मा जी</span>
        </div>
        <div>
          <a href="#about" className="px-4 py-2 font-medium hover:text-orange-600">About</a>
          <a href="#services" className="px-4 py-2 font-medium hover:text-orange-600">Services</a>
          <a href="#testimonials" className="px-4 py-2 font-medium hover:text-orange-600">Testimonials</a>
          <a href="#contact" className="px-4 py-2 font-medium hover:text-orange-600">Contact</a>
        </div>
      </nav>

      {/* Main */}
      <main className="flex flex-col items-center justify-center flex-grow p-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">🌞 श्री पंडित शौर्य शर्मा जी 🌞</h1>
        <p className="text-lg max-w-3xl mb-6">
          🔱 पूज्य गुरुदेव श्री शौर्य शर्मा, <span className="font-bold">24 पीढ़ियों से तपस्वी कुल</span> में जन्मे, वेदों के ज्ञाता, वास्तु शास्त्र विशेषज्ञ, भूत प्रेत बाधा निवारक, ग्रह-नक्षत्रों के परम जानकार। एक कॉल में दूर करें आपकी सभी <span className="underline">धार्मिक, पारिवारिक व करियर संबंधी समस्याएं।</span>
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg shadow-lg">
          📞 अभी संपर्क करें
        </button>
      </main>

      {/* About Section */}
      <section id="about" className="bg-orange-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">🧘‍♂️ मेरे बारे में</h2>
        <p className="max-w-4xl mx-auto text-center text-lg">
          बचपन से ही ज्योतिष, तंत्र-मंत्र, और यज्ञों में विशेष रुचि रही। 7 वर्ष की उम्र में पहला हवन किया और 9 वर्ष में भूत भगाया। अब तक 10,000+ लोगों की समस्याओं का समाधान। मेरा मिशन है: <span className="italic">"हर घर में सुख, हर जीवन में शांति।"</span>
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">📿 मेरी सेवाएं</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "गृह प्रवेश पूजा",
            "ज्योतिष सलाह",
            "वास्तु दोष सुधार",
            "कुंडली मिलान",
            "मंगल दोष निवारण",
            "संतान प्राप्ति उपाय",
            "प्रेम विवाह समाधान",
            "विदेश यात्रा योग",
            "कालसर्प दोष पूजा",
            "शनि शांति यज्ञ",
            "बिजनेस वृद्धि यज्ञ",
            "पितृ दोष निवारण",
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md border border-orange-300">
              <h3 className="text-xl font-semibold mb-2 text-orange-800">🔸 {service}</h3>
              <p className="text-sm text-gray-700">
                विशेष विधि से सम्पन्न, मंत्रोच्चारण के साथ। अनुभवी ब्राह्मण टीम द्वारा।
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-orange-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">🌟 लोगों की राय</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <p>“मेरी पत्नी मुझसे लड़ती थी हर दिन। पंडित जी की पूजा के बाद अब वो मुझे 'स्वामी जी' कहती है।”</p>
            <p className="mt-2 font-semibold text-right">— सुरेश शर्मा, हरियाणा</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <p>“बेटा फेल हो रहा था। कुंडली देखकर उपाय बताया, अब NASA में जॉब लग गई।”</p>
            <p className="mt-2 font-semibold text-right">— सीमा त्रिपाठी, इलाहाबाद</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-500">
            <p>“भूत था घर में। अब भूत खुद पूजा करने आ जाता है। 🙏”</p>
            <p className="mt-2 font-semibold text-right">— राजीव मिश्रा, बनारस</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-4">📞 संपर्क करें</h2>
        <p className="text-center mb-6 text-lg">पूजा बुकिंग के लिए WhatsApp या कॉल करें:</p>
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">📱 +91-99999-99999</p>
          <p>🌐 <a href="mailto:shouryapanditji@ommail.com" className="text-orange-700 underline">shouryapanditji@ommail.com</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-200 text-center py-6 mt-10 border-t-4 border-orange-500">
        <div className="text-2xl mb-2">🕉️ हर हर महादेव 🕉️</div>
        <div>© {new Date().getFullYear()} पंडित शौर्य शर्मा जी - All Rights Reserved</div>
        <div className="text-sm mt-2">This is a joke just so u know  i was testing some things out ok :3❤️</div>
      </footer>
    </div>
  );
}

export default App;
