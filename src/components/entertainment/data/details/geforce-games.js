const geforceGames = {
  slug: "geforce-games",
  title: "GeForce Games",
  documentTitle: "GeForce Games | Team",
  lead: "Ակտիվացրեք բաժանորդագրությունը և ստացեք Performance հնարավորություն խաղալու ավելի քան 2000 խաղ GFN.AM կատալոգից",
  provider: "GFN Cloud Internet Services",
  providerUrl: "https://gfn.am/en/company.html",
  tabs: [
    {
      id: "cosmo-box",
      label: "Cosmo Box",
      blocks: [
        { type: "p", strong: true, text: "Cosmo Box` դիտիր, խաղա, վայելիր։" },
        { type: "p", text: "Cosmo Box-ը զվարճանքի կոնսոլ է, որը հասանելի է բոլոր ֆիզիկական անձանց համար։ Այն նախապես համալրված է հանրաճանաչ GeForce Games հավելվածով, ինչը թույլ է տալիս վայելել խաղերը նոր մակարդակով։" },
        { type: "p", text: "Բացահայտեք անսահման զվարճանքի հնարավորություններն և սուզվեք զվարճանքի աշխարհ՝ մեր Cosmo Box-ի կոնսոլի հետ։" },
      ],
    },
    {
      id: "requirements",
      label: "Համակարգային պահանջները",
      blocks: [
        { type: "spec", label: "MacOS", text: "Տարբերակը 10.11 կամ վայելիր բարձր" },
        { type: "spec", label: "Windows համակարգչի համար", items: ["Windows 7 64 բիթ կամ ավելի նոր, 32 բիթ չի աջակցում", "Բրաուզերի տարբերակն աջակցում է 32 բիթանոց համակարգին"] },
        { type: "spec", label: "Chrome OS", text: "Chrome բրաուզերի 77.x կամ ավելի նոր տարբերակ" },
        { type: "spec", label: "SHIELD", text: "NVIDIA SHIELD TV" },
      ],
    },
    {
      id: "devices",
      label: "Ո՞ր սարքավորումներով կարող եմ խաղալ։",
      blocks: [
        { type: "spec", label: "Բրաուզեր", text: "Chrome բրաուզերի 77.x կամ ավելի նոր տարբերակ macOS-ի, Windows-ի, Android-ի կամ Chrome OS-ի համար: Edge բրաուզերի տարբերակը 91.xx կամ ավելի ուշ Windows-ի համար" },
        { type: "spec", label: "Android", text: "Android հեռախոս կամ պլանշետ՝ 2 ԳԲ ազատ հիշողությամբ, Android 5.0 (L) կամ ավելի բարձր և OpenGL ES3.2 կամ ավելի բարձր աջակցությամբ" },
        { type: "spec", label: "iOS", text: "iPhone՝ iOS 14.3 կամ ավելի նոր տարբերակով: iPadOS 14.3 կամ ավելի նոր տարբերակով աշխատող iPad" },
        { type: "spec", label: "Android TV", text: "Հեռուստացույց Android TV OS Android 5.0 (L) կամ ավելի նոր տարբերակով, աջակցում է OpenGL ES3.2 կամ ավելի բարձր: Chromecast Google TV-ի աջակցությամբ, 2021 թ" },
        { type: "spec", label: "Smart TV", items: ["LG հեռուստացույցներ 2021/2022/2023՝ webOS-ի վերջին որոնվածով և LG TV բրաուզերի թարմացումներով", "2021/2022/2023 Samsung Հեռուստացույցներ"] },
        { type: "p", text: "Ավելի մանրամասն կարող եք ծանոթանալ ՝" },
        { type: "link", href: "http://gfn.am/hy/guide/requirements-smart-tv.html", label: "http://gfn.am/hy/guide/requirements-smart-tv.html" },
        { type: "p", text: "Բոլոր խաղերը արդեն տեղադրված են և ակտիվանում են GFN.AM-ի ամպային սերվերում, որը թույլ է տալիս միացնել պահանջկոտ խաղեր գրեթե ցանկացած սարքի վրա՝ PC, Mac, TV և smartphone:" },
      ],
    },
    {
      id: "activation",
      label: "Ակտիվացում և Ապաակտիվացում",
      blocks: [
        { type: "p", strong: true, text: "Performance բաժանորդագրությունը ակտիվացնելու կամ ապաակտիվացնելու համար անցեք «Ծառայություններ» բաժին My Team հավելվածում։" },
        { type: "p", text: "Այլ մեթոդներ՝" },
        { type: "ussd", code: "*321#", text: "Performance բաժանորդագրությունն ակտիվացնելու համար հավաքեք" },
        { type: "ussd", code: "*320#", text: "Performance բաժանորդագրությունն ապաակտիվացնելու համար հավաքեք" },
      ],
    },
    {
      id: "how-to-start",
      label: "Ինչպե՞ս սկսել խաղալ։",
      blocks: [
        { type: "p", strong: true, text: "Խաղալու համար՝" },
        {
          type: "ol",
          items: [
            "Ակտիվացրեք Performance բաժանորդագրությունը «Ծառայություններ» բաժնում My Team հավելվածում կամ հավաքեք *321# հրահանգը",
            "Գրանցվեք և մուտք գործեք GFN.AM կայք TEAM կոճակի միջոցով ձեր հեռախոսահամարով",
            "AM կայքից ներբեռնեք հավելվածը",
          ],
        },
      ],
    },
    {
      id: "availability",
      label: "Ու՞մ է հասանելի։",
      blocks: [{ type: "p", text: "Ծառայությունը հասանելի է բոլոր սակագներով ֆիզիկական անձանց համար։" }],
    },
    {
      id: "price",
      label: "Ի՞նչ արժե բաժանորդագրությունը։",
      blocks: [
        { type: "price", period: "Ամսական", amount: 3999, text: "Բաժանորդագրության արժեքը 3,999 դրամ/ամիս։" },
        { type: "p", text: "Բաժանորդագրությունը անվճար ներառված է ԿՈՍՄՈ 4 16,500 և ԿՈՍՄՈ GIG փաթեթներում:" },
        { type: "p", text: "GeForce Games ծառայությունը մատուցվում է GFN Cloud Internet Services ընկերության կողմից (մանրամասները հղումով՝ https://gfn.am/en/company.html)։" },
      ],
    },
    {
      id: "performance",
      label: "Performance բաժանորդագրություն",
      blocks: [
        { type: "p", strong: true, text: "\"Performance\" բաժանորդագրությունը տալիս է հետևյալ առավելությունները՝" },
        {
          type: "ul",
          items: [
            "Խաղի մեկնարկի ժամանակ առաջնահերթ մուտքի հնարավորություն",
            "Գրաֆիկային որակ մինչև 1440p/60 fps",
            "NVIDIA-RTX և DLSS տեխնոլոգիայի հնարավորություն",
            "Մինչև 6 ժամ խաղի սեսիա",
            "100 խաղային ժամ 30 օրվա ընթացքում",
          ],
        },
        { type: "p", strong: true, text: "Ինչպե՞ս է գործում խաղային ժամանակը:" },
        { type: "p", text: "Թարմացվող ժամանակ, որը տրամադրվում է ամեն վճարված ժամանակահատվածի համար կրկնվող բաժանորդագրությունների դեպքում: Հիմնական ժամանակը կազմում է 100 խաղային ժամ ամեն 30 օրը: " },
        { type: "p", text: "Մուտքի պրիորիտետի ցանկացած տեսակի չոգտագործված ժամանակը, այդ թվում գնված հավելյալ ժամանակը, կարող են փոխանցվել հաջորդ 30-օրյա ժամանակահատված: " },
        { type: "p", text: "Performance բաժանորդագրության դեպքում հաջորդ 30-օրյա ժամանակահատվածին կարելի է փոխանցել մինչև 15 ժամ։ Ժամերը փոխանցվում են միայն վերջին ժամանակահատվածից և առանց ընհդհատման երկարացումի դեպքում: Բաժանորդագրությունը չի երկարացվում, եթե գումարի ավտոմատ գանձումը չի հաջողվել:" },
      ],
    },
  ],
};

export default geforceGames;
