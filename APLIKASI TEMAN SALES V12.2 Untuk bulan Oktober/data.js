const config = {
    products: [
        { id: "SKU070", group: "WAFER 2K", name: "WAFER 2K KEJU", price: 133600, boxPerCarton: 80 },
        { id: "SKU071", group: "WAFER 2K", name: "WAFER 2K COKELAT", price: 133600, boxPerCarton: 80 },
        { id: "SKU072", group: "WAFER 2K", name: "WAFER 2K WHITE", price: 133600, boxPerCarton: 80 },
        { id: "SKU073", group: "WAFER 2K", name: "WAFER 2K PINK LAVA", price: 133600, boxPerCarton: 80 },
        { id: "SKU074", group: "WAFER 2K", name: "WAFER 2K GOGUMA", price: 133600, boxPerCarton: 80 },
        { id: "SKU075", group: "WAFER 2K", name: "WAFER 2K COCOPAN", price: 133600, boxPerCarton: 80 },
        { id: "SKU076", group: "WAFER 2K", name: "WAFER 2K STRAWBERRY CC", price: 133600, boxPerCarton: 80 },
        { id: "SKU001", group: "WAFER 500", name: "WAFER 500 KEJU", price: 100800, boxPerCarton: 12 },
        { id: "SKU002", group: "WAFER 500", name: "WAFER 500 COKLAT", price: 100800, boxPerCarton: 12 },
        { id: "SKU003", group: "WAFER 500", name: "WAFER 500 GOGUMA", price: 100800, boxPerCarton: 12 },
        { id: "SKU004", group: "WAFER 500", name: "WAFER 500 COCOPAN", price: 100800, boxPerCarton: 12 },
        { id: "SKU005", group: "WAFER 1K", name: "WAFER 1K KEJU", price: 102000, boxPerCarton: 12 },
        { id: "SKU006", group: "WAFER 1K", name: "WAFER 1K COKLAT", price: 102000, boxPerCarton: 12 },
        { id: "SKU007", group: "WAFER 1K", name: "WAFER 1K PINK LAVA", price: 102000, boxPerCarton: 12 },
        { id: "SKU008", group: "WAFER 1K", name: "WAFER 1K COCOPAN", price: 102000, boxPerCarton: 12 },
        { id: "SKU009", group: "WAFER 1K", name: "WAFER 1K GOGUMA", price: 102000, boxPerCarton: 12 },
        { id: "SKU010", group: "WAFER 1K", name: "WAFER 1K CHEESECAKE STW", price: 102000, boxPerCarton: 12 },
        { id: "SKU011", group: "WAFER 5K", name: "WAFER 5K KEJU", price: 109800, boxPerCarton: 24 },
        { id: "SKU012", group: "WAFER 5K", name: "WAFER 5K COKLAT", price: 109800, boxPerCarton: 24 },
        { id: "SKU013", group: "WAFER 5K", name: "WAFER 5K WHITE", price: 109800, boxPerCarton: 24 },
        { id: "SKU014", group: "WAFER 5K", name: "WAFER 5K GOGUMA", price: 109800, boxPerCarton: 24 },
        { id: "SKU015", group: "WAFER 5K", name: "WAFER 5K CHEESE CAKE", price: 109800, boxPerCarton: 24 },
		{ id: "SKU104", group: "WAFER 5K", name: "WAFER 5K PINK LAVA", price: 109800, boxPerCarton: 24 },
        { id: "SKU016", group: "ROLLS 500", name: "ROLLS KEJU", price: 50400, boxPerCarton: 6 },
        { id: "SKU017", group: "ROLLS 500", name: "ROLLS COKLAT", price: 50400, boxPerCarton: 6 },
        { id: "SKU018", group: "ROLLS 1K", name: "BIG ROLLS KEJU", price: 102000, boxPerCarton: 6 },
        { id: "SKU019", group: "ROLLS 1K", name: "BIG ROLLS COKLAT", price: 102000, boxPerCarton: 6 },
        { id: "SKU020", group: "ROLLS 1K", name: "BIG ROLLS GOGUMA", price: 102000, boxPerCarton: 6 },
        { id: "SKU021", group: "NEXTAR 2K", name: "NEXTAR BROWNIES", price: 159300, boxPerCarton: 8 },
        { id: "SKU022", group: "NEXTAR 2K", name: "NEXTAR NANAS", price: 159360, boxPerCarton: 8 },
        { id: "SKU023", group: "NEXTAR 2K", name: "NEXTAR CHOCOPIE", price: 159360, boxPerCarton: 8 },
        { id: "SKU024", group: "NEXTAR 2K", name: "NEXTAR CHEESECAKE PIE", price: 159360, boxPerCarton: 8 },
        { id: "SKU027", group: "KRIMERO", name: "KRIMERO RSP", price: 133600, boxPerCarton: 8 },
        { id: "SKU028", group: "KRIMERO", name: "KRIMERO COKELAT", price: 133600, boxPerCarton: 8 },
        { id: "SKU029", group: "NEXTAR STAR", name: "NEXTAR STAR STRAWBERRY", price: 133600, boxPerCarton: 8 },
        { id: "SKU030", group: "NEXTAR STAR", name	: "NEXTAR STAR CHOCOLATE", price: 133600, boxPerCarton: 8 },
        { id: "SKU031", group: "NEXTAR STAR", name: "NEXTAR STAR GOGUMA", price: 133600, boxPerCarton: 8 },
        { id: "SKU033", group: "NEXTAR NOIR", name: "NOIR COKELAT", price: 102000, boxPerCarton: 12 },
        { id: "SKU034", group: "NEXTAR NOIR", name: "NOIR COOKIES", price: 102000, boxPerCarton: 12 },
        { id: "SKU035", group: "NEXTAR 5K", name: "NEXTAR 5K BROWNIES", price: 109800, boxPerCarton: 24 },
        { id: "SKU036", group: "SIIP 500", name: "SIIP 500 KEJU", price: 100800, boxPerCarton: 12 },
        { id: "SKU037", group: "SIIP 500", name: "SIIP 500 JAGUNG", price: 100800, boxPerCarton: 12 },
        { id: "SKU038", group: "SIIP 500", name: "SIIP 500 COKELAT", price: 100800, boxPerCarton: 12 },
        { id: "SKU039", group: "SIIP 500", name: "SIIP 500 COCOPAN", price: 100800, boxPerCarton: 12 },
        { id: "SKU040", group: "SIIP 1K", name: "SIIP 1K KEJU", price: 99600, boxPerCarton: 12 },
        { id: "SKU041", group: "SIIP 1K", name: "SIIP 1K JAGUNG", price: 99600, boxPerCarton: 12 },
        { id: "SKU042", group: "SIIP 1K", name: "SIIP 1K COKELAT", price: 99600, boxPerCarton: 12 },
        { id: "SKU043", group: "SIIP 2K", name: "SIIP 2K KEJU", price: 100200, boxPerCarton: 12 },
        { id: "SKU044", group: "SIIP 2K", name: "SIIP 2K JAGUNG", price: 100200, boxPerCarton: 12 },
        { id: "SKU045", group: "SIIP 2K", name: "SIIP 2K COKELAT", price: 100200, boxPerCarton: 12 },
        { id: "SKU046", group: "SIIP 2K", name: "SIIP 2K GOGUMA", price: 100200, boxPerCarton: 12 },
        { id: "SKU047", group: "AHH 500", name: "AHH 500 KEJU", price: 84000, boxPerCarton: 10 },
        { id: "SKU048", group: "AHH 500", name: "AHH 500 COKELAT", price: 84000, boxPerCarton: 10 },
        { id: "SKU049", group: "AHH 500", name: "AHH 500 GOGUMA", price: 84000, boxPerCarton: 10 },
        { id: "SKU050", group: "AHH 500", name: "AHH 500 COCOPAN", price: 84000, boxPerCarton: 10 },
        { id: "SKU051", group: "AHH 1K", name: "AHH 1K KEJU", price: 102000, boxPerCarton: 12 },
        { id: "SKU096", group: "AHH 1K", name: "AHH 1K COKELAT", price: 102000, boxPerCarton: 12 },
        { id: "SKU100", group: "AHH 1K", name: "AHH 1K STW CC", price: 102000, boxPerCarton: 12 },
        { id: "SKU052", group: "PASTA", name: "PASTA COKELAT", price: 113400, boxPerCarton: 9 },
        { id: "SKU053", group: "PASTA", name: "PASTA KEJU", price: 100200, boxPerCarton: 9 },
        { id: "SKU057", group: "TIMEBREAK 1K", name: "TIME BREAK 1K COKELAT", price: 102000, boxPerCarton: 6 },
        { id: "SKU058", group: "TIMEBREAK 1K", name: "TIME BREAK 1K GOGUMA", price: 102000, boxPerCarton: 6 },
        { id: "SKU059", group: "TIMEBREAK 1K", name: "TIME BREAK 1K COCOPAN", price: 102000, boxPerCarton: 6 },
        { id: "SKU060", group: "TIMEBREAK 2K", name: "TIME BREAK 2K COKLAT", price: 100200, boxPerCarton: 6 },
        { id: "SKU061", group: "TIMEBREAK 2K", name: "TIME BREAK 2K GOGUMA", price: 100200, boxPerCarton: 6 },
        { id: "SKU062", group: "TIMEBREAK 2K", name: "TIME BREAK 2K KLAPA", price: 100200, boxPerCarton: 6 },
        { id: "SKU063", group: "TIMEBREAK 2K", name: "TIME BREAK 2K CHEESECAKE STW", price: 100200, boxPerCarton: 6 },
        { id: "SKU064", group: "KRISBITE", name: "KRISBITE COKLAT", price: 133600, boxPerCarton: 8 },
        { id: "SKU065", group: "GRANDE", name: "GRANDE COKLAT", price: 100200, boxPerCarton: 12 },
        { id: "SKU066", group: "GRANDE", name: "GRANDE CHEESECAKE STRAWBERRY", price: 100200, boxPerCarton: 6 },
		{ id: "SKU078", group: "CSD 2K 12 PCS", name: "AMO CSD 2K LEMON", price: 20160, boxPerCarton: 12 },
        { id: "SKU079", group: "CSD 2K 12 PCS", name: "AMO CSD 2K COLA", price: 20160, boxPerCarton: 12 },
        { id: "SKU080", group: "CSD 2K 12 PCS", name: "AMO CSD 2K STRAWBERRY", price: 20160, boxPerCarton: 12 },
        { id: "SKU101", group: "CSD 2K 24 PCS", name: "AMO CSD 2K LEMON", price: 40320, boxPerCarton: 24 },
        { id: "SKU102", group: "CSD 2K 24 PCS", name: "AMO CSD 2K COLA", price: 40320, boxPerCarton: 24 },
        { id: "SKU103", group: "CSD 2K 24 PCS", name: "AMO CSD 2K STRAWBERRY", price: 40320, boxPerCarton: 24 },
        { id: "SKU081", group: "CSD 2K 24 PCS", name: "AMO CSD 2K ORANGE", price: 40320, boxPerCarton: 24 },
        { id: "SKU082", group: "CSD 2K 24 PCS", name: "AMO CSD 2K GRAPE", price: 40320, boxPerCarton: 24 },
        { id: "SKU083", group: "SIMBA 500", name: "SIMBA 500 COKELAT", price: 68000, boxPerCarton: 16 },
        { id: "SKU084", group: "SIMBA 1K", name: "SIMBA 1K COKELAT", price: 47400, boxPerCarton: 6 },
        { id: "SKU085", group: "SIMBA 1K", name: "SIMBA 1K STRAWBERRY", price: 48000, boxPerCarton: 6 },
        { id: "SKU086", group: "SIMBA 2K", name: "SIMBA 2K COKELAT ISI 10", price: 102000, boxPerCarton: 12 },
        { id: "SKU087", group: "SIMBA 2K", name: "SIMBA 2K STRAWBERRY ISI 10", price: 102000, boxPerCarton: 12 },
		{ id: "SKU105", group: "SIMBA 2K", name: "SIMBA 2K COKELAT ISI 5", price: 68000, boxPerCarton: 12 },
        { id: "SKU106", group: "SIMBA 2K", name: "SIMBA 2K STRAWBERRY ISI 5", price: 68000, boxPerCarton: 12 },
        { id: "SKU088", group: "SIMBA 2 in 1", name: "SIMBA 2 IN 1 COKELAT", price: 108000, boxPerCarton: 60 },
        { id: "SKU089", group: "SIMBA 2 in 1", name: "SIMBA 2 IN 1 STRAWBERRY", price: 108000, boxPerCarton: 60 },
        { id: "SKU090", group: "HELLO PANDA", name: "HELLO PANDA COKELAT", price: 99000, boxPerCarton: 12 },
        { id: "SKU091", group: "HELLO PANDA", name: "HELLO PANDA STRAWBERRY", price: 99000, boxPerCarton: 12 },
        { id: "SKU092", group: "HELLO PANDA", name: "HELLO PANDA COOKIES", price: 99000, boxPerCarton: 12 },
        { id: "SKU093", group: "HELLO PANDA", name: "HELLO PANDA MILK", price: 99000, boxPerCarton: 12 },
        { id: "SKU094", group: "HELLO PANDA", name: "HELLO PANDA DOUBLE", price: 99000, boxPerCarton: 12 },
        { id: "SKU095", group: "HELLO PANDA", name: "HELLO PANDA CARAMEL", price: 99000, boxPerCarton: 12 },
        { id: "SKU097", group: "SIMBA BULKY", name: "SIMBA BULKY COKELAT", price: 77000, boxPerCarton: 2 },
        { id: "SKU098", group: "SIMBA BULKY", name: "SIMBA BULKY STRAWBERRY", price: 77000, boxPerCarton: 2 },
		{ id: "SKU107", group: "NEXTAR 2K LAMA", name: "NEXTAR BROWNIES LAMA", price: 133600, boxPerCarton: 8 },
		{ id: "SKU108", group: "NEXTAR 2K LAMA", name: "NEXTAR COOKIES COCOPAN LAMA", price: 133600, boxPerCarton: 8 },
		{ id: "SKU109", group: "NEXTAR 2K LAMA", name: "NEXTAR NASTAR LAMA", price: 133600, boxPerCarton: 8 },
		{ id: "SKU110", group: "NEXTAR 2K LAMA", name: "NEXTAR COOKIES BLUEBERRY", price: 133600, boxPerCarton: 8 },
		{ id: "SKU111", group: "NEXTAR 2K LAMA", name: "NEXTAR COOKIES GOGUMA", price: 133600, boxPerCarton: 8 },
		{ id: "SKU112", group: "NEXTAR 2K LAMA", name: "NEXTAR COOKIES STRAWBERRY", price: 133600, boxPerCarton: 8 }
    ],
    discounts: {
        strataGrouping: {
			"WAFER 500": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"WAFER 1K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"ROLLS 500": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"ROLLS 1K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"TIMEBREAK 1K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"TIMEBREAK 2K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"PASTA": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"WAFER 2K": [ { minQty: 300, potongan: 5300 }, { minQty: 100, potongan: 5000 }, { minQty: 50, potongan: 4750 }, { minQty: 25, potongan: 4250 }, { minQty: 10, potongan: 3500 },  { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"WAFER 5K": [ { minQty: 300, potongan: 7600 }, { minQty: 100, potongan: 7300 }, { minQty: 50, potongan: 7050 }, { minQty: 25, potongan: 6550 }, { minQty: 10, potongan: 5800 },  { minQty: 6, potongan: 5300 }, { minQty: 3, potongan: 5050 }, { minQty: 1, potongan: 2300 } ],
			"AHH 500": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"AHH 1K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"SIIP 500": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"SIIP 1K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"SIIP 2K": [ { minQty: 10, potongan: 3500 }, { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"NEXTAR 2K": [ { minQty: 100, potongan: 5000 }, { minQty: 50, potongan: 4750 }, { minQty: 25, potongan: 4250 }, { minQty: 10, potongan: 3500 },  { minQty: 6, potongan: 3000 }, { minQty: 3, potongan: 2750 }, { minQty: 1, potongan: 2300 } ],
			"CSD 2K 12 PCS": [ { minQty: 25, potongan: 3000 }, { minQty: 16, potongan: 2500 }, { minQty: 10, potongan: 2000 }, { minQty: 5, potongan: 1300 } ],
			"CSD 2K 24 PCS": [ { minQty: 10, potongan: 6500 }, { minQty: 3, potongan: 5000 }, { minQty: 2, potongan: 2500 } ]
			/*
            "HELLO PANDA": [ { minQty: 25, potongan: 4000 }, { minQty: 25, potongan: 3000 }, { minQty: 10, potongan: 2000 }, { minQty: 3, potongan: 1000 } ],
            "HELLO PANDA Caramel": [ { minQty: 1, potongan: 3000 } ],
            "SIMBA BULKY": [ { minQty: 500, potongan: 2300 }, { minQty: 300, potongan: 1750 }, { minQty: 100, potongan: 1250 }, { minQty: 50, potongan: 1000 } ] */
        },
        strataPengambilan: {
            "main": {
                "appliesTo": ["WAFER 500", "WAFER 1K", "ROLLS 500", "ROLLS 1K", "TIMEBREAK 1K", "TIMEBREAK 2K", "PASTA", "WAFER 2K", "WAFER 5K", "AHH 500", "AHH 1K", "SIIP 500", "SIIP 1K", "SIIP 2K", "NEXTAR 2K", "CSD 2K 12 PCS", "CSD 2K 24 PCS", "HELLO PANDA",  "KRIMERO", "NEXTAR STAR", "NEXTAR NOIR", "NEXTAR 5K", "KRISBITE", "GRANDE", "NEXTAR 2K LAMA" ],
                "tiers": [ { "minValue": 3000000, "discount": 0.02 }, { "minValue": 2000000, "discount": 0.015 }, { "minValue": 1000000, "discount": 0.01 } ]
            },
            "simba": {
                // <-- DITAMBAHKAN: "SIMBA BULKY" dimasukkan ke strata pengambilan Simba
                "appliesTo": ["SIMBA 500", "SIMBA 1K", "SIMBA 2K", "SIMBA 2 in 1", "SIMBA BULKY"],
                "tiers": [ { "minValue": 3000000, "discount": 0.03 }, { "minValue": 2000000, "discount": 0.025 }, { "minValue": 1000000, "discount": 0.015 }, { "minValue": 500000,  "discount": 0.0125 }, { "minValue": 300000,  "discount": 0.01 } ]
            }
        },
        cod: { "minPurchase": 1000000, "discount": 0.01 },
        promoTambahan5k: {
            appliesTo: ["SKU011", "SKU012", "SKU013", "SKU014", "SKU015", "SKU035"],
            tiers: [ { minQty: 1, potongan: 2300 } ]
        },
        promoSpesial: [
            {
                nama: "Promo Wafer & Siip 500 Maulid",
                aktif: false, // Kontrol utama promo: true (aktif) atau false (non-aktif)
                syarat: {
                    produk: [
                        // SKU untuk WAFER 500
                        "SKU001", "SKU002", "SKU003", "SKU004",
                        // SKU untuk WAFER 5000 (Wafer 5K)
                        "SKU011", "SKU012", "SKU013", "SKU014", "SKU015",
                        // SKU untuk SIIP 500
                        "SKU036", "SKU037", "SKU038", "SKU039"
                    ],
                    minNilai: 3000000 
                },
                potongan: {
                    tipe: "persen",
                    nilai: 0.02, // 2%
                    berlakuUntuk: "produk_promo" 
                }
            },
            {
                nama: "Promo AMO Maulid",
                aktif: false,
                syarat: {
                    produk: [ "SKU078", "SKU079", "SKU080", "SKU081", "SKU082" ],
                    minNilai: 1000000
                },
                potongan: {
                    tipe: "persen",
                    nilai: 0.02,
                    berlakuUntuk: "produk_promo"
                }
            }
        ]
    },
    promoPosters: [ "promo1.png", "promo2.png", "promo3.png" ],
    catalogPosters: [ "katalog1.png", "katalog2.png" ],
    loyaltyTiers: [
        { class: 'J', min: 3000000, max: 4999999, rates: { '4': 0.015, '3': 0.015, '2': 0.015, '1': 0.015 } },
        { class: 'I', min: 5000000, max: 14999999, rates: { '4': 0.0275, '3': 0.0275, '2': 0.0275, '1': 0.0275 } },
        { class: 'H', min: 15000000, max: 24999999, rates: { '4': 0.0275, '3': 0.0275, '2': 0.0275, '1': 0.0275 } },
        { class: 'G', min: 25000000, max: 34999999, rates: { '4': 0.0275, '3': 0.0275, '2': 0.0275, '1': 0.0275 } },
        { class: 'F', min: 35000000, max: 49999999, rates: { '4': 0.0275, '3': 0.0275, '2': 0.0275, '1': 0.0275 } },
        { class: 'E', min: 50000000, max: 74999999, rates: { '4': 0.0325, '3': 0.0300, '2': 0.0275, '1': 0.0250 } },
        { class: 'D', min: 75000000, max: 99999999, rates: { '4': 0.03375, '3': 0.03125, '2': 0.02875, '1': 0.02625 } },
        { class: 'C', min: 100000000, max: 174999999, rates: { '4': 0.0350, '3': 0.0325, '2': 0.0300, '1': 0.0275 } },
        { class: 'C+', min: 175000000, max: 249999999, rates: { '4': 0.03625, '3': 0.03375, '2': 0.03125, '1': 0.02875 } },
        { class: 'B', min: 250000000, max: 349999999, rates: { '4': 0.0375, '3': 0.0350, '2': 0.0325, '1': 0.0300 } },
        { class: 'B+', min: 350000000, max: 499999999, rates: { '4': 0.03875, '3': 0.03625, '2': 0.03375, '1': 0.03125 } },
        { class: 'A', min: 500000000, max: 749999999, rates: { '4': 0.0400, '3': 0.03750, '2': 0.0350, '1': 0.03250 } },
        { class: 'A+', min: 750000000, max: 999999999, rates: { '4': 0.0425, '3': 0.0400, '2': 0.0375, '1': 0.0350 } },
        { class: 'S', min: 1000000000, max: Infinity, rates: { '4': 0.0450, '3': 0.0425, '2': 0.0400, '1': 0.0375 } }
    ]

};














