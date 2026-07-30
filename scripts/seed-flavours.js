/**
 * Seed script for Etomidate Flavours products
 * Run with: node scripts/seed-flavours.js
 *
 * Note: Make sure your MONGODB_URI environment variable is set
 */

require('dotenv').config({ path: '.env.local' });

const mongoose = require("mongoose");

// Etomidate CAS Number
const ETOMIDATE_CAS = "33125-97-2";

// Flavour products data
const flavourProducts = [
  {
    slug: "etomidate-flavour-grape",
    name: "Grape",
    price: 270,
    category: "vape flavours",
    shortDescription: "Premium vape flavour infused with sweet grape essence.",
    description: `Our Grape Flavour Vape represents the perfect marriage of pharmaceutical excellence and sensory pleasure, combining our signature pharmaceutical-grade etomidate with the rich, sweet essence of ripe Concord grapes. This exceptional product has been meticulously developed to satisfy the most discerning researchers who refuse to compromise on either quality or experience.

The foundation of every Grape Flavour Vape is our pharmaceutical-grade etomidate, manufactured to exacting standards that ensure ≥99.8% purity. This compound, renowned for its exceptional pharmacological properties, serves as the active ingredient in every vape we produce. The etomidate undergoes rigorous analytical testing including High-Performance Liquid Chromatography (HPLC), Nuclear Magnetic Resonance (NMR) spectroscopy, and Mass Spectrometry to verify identity, purity, and molecular structure before it ever reaches the formulation stage.

What distinguishes our Grape Flavour Vape is the extraordinary care we take in flavor development. The grape essence we employ is not a simple synthetic flavoring but a sophisticated blend of natural grape compounds and carefully selected aroma molecules that faithfully reproduce the complex taste profile of premium Concord grapes. Our flavor scientists have spent years perfecting this formulation, balancing the sweet, slightly tart notes of ripe grapes with the base etomidate to create a harmonious flavor experience that enhances rather than masks the pharmaceutical quality of the product.

The formulation process takes place in our state-of-the-art manufacturing facility under strictly controlled conditions. Temperature, humidity, and atmospheric composition are precisely regulated throughout production to prevent degradation of either the active pharmaceutical ingredient or the delicate flavor compounds. Each batch is subjected to extensive stability testing to ensure that the flavor profile remains consistent throughout the product's shelf life.

Quality control for our Grape Flavour K-Pods extends far beyond the standard testing protocols typical in the industry. In addition to verifying etomidate purity and potency, we conduct gas chromatography-mass spectrometry (GC-MS) analysis of the flavor components, ensuring the absence of potentially harmful contaminants or adulterants. We also perform sensory evaluation panels with trained taste testers who assess flavor intensity, character, and overall acceptability before any batch is approved for release.

The physical design of our Vape Flavour reflects our commitment to both performance and user experience. The ceramic heating element provides consistent vaporization temperature that optimally releases both the etomidate and grape flavor compounds without producing harmful pyrolysis products. The medical-grade silicone mouthpiece ensures comfort during use while preventing any unwanted material interactions. The vape's internal reservoir features a sophisticated wicking system that maintains consistent liquid flow to the heating element, preventing dry hits or flavor degradation.

Packaging for our Grape Flavour Vape incorporates multiple protective technologies. Each pod is individually sealed in nitrogen-flushed foil pouches that prevent oxidation of both the etomidate and the delicate grape flavor compounds. The outer packaging features UV-opaque materials that protect against light-induced degradation, while the compact, pocket-sized design makes these pods convenient for research applications in various settings.

Our commitment to documentation ensures that you have complete traceability for every pod. Each package includes a Certificate of Analysis detailing the etomidate purity, flavor component identification, batch number, manufacturing date, and expiration date. This documentation satisfies the requirements of even the most rigorous institutional review boards and regulatory oversight bodies.

Whether you're conducting pharmacological research, exploring novel drug delivery systems, or investigating the interaction between pharmaceutical compounds and flavor profiles, our Grape Flavour Vape provides the quality, consistency, and sensory experience that distinguish truly exceptional research materials from ordinary products. Experience the difference that attention to detail makes in every aspect of pharmaceutical research.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Premium Concord Grape",
      "Flavor Type: Natural-derived blend",
      "Form: K-Pod cartridge",
      "Cartridge Material: Medical-grade components",
      "Heating Element: Ceramic coil technology",
      "Each pod contains precise dosage",
      "Nitrogen-flushed individual packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-raspberry",
    name: "Raspberry",
    price: 270,
    category: "vape flavours",
    shortDescription: "Tart and sweet raspberry flavored vape with authentic berry essence.",
    description: `Our Raspberry Flavour Vape delivers an extraordinary sensory experience that captures the essence of sun-ripened raspberries at the peak of their flavor. The perfect balance of tartness and sweetness creates a sophisticated taste profile that transforms the research experience into something genuinely pleasurable while maintaining the uncompromising pharmaceutical standards that define our entire product line.

The foundation of these exceptional vapes is our pharmaceutical-grade etomidate, manufactured to exacting specifications that guarantee ≥99.8% purity. This remarkable compound, which has earned its place as one of the most significant anesthetic agents in modern pharmacology, provides the base upon which we have built this flavored formulation. Every batch undergoes comprehensive analytical testing including HPLC purity verification, NMR structural confirmation, and mass spectrometry molecular weight validation to ensure that the etomidate content meets our rigorous standards.

The raspberry flavoring represents a triumph of flavor chemistry. Rather than relying on simple artificial raspberry flavorings that can taste medicinal or chemical, we have developed a complex blend of natural raspberry compounds, esters, and carefully selected aroma molecules that authentically reproduce the multifaceted taste of real raspberries. This includes the initial tartness that awakens the palate, the subsequent sweetness that provides satisfaction, and the subtle earthy undertones that give depth and complexity to the overall flavor experience.

Our flavor development process involved extensive sensory research and taste panel testing to achieve the optimal balance. Too much tartness can be unpleasant; too much sweetness can be cloying. Our formulation hits the perfect midpoint, creating a flavor that is refreshing and satisfying without overwhelming the senses. This makes our Raspberry Flavour Vape particularly suitable for extended research sessions where flavor fatigue could otherwise become an issue.

Manufacturing these specialized vapes requires exceptional precision. The flavor compounds must be introduced at exactly the right point in the production process and at precisely controlled temperatures to preserve their volatile aromatic components. Our production facility maintains strict environmental controls, with dedicated production lines for flavored products to prevent cross-contamination between different flavor profiles.

The quality control process for Raspberry Flavour Vape is comprehensive and multifaceted. In addition to standard etomidate potency and purity testing, we conduct headspace gas chromatography analysis to verify the volatile flavor components, sensory testing with trained panels to ensure flavor consistency, and accelerated stability testing to confirm that the raspberry flavor profile remains stable throughout the product's shelf life.

The physical design of the vape has been optimized for flavored formulations. The ceramic heating element operates at temperatures specifically calibrated to vaporize both the etomidate and the flavor compounds without thermal degradation. The airflow pathway has been engineered to provide smooth, unrestricted draws that deliver full flavor intensity while maintaining the appropriate aerosol particle size for optimal delivery.

Packaging for our Raspberry Flavour Vape reflects the special requirements of flavored pharmaceutical products. Individual nitrogen-flushed pouches prevent oxidation of both the active ingredient and the delicate raspberry flavor compounds. The packaging materials are selected for their barrier properties against both oxygen and moisture, and the compact design ensures that the vapes remain protected during transport and storage.

For researchers who value both quality and experience, our Raspberry Flavour Vape represents an ideal choice. The authentic raspberry taste, combined with pharmaceutical-grade etomidate purity and comprehensive quality documentation, creates a product that satisfies the most demanding requirements of professional research while providing a genuinely enjoyable sensory experience.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Natural Raspberry Blend",
      "Flavor Profile: Tart-Sweet Balance",
      "Form: K-Pod cartridge",
      "Heating System: Flavor-optimized ceramic coil",
      "Medical-grade components throughout",
      "Individually nitrogen-flushed packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-blueberry",
    name: "Blueberry",
    price: 270,
    category: "vape flavours",
    shortDescription: "Rich blueberry flavored etomidate K-Pods with authentic berry taste.",
    description: `Our Blueberry Flavour Vape capture the exquisite essence of wild blueberries harvested at the peak of ripeness, delivering a rich, full-bodied berry experience that elevates pharmaceutical research to new sensory heights. The deep, complex flavor profile of this product reflects our commitment to creating flavored pharmaceuticals that don't merely mask the active ingredient but transform the entire experience into something genuinely enjoyable.

At the heart of every Blueberry Flavour K-Pod lies our pharmaceutical-grade etomidate, meticulously synthesized and purified to achieve the ≥99.8% purity standard that distinguishes our products from lesser alternatives. This exceptional compound undergoes a comprehensive battery of analytical tests before being incorporated into our flavored formulations. High-Performance Liquid Chromatography verifies chemical purity, Nuclear Magnetic Resonance spectroscopy confirms molecular structure, and Mass Spectrometry validates molecular weight, ensuring that the etomidate content in every pod meets our uncompromising quality standards.

The blueberry flavoring we employ is the result of extensive research into the complex chemistry of blueberry taste. Rather than using simple artificial flavorings that produce a one-dimensional, candy-like blueberry impression, we have developed a sophisticated blend of natural blueberry compounds, including key esters, aldehydes, and aromatic molecules that collectively recreate the authentic taste of fresh blueberries. This complex formulation captures not only the obvious sweet notes but also the subtle tartness, the faint earthy undertones, and the elusive aromatic compounds that make real blueberries so distinctive.

Our manufacturing process for Blueberry Flavour K-Pods reflects the specialized requirements of working with delicate berry flavors. The production environment is maintained at precisely controlled temperature and humidity levels to prevent degradation of the volatile flavor compounds. The etomidate and blueberry flavor are combined using a proprietary process that ensures homogeneous distribution while preserving the integrity of both the pharmaceutical active ingredient and the flavor components.

Quality control for this product is extraordinarily rigorous. Beyond the standard etomidate testing, we conduct specialized analyses to verify the blueberry flavor composition, including gas chromatography-mass spectrometry (GC-MS) fingerprinting of the flavor profile, sensory evaluation by trained taste panels, and accelerated stability testing to confirm that the blueberry taste remains consistent throughout the product's shelf life. We also test for the absence of potential allergens or contaminants that could be associated with natural berry flavorings.

The physical design of our Blueberry Flavour K-Pods incorporates features specifically optimized for berry-flavored formulations. The ceramic heating element operates at a carefully calibrated temperature that vaporizes both the etomidate and the blueberry flavor compounds without reaching temperatures that would cause thermal degradation or the formation of unwanted pyrolysis products. The pod's wicking system is engineered to handle the specific viscosity characteristics of the blueberry-flavored formulation, ensuring consistent flow and preventing the dry hits that can occur with less sophisticated designs.

Packaging for these K-Pods employs multiple protective strategies to preserve the delicate blueberry flavor. Each pod is individually sealed in a nitrogen-flushed foil pouch that eliminates oxygen exposure, the primary cause of flavor degradation in berry products. The outer packaging is both UV-opaque and moisture-resistant, providing comprehensive protection during storage and transport. The compact design makes these pods convenient for research applications while ensuring they remain protected until use.

Documentation accompanying each package includes a complete Certificate of Analysis detailing the etomidate purity, flavor component verification, manufacturing batch information, and stability data. This comprehensive documentation supports institutional quality assurance requirements and facilitates regulatory compliance for research applications.

Whether you're exploring the interaction between pharmaceutical compounds and flavor profiles, investigating patient preference factors in drug delivery systems, or simply seeking a premium flavored research product that delivers both exceptional quality and genuine sensory pleasure, our Blueberry Flavour Vape provide the sophisticated taste experience and uncompromising pharmaceutical standards that define excellence in research materials.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Premium Wild Blueberry",
      "Flavor Profile: Rich and Full-Bodied",
      "Form: K-Pod cartridge",
      "Heating System: Ceramic coil optimized for berry flavors",
      "Medical-grade components throughout",
      "Individually nitrogen-flushed packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-honeydew",
    name: "Honeydew",
    price: 270,
    category: "vape flavours",
    shortDescription: "Refreshing honeydew melon flavored etomidate K-Pods with cool, crisp taste.",
    description: `Our Honeydew Flavour Vape transport you to a refreshing oasis with every use, capturing the delicate essence of perfectly ripened honeydew melons at the peak of their sweetness. This sophisticated flavor profile combines the light, clean taste of fresh melon with the unmistakable quality of our pharmaceutical-grade etomidate, creating a research experience that is as pleasant as it is precise.

The foundation of every Honeydew Flavour K-Pod is our signature pharmaceutical-grade etomidate, meticulously manufactured to achieve and maintain ≥99.8% purity. This remarkable compound, which has revolutionized anesthetic pharmacology through its unique pharmacokinetic profile and exceptional safety characteristics, serves as the active ingredient in each pod. Prior to flavor formulation, every batch undergoes comprehensive analytical verification including HPLC purity analysis, NMR structural confirmation, mass spectrometry molecular weight validation, and complete elemental analysis.

The honeydew melon flavoring we've developed represents years of research into the volatile compounds that create the distinctive taste of this beloved summer fruit. Our formulation captures the subtle sweetness, the faint floral notes, and the refreshing coolness that characterize perfectly ripe honeydew. Unlike artificial melon flavorings that often taste synthetic or overly sweet, our natural-derived blend authentically reproduces the complex flavor chemistry of real honeydew melon, creating a sophisticated taste experience that elevates your research protocols.

Manufacturing our Honeydew Flavour K-Pods requires exceptional precision, particularly because melon flavors contain delicate volatile compounds that are easily degraded by heat, oxidation, or improper handling. Our production facility maintains strictly controlled environmental conditions throughout the manufacturing process, with temperature and humidity precisely regulated to preserve the integrity of both the etomidate active ingredient and the fragile melon flavor components. The etomidate and honeydew flavor are combined using proprietary techniques developed specifically for temperature-sensitive flavor formulations.

Our comprehensive quality control program for Honeydew Flavour K-Pods extends well beyond standard pharmaceutical testing. In addition to verifying etomidate purity and potency through validated analytical methods, we conduct specialized gas chromatography-olfactometry (GC-O) analysis to identify and quantify the specific aroma compounds that contribute to the honeydew flavor profile. Sensory evaluation panels assess flavor authenticity, intensity, and overall character, while accelerated stability studies ensure that the delicate melon flavor remains stable throughout the product's shelf life.

The physical design of our Honeydew Flavour K-Pods incorporates features specifically optimized for melon-flavored formulations. The ceramic heating element operates at carefully calibrated temperatures that optimally vaporize both the etomidate and the volatile melon flavor compounds without causing thermal degradation. This precision temperature control is essential for melon flavors, which contain heat-sensitive compounds that can develop off-notes if exposed to excessive temperatures. The advanced wicking system ensures consistent liquid flow regardless of orientation or usage patterns.

Packaging for our Honeydew Flavour K-Pods employs sophisticated protective strategies designed specifically for delicate melon flavors. Each pod is individually sealed in pharmaceutical-grade, nitrogen-flushed pouches that eliminate oxygen exposure—the primary cause of flavor degradation in melon-containing products. The multi-layer packaging materials provide barriers against moisture, light, and oxygen migration, while the compact form factor makes these pods ideal for research applications in laboratory or field settings.

Complete documentation accompanies every shipment, including Certificates of Analysis detailing etomidate purity, comprehensive flavor component analysis, manufacturing batch records, stability data, and expiration dating based on real-time and accelerated aging studies. This thorough documentation supports institutional quality assurance programs and facilitates compliance with regulatory requirements for research materials.

For researchers seeking a refreshing, light flavor option that doesn't compromise on pharmaceutical quality, our Honeydew Flavour Vape deliver an exceptional combination of cool melon taste and uncompromising etomidate purity. Experience the refreshing difference that comes from genuine attention to every detail of product development and manufacturing.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Premium Honeydew Melon",
      "Flavor Profile: Light, Sweet, Refreshing",
      "Form: K-Pod cartridge",
      "Heating System: Temperature-optimized ceramic coil",
      "Medical-grade components throughout",
      "Nitrogen-flushed individual packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-strawberry-mango",
    name: "Strawberry Mango",
    price: 270,
    category: "vape flavours",
    shortDescription: "Exotic tropical blend of strawberry and mango flavored K-Pods.",
    description: `Tropical paradise meets pharmaceutical precision in our Strawberry Mango Flavour Vape, creating an extraordinary fusion of two beloved fruits that transport your senses to sun-drenched beaches and lush island landscapes. This exotic blend combines the sweet, slightly tart essence of perfectly ripened strawberries with the luscious, creamy tropical notes of authentic mango, resulting in a flavor experience that is truly unique in the world of pharmaceutical research products.

The foundation of this exceptional product is our pharmaceutical-grade etomidate, manufactured to the exacting standards that have made our products the preferred choice of research institutions worldwide. Each batch undergoes comprehensive analytical testing including High-Performance Liquid Chromatography for purity verification, Nuclear Magnetic Resonance spectroscopy for structural confirmation, and Mass Spectrometry for molecular weight validation. Only after passing these rigorous tests does the etomidate proceed to our flavor formulation laboratory.

Creating the perfect strawberry-mango blend required extensive research into the complex chemistry of both fruits. Strawberries contribute volatile esters, aldehydes, and furanones that create their distinctive sweet-yet-tart profile. Mangoes bring lactones, terpenes, and sulfur compounds that produce their characteristic tropical richness. Our flavor scientists spent months perfecting the ratio and selecting the optimal specific compounds from each fruit to create a harmonious blend where neither flavor overpowers the other, yet both remain distinctly present and recognizable.

The manufacturing process for this dual-flavor product is particularly demanding. Unlike single-note flavors, blended flavors require even more precise handling to ensure that neither component degrades during processing or storage. Our production facility maintains strictly controlled environmental conditions with temperature, humidity, and atmospheric composition all monitored continuously throughout the manufacturing process. The etomidate and flavor blend are combined using proprietary techniques that ensure homogeneous distribution while preserving the volatile aromatic compounds that give this product its exceptional character.

Quality control for our Strawberry Mango Flavour K-Pods is extraordinarily comprehensive. In addition to the standard etomidate purity and potency testing, we conduct gas chromatography-olfactometry (GC-O) analysis to identify and quantify the specific aroma compounds from both fruits. Sensory evaluation panels assess the balance between strawberry and mango notes, the overall flavor intensity, and the persistence of the taste experience. We also conduct accelerated stability studies specifically designed to detect any degradation in either flavor component over time.

The physical design of these K-Pods incorporates features specifically optimized for tropical fruit flavors, which tend to be more complex and heat-sensitive than simpler flavor profiles. The ceramic heating element operates at carefully calibrated temperatures that vaporize both the etomidate and the delicate tropical flavor compounds without thermal degradation. The pod's wicking system maintains consistent liquid flow, and the airflow pathway is engineered to deliver full flavor intensity with smooth, satisfying draws.

Packaging for these exotic K-Pods employs advanced protective technologies. Each pod is individually sealed in nitrogen-flushed pouches that prevent oxidation of the flavor compounds. The multi-layer packaging materials provide comprehensive barriers against moisture, light, and oxygen migration, while the compact, pocket-friendly design makes these pods convenient for research applications in any setting.

Documentation with each shipment includes complete Certificates of Analysis, flavor component verification data, manufacturing batch records, and stability documentation. This thorough documentation supports institutional quality assurance programs and facilitates regulatory compliance for research applications.

For researchers seeking an exotic flavor experience that doesn't compromise on pharmaceutical quality, our Strawberry Mango Flavour Vape deliver an exceptional combination of tropical delight and uncompromising etomidate purity.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Strawberry Mango Blend",
      "Flavor Profile: Tropical, Sweet, Exotic",
      "Form: K-Pod cartridge",
      "Heating System: Tropical flavor-optimized ceramic coil",
      "Medical-grade components throughout",
      "Individually nitrogen-flushed packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-coke",
    name: "Coke",
    price: 270,
    category: "vape flavours",
    shortDescription: "Classic cola flavored etomidate K-Pods with iconic soda taste.",
    description: `Experience the timeless, beloved taste of classic cola perfectly blended with our premium pharmaceutical-grade etomidate in our Coke Flavour K-Pods. This nostalgic flavor profile captures the essence of the world's most iconic soft drink, combining sweet caramel notes, subtle citrus undertones, and that distinctive cola spice blend with the uncompromising quality of our signature etomidate formulation.

The cola flavor we have developed is a sophisticated recreation of the classic beverage profile that has delighted consumers for over a century. Our flavor scientists have identified and blended the key aromatic compounds that create authentic cola taste, including vanilla for smoothness, cinnamon and nutmeg for warmth, citrus oils for brightness, and caramel compounds for that distinctive brown-sugar depth. The result is a flavor that instantly evokes memories of classic soda fountains while maintaining the pharmaceutical integrity required for serious research applications.

At the core of every Coke Flavour K-Pod is our pharmaceutical-grade etomidate, manufactured to the exacting standards that distinguish our products from ordinary alternatives. Each batch undergoes rigorous analytical testing including HPLC purity verification, NMR structural confirmation, and mass spectrometry molecular weight validation. Only after achieving ≥99.8% purity and passing all identity tests does the etomidate proceed to flavor formulation.

The manufacturing process for cola-flavored K-Pods presents unique challenges because cola is actually a complex blend of multiple flavor components rather than a single-note taste. Our production facility maintains precise environmental controls throughout manufacturing, with temperature, humidity, and atmospheric composition carefully regulated to preserve the volatile aromatic compounds that contribute to the cola profile. The proprietary blending process ensures that all flavor components are evenly distributed throughout the etomidate matrix.

Quality control for our Coke Flavour K-Pods is comprehensive and multifaceted. In addition to standard etomidate testing, we conduct gas chromatography-mass spectrometry (GC-MS) analysis to verify the complete cola flavor profile, ensuring the correct balance of vanilla, spice, citrus, and caramel notes. Sensory evaluation panels assess flavor authenticity compared to reference cola profiles, and accelerated stability testing confirms that the complex cola flavor remains stable throughout the product's shelf life.

The physical design of these K-Pods features our advanced ceramic heating element calibrated specifically for cola-flavored formulations. The heating profile vaporizes both the etomidate and the cola flavor compounds at optimal temperatures, preventing thermal degradation while ensuring full flavor delivery. The medical-grade silicone mouthpiece provides comfort and prevents unwanted material interactions.

Packaging for our Coke Flavour K-Pods incorporates multiple protective technologies. Each pod is individually sealed in nitrogen-flushed foil pouches to prevent oxidation of the flavor components, particularly the volatile citrus and spice notes. The outer packaging provides protection against light, moisture, and physical damage while maintaining a compact, convenient form factor for research applications.

Complete documentation with each shipment includes Certificates of Analysis, flavor component verification data, batch records, and stability documentation. This thorough documentation supports quality assurance programs and regulatory compliance.

For researchers who appreciate classic flavors combined with pharmaceutical excellence, our Coke Flavour Vape deliver an exceptional fusion of nostalgic taste and uncompromising quality.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Classic Cola",
      "Flavor Profile: Sweet, Spiced, Nostalgic",
      "Form: K-Pod cartridge",
      "Heating System: Cola-optimized ceramic coil",
      "Medical-grade components throughout",
      "Nitrogen-flushed individual packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-green-apple",
    name: "Green Apple",
    price: 270,
    category: "vape flavours",
    shortDescription: "Crisp and tangy green apple flavored K-Pods with authentic tartness.",
    description: `Our Green Apple Flavour Vape deliver the invigorating taste of freshly picked Granny Smith apples, capturing that distinctive crisp tartness that makes green apples so refreshingly different from their sweeter red counterparts. This sophisticated flavor profile combines the sharp, mouth-tingling acidity of unripe apple with subtle sweet undertones, creating a complex taste experience that awakens the senses while delivering pharmaceutical-grade etomidate.

The foundation of every Green Apple Flavour K-Pod is our pharmaceutical-grade etomidate, manufactured under strict quality control protocols that ensure ≥99.8% purity. This exceptional compound, which has earned its reputation as one of the most reliable pharmaceutical agents in modern medicine, undergoes comprehensive analytical testing before flavor formulation. High-Performance Liquid Chromatography verifies chemical purity, Nuclear Magnetic Resonance spectroscopy confirms molecular structure, and Mass Spectrometry validates molecular weight, ensuring that the etomidate in every pod meets our uncompromising standards.

The green apple flavoring we've developed is a masterful recreation of the authentic Granny Smith apple taste. Unlike artificial apple flavorings that often taste overly sweet or candy-like, our formulation captures the genuine complexity of real green apples—the initial sharp tartness that makes your mouth water, the subtle sweetness that emerges as the flavor develops, and the faint grassy, almost citrusy undertones that distinguish true green apple character from simple artificial approximations.

Our flavor scientists achieved this authentic profile through extensive research into the volatile compounds that create green apple taste. Key components include malic acid for the characteristic tartness, various esters that contribute fruity notes, and aldehydes that provide the fresh, crisp top notes. The precise balance of these compounds creates a flavor that sophisticated tasters immediately recognize as genuine green apple rather than generic "apple" flavoring.

Manufacturing our Green Apple Flavour K-Pods requires exceptional attention to environmental conditions. The volatile compounds responsible for green apple flavor are particularly susceptible to degradation from heat and oxidation. Our production facility maintains strictly controlled temperatures throughout the manufacturing process, with specialized handling protocols that preserve the integrity of both the etomidate active ingredient and the delicate flavor components.

Quality control for these K-Pods is extraordinarily comprehensive. Beyond standard etomidate testing, we conduct headspace gas chromatography to verify the volatile flavor profile, sensory evaluation with trained taste panels to assess tartness balance and overall character, and accelerated stability testing to ensure the green apple flavor remains vibrant throughout the product's shelf life.

The physical design of our Green Apple Flavour K-Pods incorporates features specifically optimized for tart fruit flavors. The ceramic heating element operates at carefully calibrated temperatures that vaporize both the etomidate and the tart flavor compounds without thermal degradation. The pod's airflow system delivers the full flavor intensity while maintaining smooth, comfortable draws.

Packaging employs advanced protective technologies specifically selected for tart flavor preservation. Each pod is individually nitrogen-flushed and sealed to prevent oxidation, which is particularly critical for maintaining the sharp, fresh character that defines authentic green apple taste. The compact, durable packaging protects the product during transport and storage while remaining convenient for research applications.

For researchers who appreciate the sophisticated, tart character of genuine green apples combined with pharmaceutical-grade quality, our Green Apple Flavour Vape deliver an exceptional experience that satisfies the most demanding requirements of professional research.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Premium Green Apple (Granny Smith)",
      "Flavor Profile: Crisp, Tart, Refreshing",
      "Form: K-Pod cartridge",
      "Heating System: Tart flavor-optimized ceramic coil",
      "Medical-grade components throughout",
      "Nitrogen-flushed individual packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
  {
    slug: "etomidate-flavour-thai-mango",
    name: "Thai Mango",
    price: 270,
    category: "vape flavours",
    shortDescription: "Authentic Thai mango flavored etomidate K-Pods with exotic tropical sweetness.",
    description: `Experience the extraordinary exotic sweetness of authentic Thai mangoes in our premium K-Pods, a tropical luxury that transports your senses directly to the lush orchards of Southeast Asia where these remarkable fruits achieve their peak intensity. Our Thai Mango Flavour captures the unique, concentrated sweetness that distinguishes Thai mangoes from all other varieties, delivering an authentic taste of tropical paradise combined with uncompromising pharmaceutical-grade etomidate.

Thai mangoes are renowned throughout the world for their exceptional sweetness, complex flavor profile, and silky, fiber-free texture. Unlike the larger, milder varieties grown in other regions, Thai mangoes develop an intense, honey-like sweetness balanced by subtle tart undertones that prevent the flavor from becoming cloying. Our flavor scientists have spent years studying the volatile compounds that create this distinctive taste, identifying the specific esters, terpenes, and lactones that characterize authentic Thai mango flavor.

The foundation of our Thai Mango Flavour K-Pods is our pharmaceutical-grade etomidate, manufactured to the exacting standards that have established our reputation for quality in research communities worldwide. Each batch undergoes comprehensive analytical verification including High-Performance Liquid Chromatography for purity quantification, Nuclear Magnetic Resonance spectroscopy for structural confirmation, and Mass Spectrometry for molecular weight validation. Only etomidate achieving ≥99.8% purity proceeds to our flavor formulation laboratory.

Creating an authentic Thai mango flavor presented unique challenges because this variety contains volatile aromatic compounds that are particularly delicate and susceptible to degradation. Our proprietary extraction and formulation techniques preserve these fragile compounds while creating a stable, homogeneous mixture with the etomidate base. The result is a flavor that sophisticated tasters immediately recognize as genuine Thai mango rather than generic tropical fruit flavoring.

Manufacturing our Thai Mango Flavour K-Pods requires exceptional environmental controls throughout the production process. Temperature, humidity, and atmospheric composition are strictly regulated to prevent oxidation and degradation of the volatile flavor compounds. Our production facility employs dedicated manufacturing lines for tropical fruit flavors to prevent cross-contamination and ensure that each batch maintains the authentic Thai mango character our customers expect.

Quality control for this exotic flavor is extraordinarily comprehensive. In addition to standard etomidate testing protocols, we conduct gas chromatography-mass spectrometry (GC-MS) analysis to create a chemical fingerprint of the Thai mango flavor profile, verifying the presence and concentration of the specific compounds that characterize this variety. Sensory evaluation panels assess flavor authenticity, intensity, and the balance between sweetness and subtle tartness.

The physical design of our Thai Mango Flavour K-Pods incorporates features specifically optimized for tropical fruit flavors, which tend to be more heat-sensitive than simpler flavor profiles. The ceramic heating element operates at carefully calibrated temperatures that vaporize both the etomidate and the delicate tropical flavor compounds without reaching temperatures that would cause thermal degradation or the formation of unwanted byproducts.

Packaging for our Thai Mango Flavour K-Pods employs advanced protective technologies specifically selected for tropical fruit preservation. Each pod is individually nitrogen-flushed and sealed in multi-layer foil pouches that provide comprehensive barriers against oxygen, moisture, and light—all factors that can degrade the delicate Thai mango flavor compounds. The compact, durable packaging protects the product during transport while maintaining convenience for research applications.

Documentation with each shipment includes complete Certificates of Analysis detailing etomidate purity, comprehensive Thai mango flavor component analysis, manufacturing batch records, and stability data from both real-time and accelerated aging studies. This thorough documentation supports institutional quality assurance programs and facilitates regulatory compliance.

For researchers seeking an exotic tropical flavor experience that authentically captures the essence of premium Thai mangoes while maintaining pharmaceutical-grade quality standards, our Thai Mango Flavour Vape deliver an exceptional combination of sensory pleasure and uncompromising etomidate purity.`,
    specifications: [
      "Active Ingredient: Etomidate (base compound)",
      "Purity: ≥99.8% (HPLC verified)",
      "Flavor: Premium Thai Mango",
      "Flavor Profile: Exotic, Sweet, Tropical",
      "Origin: Thai mango varietal compounds",
      "Form: K-Pod cartridge",
      "Heating System: Tropical fruit-optimized ceramic coil",
      "Medical-grade components throughout",
      "Nitrogen-flushed individual packaging",
      "Certificate of Analysis included",
    ],
    sizes: [
      { label: "500ml", price: 270 },
      { label: "1000ml", price: 480 },
    ],
    inStock: true,
    image: "",
  },
];

async function seedFlavours() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI;
    if (!MONGODB_URI) {
      console.error("Error: MONGODB_URI environment variable is not set");
      console.log("Please set your MongoDB connection string:");
      console.log("  Windows: set MONGODB_URI=your_connection_string");
      console.log("  Mac/Linux: export MONGODB_URI=your_connection_string");
      process.exit(1);
    }

    await mongoose.connect(MONGODB_URI);
    console.log("✓ Connected to MongoDB");

    // Define Product Schema (same as in the app)
    const SizeSchema = new mongoose.Schema(
      {
        label: { type: String, required: true },
        price: { type: Number, required: true },
      },
      { _id: false }
    );

    const ProductSchema = new mongoose.Schema(
      {
        slug: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, enum: ["powder", "vape", "liquid", "vape flavours"], required: true },
        shortDescription: { type: String, default: "" },
        description: { type: String, default: "" },
        specifications: [{ type: String }],
        sizes: [SizeSchema],
        inStock: { type: Boolean, default: true },
        image: { type: String, default: "" },
      },
      { timestamps: true }
    );

    const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

    // Insert or update products
    let inserted = 0;
    let updated = 0;

    for (const productData of flavourProducts) {
      const existing = await Product.findOne({ slug: productData.slug });
      
      if (existing) {
        await Product.updateOne({ slug: productData.slug }, productData);
        console.log(`✓ Updated: ${productData.name}`);
        updated++;
      } else {
        await Product.create(productData);
        console.log(`✓ Created: ${productData.name}`);
        inserted++;
      }
    }

    console.log("\n" + "=".repeat(50));
    console.log("Seeding complete!");
    console.log(`  Inserted: ${inserted} products`);
    console.log(`  Updated: ${updated} products`);
    console.log(`  Total: ${flavourProducts.length} flavour products`);
    console.log("=".repeat(50));

    await mongoose.disconnect();
    console.log("✓ Disconnected from MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding products:", error.message);
    process.exit(1);
  }
}

// Run the seed function
seedFlavours();
