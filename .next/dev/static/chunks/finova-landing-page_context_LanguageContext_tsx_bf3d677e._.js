(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/finova-landing-page/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finova-landing-page/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionFooter__as__footer$3e$__ = __turbopack_context__.i("[project]/finova-landing-page/node_modules/framer-motion/dist/es/render/components/motion/elements.mjs [app-client] (ecmascript) <export MotionFooter as footer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/finova-landing-page/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const translations = {
    es: {
        // Header
        'nav.home': 'Inicio',
        'nav.features': 'Características',
        'nav.stats': 'Estadísticas',
        'nav.testimonials': 'Testimonios',
        'nav.contact': 'Contacto',
        'header.download': 'Descargar',
        // Hero
        'hero.title1': 'Toma el Control de Tu',
        'hero.title2': 'Futuro Financiero',
        'hero.description': 'Gestiona tus finanzas con facilidad. Controla tus gastos, establece metas y alcanza la libertad financiera con nuestra app intuitiva.',
        'hero.googlePlay': 'Google Play',
        'hero.appStore': 'App Store',
        // Contacto
        'contact.title': 'Contáctanos',
        'contact.description': '¿Tienes preguntas? Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.',
        'contact.name': 'Nombre',
        'contact.namePlaceholder': 'Tu nombre',
        'contact.email': 'Correo Electrónico',
        'contact.emailPlaceholder': 'Tu correo',
        'contact.message': 'Mensaje',
        'contact.messagePlaceholder': 'Tu mensaje',
        'contact.send': 'Enviar mensaje',
        //Features
        'features.title': '¿Por Qué Elegir FinPro?',
        'features.description': 'Experimenta el futuro de las finanzas personales con características diseñadas para tu éxito.',
        'features.0.title': 'Seguridad Bancaria',
        'features.0.description': 'Tus datos están protegidos con encriptación de 256 bits y protocolos de seguridad avanzados.',
        'features.1.title': 'Soporte 24/7',
        'features.1.description': 'Nuestro equipo dedicado está siempre listo para ayudarte con cualquier pregunta o problema.',
        'features.2.title': 'Control Total',
        'features.2.description': 'Gestiona todas tus cuentas, tarjetas y transacciones desde un panel intuitivo.',
        'features.3.title': 'Transferencias Instantáneas',
        'features.3.description': 'Envía y recibe dinero al instante sin comisiones a otros usuarios de Finova.',
        // Stats
        // Español
        'stats.title': 'Millones Confían en Nosotros',
        'stats.description': 'Nuestros números hablan por sí solos. Únete a la creciente comunidad de usuarios que confían en FinPro.',
        'stats.0.label': 'Descargas',
        'stats.1.label': 'Usuarios Activos',
        'stats.2.label': 'Calificación',
        'stats.3.label': 'Países',
        'stats.4.label': 'Transacciones',
        'stats.5.label': 'Disponibilidad',
        'stats.badge1.title': 'Mejor Valorada',
        'stats.badge1.subtitle': 'App Store y Play Store',
        'stats.badge2.title': 'Crecimiento Rápido',
        'stats.badge2.subtitle': '50% de Crecimiento Anual',
        'stats.badge3.title': 'Comunidad',
        'stats.badge3.subtitle': 'Base de Usuarios Activos',
        // Testimonials
        'testimonials.title': 'Lo Que Dicen Nuestros Usuarios',
        'testimonials.description': 'Únete a miles de usuarios satisfechos que han transformado su vida financiera con FinPro.',
        'testimonials.0.content': 'FinPro ha sido un cambio radical para mis metas de ahorro. El diseño intuitivo de la app me ayuda a controlar mi presupuesto y ver exactamente a dónde va mi dinero.',
        'testimonials.1.content': 'Confío en Finpro con mis finanzas por sus características de seguridad. Además, la app es tan fácil de usar que gestionar mi dinero nunca ha sido tan sencillo.',
        'testimonials.2.content': 'Los análisis en tiempo real han cambiado completamente cómo gestiono mis inversiones. Puedo seguir todo en un solo lugar y tomar decisiones informadas rápidamente.',
        // Footer
        'footer.description': 'La mejor forma de gestionar tu dinero. Controla, ahorra y haz crecer tu patrimonio con FinPro.',
        'footer.product': 'Producto',
        'footer.company': 'Empresa',
        'footer.legal': 'Legal',
        'footer.rights': 'Todos los derechos reservados.',
        'partners.description': 'Empresas líderes confían en nosotros a nivel mundial',
        'footer.product.0': 'Características',
        'footer.product.1': 'Precios',
        'footer.product.2': 'Seguridad',
        'footer.product.3': 'Actualizaciones',
        'footer.company.0': 'Nosotros',
        'footer.company.1': 'Empleos',
        'footer.company.2': 'Blog',
        'footer.company.3': 'Prensa',
        'footer.legal.0': 'Privacidad',
        'footer.legal.1': 'Términos',
        'footer.legal.2': 'Cookies',
        'footer.legal.3': 'Licencias'
    },
    en: {
        // Header
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.stats': 'Statistics',
        'nav.testimonials': 'Testimonials',
        'nav.contact': 'Contact',
        'header.download': 'Download',
        // Hero
        'hero.title1': 'Take Control of Your',
        'hero.title2': 'Financial Future',
        'hero.description': 'Manage your finances with ease. Track expenses, set goals, and achieve financial freedom with our intuitive app.',
        'hero.googlePlay': 'Google Play',
        'hero.appStore': 'App Store',
        // Contact
        'contact.title': 'Contact Us',
        'contact.description': 'Have questions? We would love to hear from you. Send us a message and we will get back to you as soon as possible.',
        'contact.name': 'Name',
        'contact.namePlaceholder': 'Your name',
        'contact.email': 'Email',
        'contact.emailPlaceholder': 'Your email',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Your message',
        'contact.send': 'Send Message',
        // Features
        'features.title': 'Why Choose FinPro?',
        'features.description': 'Experience the future of personal finance with features designed for your success.',
        'features.0.title': 'Bank-Level Security',
        'features.0.description': 'Your data is protected with 256-bit encryption and advanced security protocols.',
        'features.1.title': '24/7 Support',
        'features.1.description': 'Our dedicated team is always ready to help you with any question or issue.',
        'features.2.title': 'Full Control',
        'features.2.description': 'Manage all your accounts, cards and transactions from one intuitive dashboard.',
        'features.3.title': 'Instant Transfers',
        'features.3.description': 'Send and receive money instantly with no fees to other Finova users.',
        // Stats
        'stats.title': 'Millions Trust Us',
        'stats.description': 'Our numbers speak for themselves. Join the growing community of users who trust FinPro.',
        'stats.0.label': 'Downloads',
        'stats.1.label': 'Active Users',
        'stats.2.label': 'Rating',
        'stats.3.label': 'Countries',
        'stats.4.label': 'Transactions',
        'stats.5.label': 'Availability',
        'stats.badge1.title': 'Top Rated',
        'stats.badge1.subtitle': 'App Store and Play Store',
        'stats.badge2.title': 'Fast Growth',
        'stats.badge2.subtitle': '50% Annual Growth',
        'stats.badge3.title': 'Community',
        'stats.badge3.subtitle': 'Active User Base',
        // Testimonials
        'testimonials.title': 'What Our Users Say',
        'testimonials.description': 'Join thousands of satisfied users who have transformed their financial life with FinPro.',
        'testimonials.0.content': 'FinPro has been a game-changer for my savings goals. The app’s intuitive design helps me keep track of my budget and see exactly where my money is going.',
        'testimonials.1.content': 'I trust Finpro with my finances because of its security features. Plus, the app is so easy to use that managing my money has never been simpler.',
        'testimonials.2.content': 'Real-time analytics have completely changed how I manage my investments. I can track everything in one place and make informed decisions quickly.',
        // Footer
        'footer.description': 'The best way to manage your money. Control, save and grow your wealth with FinPro.',
        'footer.product': 'Product',
        'footer.company': 'Company',
        'footer.legal': 'Legal',
        'footer.rights': 'All rights reserved.',
        'partners.description': 'Leading companies trust us worldwide'
    },
    footer: __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__MotionFooter__as__footer$3e$__["footer"]
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('es');
    const t = (key)=>{
        return translations[language][key] ?? key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/finova-landing-page/context/LanguageContext.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "UJTVd0nLljhTge/UOGdW3vuo3nQ=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$finova$2d$landing$2d$page$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=finova-landing-page_context_LanguageContext_tsx_bf3d677e._.js.map