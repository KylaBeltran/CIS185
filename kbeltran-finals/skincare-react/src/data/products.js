const products = [
    // JAPAN
    {
        id: 1,
        country: "japan",
        type: "SPF",
        name: "Biore UV Aqua Rich Watery Essence SPF 50+",
        img: "/images/jpn/biore.png",
        desc: "A sunscreen that contains Micro UV Cut Capsules that prevent uneven application."
    },
    {
        id: 2,
        country: "japan",
        type: "Face Cleanser",
        name: "Senka Perfect Whip Cleansing Foam",
        img: "/images/jpn/senka.png",
        desc: "Contains hyaluronic acid to bring moisture without disturbing the skin."
    },
    {
        id: 3,
        country: "japan",
        type: "SPF",
        name: "Canmake Mermaid Skin Gel UV",
        img: "/images/jpn/canmake-mermaid.png",
        desc: "A lightweight gel sunscreen with SPF50+ PA++++ for a refreshing feel."
    },
    {
        id: 4,
        country: "japan",
        type: "SPF",
        name: "Anessa Perfect UV Sunscreen",
        img: "/images/jpn/dhc-collagen.png",
        desc: "Blocks powerful UV rays that pierce into the skin barrier."
    },
    {
        id: 5,
        country: "japan",
        type: "essence",
        name: "Hada Labo Gokujyun Hyaluronic Acid Lotion",
        img: "/images/jpn/hadalabo-gokujyun.png",
        desc: "Contains multiple types of hyaluronic acids for deep moisture delivery."
    },
    {
        id: 6,
        country: "japan",
        type: "SPF",
        name: "Hada Labo Gokujyun UV White Gel",
        img: "/images/jpn/hadalabo-uv.png",
        desc: "Gel moisturizer with SPF50+ PA++++ and 3 moisturizing agents."
    },
    {
        id: 7,
        country: "japan",
        type: "essence",
        name: "Melano CC Intensive Anti-Spot Essence",
        img: "/images/jpn/melanocc.png",
        desc: "Vitamin C serum that helps brighten skin and fade spots."
    },
    {
        id: 8,
        country: "japan",
        type: "moisturizer",
        name: "Naturie Hatomugi Skin Conditioner",
        img: "/images/jpn/naturie.png",
        desc: "Moisturizes, brightens, and smoothens skin with coix seed extract."
    },
    {
        id: 9,
        country: "japan",
        type: "mask",
        name: "Keana Nadeshiko Rice Mask",
        img: "/images/jpn/ricemask.png",
        desc: "Moisturizes rough skin and minimizes texture."
    },

    // USA
    {
        id: 10,
        country: "usa",
        type: "mask",
        name: "BIODANCE Bio-Collagen Real Deep Mask",
        img: "/images/usa/biodance.png",
        desc: "Deep moisturizing collagen mask that hydrates multiple skin layers."
    },
    {
        id: 11,
        country: "usa",
        type: "moisturizer",
        name: "Drunk Elephant Bora Barrier Moisturizer",
        img: "/images/usa/bora.png",
        desc: "Strengthens the skin barrier with nourishing ingredients."
    },
    {
        id: 12,
        country: "usa",
        type: "moisturizer",
        name: "CeraVe Moisturizing Cream",
        img: "/images/usa/cerave.png",
        desc: "Ceramides + hyaluronic acid for 24-hour hydration."
    },
    {
        id: 13,
        country: "usa",
        type: "toner",
        name: "The Ordinary Glycolic Acid 7% Toner",
        img: "/images/usa/glycolic.png",
        desc: "Exfoliates, smoothes texture, and brightens skin."
    },
    {
        id: 14,
        country: "usa",
        type: "mask",
        name: "Mighty Patch",
        img: "/images/usa/mighty.png",
        desc: "Absorbs pimple gunk during skin emergencies."
    },
    {
        id: 15,
        country: "usa",
        type: "toner",
        name: "The Ordinary Niacinamide 10% + Zinc 1%",
        img: "/images/usa/ordinary.png",
        desc: "Targets blemishes and improves skin smoothness."
    },
    {
        id: 16,
        country: "usa",
        type: "Face Cleanser",
        name: "PanOxyl Acne Foaming Wash 10%",
        img: "/images/usa/panoxyl.png",
        desc: "Clears acne and prevents new breakouts."
    },
    {
        id: 17,
        country: "usa",
        type: "toner",
        name: "Medicube Zero Pore Pad",
        img: "/images/usa/zeropore.png",
        desc: "AHA + BHA toner pads to exfoliate and minimize pores."
    },
    {
        id: 18,
        country: "usa",
        type: "serum",
        name: "Glow Recipe Watermelon Glow Dew Drops",
        img: "/images/usa/glow.png",
        desc: "Hydrating brightening serum for glowing skin."
    },

    // KOREA
    {
        id: 19,
        country: "korea",
        type: "SPF",
        name: "Beauty of Joseon Relief Sun",
        img: "/images/kor/boj.png",
        desc: "SPF50+ PA++++ protection with calming ingredients."
    },
    {
        id: 20,
        country: "korea",
        type: "serum",
        name: "SKIN1004 Centella Ampoule",
        img: "/images/kor/centella.png",
        desc: "Great for redness and irritation relief."
    },
    {
        id: 21,
        country: "korea",
        type: "serum",
        name: "d'Alba White Truffle Spray Serum",
        img: "/images/kor/dalba.png",
        desc: "Dual-layer mist serum for hydration and firmness."
    },
    {
        id: 22,
        country: "korea",
        type: "moisturizer",
        name: "ILLIYOON Ceramide Ato Concentrate Cream",
        img: "/images/kor/illyoon.png",
        desc: "Strengthens the skin barrier and keeps moisture levels high."
    },
    {
        id: 23,
        country: "korea",
        type: "Face Cleanser",
        name: "ma:nyo Pure Cleansing Oil",
        img: "/images/kor/manyo.png",
        desc: "Removes waterproof makeup and restores pH balance."
    },
    {
        id: 24,
        country: "korea",
        type: "essence",
        name: "COSRX Advanced Snail 96 Essence",
        img: "/images/kor/snail.png",
        desc: "Brightens complexion and minimizes pores."
    },
    {
        id: 25,
        country: "korea",
        type: "toner",
        name: "Some By Mi Miracle Toner",
        img: "/images/kor/somebymi.png",
        desc: "AHA/BHA/PHA toner for exfoliating dead skin cells."
    },
    {
        id: 26,
        country: "korea",
        type: "serum",
        name: "Torriden DIVE IN Serum",
        img: "/images/kor/torriden.png",
        desc: "5D Hyaluronic Acid serum for deep hydration."
    },
    {
        id: 27,
        country: "korea",
        type: "moisturizer",
        name: "Dr. Althea 147 Barrier Cream",
        img: "/images/kor/147.png",
        desc: "Deep moisture + barrier repair for sensitive skin."
    },
];

export default products;
