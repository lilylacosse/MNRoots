import React, { useState } from "react";

function BenefitsAccordian() {
    const [aestheicBool, setAestheticBool] = useState(false);
    const [bioBool, setBioBool] = useState(false);
    const [pollinatorBool, setPollinatorBool] = useState(false);
    const [waterBool, setWaterBool] = useState(false);
    const [soilBool, setSoilBool] = useState(false);

    return (
        <center className="accordianContainer">
            <div className="accordion">
                <button
                    className="accordion-btn"
                    onClick={() => setAestheticBool(!aestheicBool)}
                >
                    Aesthetic
                </button>
            </div>
            {aestheicBool && (
                <div class="panel">
                    Our bioregion is a font of texture, shape, and form. Evocative of
                    place and season, native plants root us to our heritage. Frank Lloyd
                    Wright famously embraced native plants in his designs. Inspiration
                    wells from waterlilies, switchgrass, purple coneflower, black-eyed
                    susan, bergamot, summer phlox, and wild roses. Futhermore, they
                    attract the birds, butterflies, and wildlife we love to observe.
                </div>
            )}

            <div className="accordion">
                <button className="accordion-btn" onClick={() => setBioBool(!bioBool)}>
                    Biodiversity
                </button>
            </div>
            {bioBool && (
                <div className="panel">
                    Native biota are natural stewards of their enviroment. They are
                    intimately associated with one another and with the fauna of our
                    ecosystems. Their high biological variation increases food resources,
                    ecosystem regulation, pest control, and disease control, benefiting
                    both humans and wildlife. Inherently adapted to our ecosystem, native
                    plants are self-sufficient, requiring low or no maintence.
                </div>
            )}
            <div className="accordion">
                <button
                    class="accordion-btn"
                    onClick={() => setPollinatorBool(!pollinatorBool)}
                >
                    Pollinators
                </button>
            </div>
            {pollinatorBool && (
                <div class="panel">
                    Birds, bees, butterlies, and moths; we depend on these delicate beings
                    to pollinate all flowering plants. Fruit, flowers, and nuts are gifts
                    cultivated by pollinators. Without these keystone species, our
                    ecosystems wither. Native plants provide specialized nutrition and
                    habitats in beautiful symbiosis with pollinators
                </div>
            )}
            <div className="accordion">
                <button class="accordion-btn" onClick={() => setWaterBool(!waterBool)}>
                    Water Conservation and Quality
                </button>
            </div>
            {waterBool && (
                <div class="panel">
                    Indigenous plants growing in community have deep, vast matrixes of
                    roots. Mature root matrices prevent soil compaction allowing rainwater
                    and runoff to soak into the ground. Highly varied and dense root
                    systems slow
                </div>
            )}
            <div className="accordion">
                <button class="accordion-btn" onClick={() => setSoilBool(!soilBool)}>
                    Soil Health
                </button>
            </div>
            {soilBool && <div class="panel">yay</div>}
        </center>
    );
}

export default BenefitsAccordian;
