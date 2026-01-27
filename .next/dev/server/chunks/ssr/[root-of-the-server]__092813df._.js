module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/faqs.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"roadsideAssistance":[{"id":"ra-01","question":"What is the average response time for a battery boost in Ottawa?","answer":"Our goal is a 15-30 minute arrival time. During extreme winter conditions in the National Capital Region, we prioritize emergency calls to ensure driver safety."},{"id":"ra-02","question":"Can I request roadside assistance for a car I'm driving but don't own?","answer":"Yes. Unlike some insurance-based programs, our service is contract-based and covers the vehicle being driven at the time of the call."},{"id":"ra-03","question":"What happens if you can't start my car with a jump start?","answer":"If a professional boost doesn't work, we can immediately transition the service to a tow to your preferred local mechanic or dealership."}],"accidentCollision":[{"id":"ac-01","question":"What are my rights under the Ontario TSSEA act after a collision?","answer":"You have the right to choose your towing provider and destination. Operators must provide an itemized invoice and a list of your rights before you consent to a tow."},{"id":"ac-02","question":"Can I retrieve personal items from my car if it's in storage?","answer":"Yes. Under Ontario law, you must be allowed to retrieve personal property from your towed vehicle without any additional charges."},{"id":"ac-03","question":"How are towing rates determined for accidents in Ontario?","answer":"Operators cannot charge more than their published maximum rates. You must be provided with a copy of the 'Maximum Rate Schedule' before consenting to the tow."}],"specialtyTowing":[{"id":"st-01","question":"Can all tow trucks handle electric vehicles (EVs)?","answer":"No. EVs require specialized flatbed equipment to prevent damage to regenerative braking systems. We are Tesla and EV specialist transporters in Ottawa."},{"id":"st-02","question":"Do you provide long-distance transport for luxury or classic cars?","answer":"Yes, we regularly shuttle high-end vehicles, including warranty transports to facilities like the Tesla center in Montreal, using specialized loading techniques."},{"id":"st-03","question":"Is towing an EV different in the winter?","answer":"EV batteries are sensitive to cold. We monitor battery temperatures during transport and follow specific manufacturer protocols for cold-weather recovery."}]});}),
"[project]/src/app/faqs/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/data/faqs.json (json)");
(()=>{
    const e = new Error("Cannot find module '@/components/ServiceSummaryAccordion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
function FAQPage() {
    // Flatten categories for Google's FAQ Schema
    const allFaqs = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$json__$28$json$29$__["default"].roadsideAssistance,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$json__$28$json$29$__["default"].accidentCollision,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$json__$28$json$29$__["default"].specialtyTowing
    ];
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFaqs.map((faq)=>({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
    };
    const categories = [
        {
            key: 'roadsideAssistance',
            label: 'Roadside Assistance'
        },
        {
            key: 'accidentCollision',
            label: 'Accident & Collision'
        },
        {
            key: 'specialtyTowing',
            label: 'Specialty Towing'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-white min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/faqs/page.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-slate-950 py-16 text-center border-b border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-black italic uppercase text-white mb-3 tracking-tighter",
                            children: [
                                "FAQ ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-600",
                                    children: "Hub"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/faqs/page.jsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/faqs/page.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px]",
                            children: "National Capital Region Support"
                        }, void 0, false, {
                            fileName: "[project]/src/app/faqs/page.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/faqs/page.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faqs/page.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 md:py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6 max-w-4xl",
                    children: [
                        categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: idx !== 0 ? "mt-20" : "",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px flex-1 bg-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/faqs/page.jsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-black italic uppercase text-slate-900 tracking-tight shrink-0 px-4",
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/faqs/page.jsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-px flex-1 bg-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/faqs/page.jsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/faqs/page.jsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-slate-50/50 rounded-[2rem] p-2 md:p-6 border border-slate-100",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$faqs$2e$json__$28$json$29$__["default"][cat.key].map((faq)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceSummaryAccordion, {
                                                title: faq.question,
                                                content: faq.answer
                                            }, faq.id, false, {
                                                fileName: "[project]/src/app/faqs/page.jsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/faqs/page.jsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, cat.key, true, {
                                fileName: "[project]/src/app/faqs/page.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-20 bg-slate-900 rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/faqs/page.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-black italic uppercase mb-4 relative z-10",
                                    children: "Still Stuck?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/faqs/page.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-8 opacity-70 font-medium relative z-10",
                                    children: "Our dispatchers are standing by 24/7 to provide live support."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/faqs/page.jsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:548-388-4586",
                                    className: "relative z-10 inline-block bg-red-600 text-white px-10 py-4 rounded-xl font-black italic uppercase text-lg hover:bg-red-700 transition-colors shadow-xl shadow-red-600/20",
                                    children: "Call Now: 548-388-4586"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/faqs/page.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/faqs/page.jsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/faqs/page.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/faqs/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/faqs/page.jsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/faqs/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/faqs/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__092813df._.js.map